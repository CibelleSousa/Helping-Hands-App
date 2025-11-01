import React from "react";
import { View, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from "react-native";
import RenderedText from "../../components/RenderedComponents/RenderedText";
import Input from "../../components/Input/Input";
import Footer from "../../components/AuthFooter/Footer";

export default function Login(){
    return(
            <View style={styles.container}>
                <View style={styles.welcomeTextContainer}>
                    <RenderedText style = {styles.welcomeTitle}>Bem-Vindo!</RenderedText>
                    <RenderedText style = {styles.welcomeText}>Esse aplicativo foi criado pensando em fazer uma comunidade mais próxima, conectando aqueles que precisam de ajuda com aqueles dispostos a oferecer.</RenderedText>
                </View>
                <View style={styles.inputContainer}>
                    <Input inputTitle="E-mail ou Número de telefone" id="email" placeholder="exemplo@email.com" />
                    <Input inputTitle="Senha" id="password" placeholder="••••••••••••" />
                </View>
                <View style={styles.forgetPassowrdContainer}>
                    <TouchableOpacity style={{width: 100}}>
                        <RenderedText style={styles.forgotPasswordText}>Esqueci a senha</RenderedText>
                    </TouchableOpacity>
                </View>
                <Footer buttonText="Entrar" middleText="Ou entre com" questionText="Não possui uma conta?" linkText="Cadastre-se"/>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 100
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