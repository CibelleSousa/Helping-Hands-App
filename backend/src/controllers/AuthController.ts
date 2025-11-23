import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { AuthResponse } from '../interfaces/authUser.interface';
import { parseDate } from '../utils/dateFormat';

// Segredo para assinar o token (Em produção, isso vai pro .env!)
const JWT_SECRET = process.env.JWT_SECRET || 'segredo-super-secreto-do-helping-hands';

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        // Busca usuário no banco pelo email
        const user = await prisma.appUser.findFirst({
            where: { Email: email },
            include:{
                ServiceSuplier: true
            }
        });
        if (!user) {
            res.status(401).json({ error: 'E-mail ou senha inválidos' });
            return;
        }

        // Verifica a senha
        const isPasswordValid = await bcrypt.compare(password, user.PasswordHash);
        const isLegacyPassword = user.PasswordHash === password;
        if (!isPasswordValid && !isLegacyPassword) {
            res.status(401).json({ error: 'E-mail ou senha inválidos' });
            return;
        }

        const userRole = user.ServiceSuplier? 'provider': 'user';

        // Gera o Token JWT
        const token = jwt.sign(
            { id: user.ID, name: user.FullName, role: userRole }, // Dados dentro do token
            JWT_SECRET,
            { expiresIn: '7d' } // Validade de 7 dias
        );

        // Resposta Final
        const response: AuthResponse = {
            user:{
                id: user.ID,
                name: user.FullName,
                email: user.Email,
                urlPhoto: user.ProfilePhoto,
                role: userRole
            },
            token
        };
        res.status(200).json(response);

    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ error: 'Erro interno ao realizar login' });
    }
};

export const register = async (req: Request, res: Response): Promise<void> => {
    const { fullName, email, password, phoneNumber, birthDate, gender } = req.body;

    // Validações básicas
    if (!fullName || !email || !password || !phoneNumber || !birthDate || !gender) {
        res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        return;
    }
    if (!['F', 'M'].includes(gender)) {
        res.status(400).json({ error: 'Gênero inválido. Use F ou M.' });
        return;
    }
    if (password.length < 6) {
        res.status(400).json({ error: 'A senha deve ter pelo menos 6 caracteres.' });
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ error: 'Formato de e-mail inválido.' });
        return;
    }


    try {
        // Verifica se o usuário já existe
        const userExits = await prisma.appUser.findFirst({
            where:{
                OR: [{Email: email}, {PhoneNumber: phoneNumber}]
            }
        });
        if(userExits){
            res.status(400).json({error: 'Usuário já cadastrado com este e-mail ou telefone.'});
            return;
        }

        // Verifica se a data é válida
        const validBirthDate = parseDate(birthDate);
        if (!validBirthDate) {
            res.status(400).json({ error: 'Data de nascimento inválida. Use o formato DD/MM/AAAA.' });
            return;
        }

        // Criptografia da senha
        const passwordHash = await bcrypt.hash(password, 10);

        //Cria no banco
        const newUser = await prisma.appUser.create({
            data:{
                FullName: fullName,
                Email: email,
                PasswordHash: passwordHash,
                PhoneNumber: phoneNumber,
                BirthDate: validBirthDate,
                Gender: gender,
                ProfilePhoto: null 
            }
        });

        // Gera Token
        const token = jwt.sign(
            { id: newUser.ID, name: newUser.FullName, role: 'user' },
            JWT_SECRET,
            {expiresIn: '7d'}
        );

        // Resposta Final
        const response: AuthResponse = {
            user:{
                id: newUser.ID,
                name: newUser.FullName,
                email: newUser.Email,
                urlPhoto: null,
                role: 'user'
            },
            token
        };
        res.status(201).json(response);

    }
    catch (error: any) {
        console.error('Erro no cadastro: ', error);
        if (error.code === 'P2002'){
            res.status(400).json({ error: 'Já existe um usuário com este e-mail ou telefone.' });
            return;
        }
        res.status(500).json({error: 'Erro ao criar a conta.'});
    }
};