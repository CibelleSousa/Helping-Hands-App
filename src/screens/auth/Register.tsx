import React from "react";
import { View, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Input from "../../components/Input/Input";
import RenderedText from "../../components/RenderedComponents/RenderedText";
import Footer from "../../components/AuthFooter/Footer";

export default function Register(){
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.inputsContainer}>
                        <Input inputTitle="Nome Completo" placeholder="Roberto Oliveira" />
                        <Input inputTitle="Email" placeholder="exemplo@email.com" />
                        <Input inputTitle="Número do Telefone" placeholder="(xx) xxxxx-xxxx" />
                        <Input inputTitle="Data de Nascimento" placeholder="DD/MM/YYYY" />
                        <Input id="password" inputTitle="Senha" placeholder="••••••••••••" />
                        <Input id="password" inputTitle="Confirme Senha" placeholder="••••••••••••" />
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
                    <Footer buttonText="Cadastre-se" middleText="Ou cadastre-se com" questionText="Já possui uma conta?" linkText="Entre" />
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
        marginVertical: 50
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
