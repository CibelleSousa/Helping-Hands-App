import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import RenderedText from "../../components/RenderedComponents/RenderedText";
import Input from "../../components/Input/Input";
import Footer from "../../components/AuthFooter/Footer";
import { useDispatch } from 'react-redux';
import { loginSuccess } from "../../store/slices/auth";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes/AuthStackNavigator";

type LoginNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

export default function Login(){
    const dispatch = useDispatch();
    const navigation = useNavigation<LoginNavigationProp>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // (Aqui entraria a lógica de validação)
        console.log('Login com:', email, password);
        const fakeToken = 'abc123456';
        dispatch(loginSuccess(fakeToken)); // Despacha a ação de login
    };

    const handleNavigateToRegister = () => {
        navigation.navigate('Register');
    };

    return(
            <View style={styles.container}>
                <View style={styles.welcomeTextContainer}>
                    <RenderedText style = {styles.welcomeTitle}>Bem-Vindo!</RenderedText>
                    <RenderedText style = {styles.welcomeText}>Esse aplicativo foi criado pensando em fazer uma comunidade mais próxima, conectando aqueles que precisam de ajuda com aqueles dispostos a oferecer.</RenderedText>
                </View>
                <View style={styles.inputContainer}>
                    <Input inputTitle="E-mail ou Número de telefone" id="email" placeholder="exemplo@email.com" value={email} onChangeText={setEmail} />
                    <Input inputTitle="Senha" id="password" placeholder="••••••••••••" value={password} onChangeText={setPassword} />
                </View>
                <View style={styles.forgetPassowrdContainer}>
                    <TouchableOpacity style={{width: 100}}>
                        <RenderedText style={styles.forgotPasswordText}>Esqueci a senha</RenderedText>
                    </TouchableOpacity>
                </View>
                <Footer 
                    buttonText="Entrar" 
                    middleText="Ou entre com" 
                    questionText="Não possui uma conta?" 
                    linkText="Cadastre-se"
                    onMainButtonPress={handleLogin}
                    onLinkPress={handleNavigateToRegister}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 15
    },
    welcomeTextContainer:{
        width: 300,
        height: 60,
        marginBottom: 50
    },
    welcomeTitle:{
        fontFamily: 'LeagueSpartan_600SemiBold',
        fontSize: 24,
        color: '#EF762F'
    },
    welcomeText:{
        fontFamily: 'LeagueSpartan_300Light',
        fontSize: 15
    },
    inputContainer:{
        width: 300,
        height: 160,
        marginBottom: 12
    },
    forgetPassowrdContainer:{
        width: 300,
        height: 'auto',
        marginTop: 2,
        marginBottom: 40,
        alignItems: 'flex-end'
    },
    forgotPasswordText:{
        color: '#4378FF',
        textDecorationLine: 'underline',
        textAlign: 'right'
    }
})