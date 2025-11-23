import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { TokenPayload } from '../interfaces/tokenPayload.interface';

const JWT_SECRET = process.env.JWT_SECRET || 'segredo-super-secreto-do-helping-hands';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    // O formato é "Bearer <token>"
    const [, token] = authorization.split(' ');

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const { id, name, role } = decoded as TokenPayload;

        // Injeta os dados do usuário na requisição para os controllers usarem
        req.user = { id, name, role };
        return next(); // Pode passar
    } 
    catch (error) {
        return res.status(401).json({ error: 'Token inválido ou expirado' });
    }
};