import React, { useState } from "react";
import { View, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Input from "../../components/Input/Input";
import RenderedText from "../../components/RenderedComponents/RenderedText";
import Footer from "../../components/AuthFooter/Footer";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes/AuthStackNavigator";
// import { useDispatch } from 'react-redux';
// import { signUpSuccess } from '../../store/slices/authSlice';

type RegisterNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

export default function Register(){
    const navigation = useNavigation<RegisterNavigationProp>();
    // const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDay] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        // (Aqui entraria a lógica de validação de senhas, etc.)
        console.log('Registrando com:', name, email, phone);
        // No futuro, você despacharia a ação de registro:
        // dispatch(signUpSuccess({ nome, email, ... }));
        
        // Por enquanto, após o cadastro, vamos navegar para o Login
        navigation.navigate('Login');
    };

    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
    };

    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.inputsContainer}>
                        <Input inputTitle="Nome Completo" placeholder="Roberto Oliveira" value={name} onChangeText={setName} />
                        <Input inputTitle="Email" placeholder="exemplo@email.com" value={email} onChangeText={setEmail} />
                        <Input inputTitle="Número do Telefone" placeholder="(xx) xxxxx-xxxx" value={phone} onChangeText={setPhone} />
                        <Input inputTitle="Data de Nascimento" placeholder="DD/MM/YYYY" value={birthDate} onChangeText={setBirthDay} />
                        <Input id="password" inputTitle="Senha" placeholder="••••••••••••" value={password} onChangeText={setPassword} />
                        <Input id="password" inputTitle="Confirme Senha" placeholder="••••••••••••" value={confirmPassword} onChangeText={setConfirmPassword} />
                    </View>
                    <RenderedText style={styles.text}>Ao continuar, você concorda com</RenderedText>
                    <View style={styles.politicsContainer}>
                        <TouchableOpacity>
                            <RenderedText style={styles.textLink}>Termos de Uso</RenderedText>
                        </TouchableOpacity>
                        <RenderedText style={styles.text}>e</RenderedText>
                        <TouchableOpacity>
                            <RenderedText style={styles.textLink}>Política de Privacidade</RenderedText>
                        </TouchableOpacity>
                    </View>
                    <Footer 
                        buttonText="Cadastre-se" 
                        middleText="Ou cadastre-se com" 
                        questionText="Já possui uma conta?" 
                        linkText="Entre" 
                        onMainButtonPress={handleRegister}
                        onLinkPress={handleNavigateToLogin}
                        />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
        paddingTop: 15
    },
    inputsContainer:{
        width: 300,
        justifyContent: 'space-evenly',
        marginBottom: 15
    },
    politicsContainer:{
        width: 300,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 3,
        flexWrap: 'wrap',
        marginBottom: 10
    },
    textLink:{
        color: '#4378FF',
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        fontFamily: 'LeagueSpartan_300Light'
    }
})
