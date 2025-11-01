import React from "react";
import { View, StyleSheet } from "react-native";
import RenderedText from "../../components/RenderedComponents/RenderedText";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes/AuthStackNavigator";

type WelcomeNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Welcome'>;

export default function Welcome() {
    const navigation = useNavigation<WelcomeNavigationProp>();
    return(
        <View style={styles.screen}>
            <View style={styles.container}>
                <Logo color="#EF762F" />
                <RenderedText style={styles.messageText} fontFamily="LeagueSpartan_300Light">Bem-vindo ao serviço, Comunitário! Esse aplicativo foi criado para aproximar pessoas de uma mesma comunidade, conectando aqueles que necessitam de ajuda à aqueles dispostos a oferecê-la.</RenderedText>
                <View style={styles.buttonContainer}>
                    <Button color="#FFF" backgroundColor="#EF762F" text="Entrar" onPress={() => navigation.navigate('Login')}/>
                    <Button color="#2260FF" backgroundColor="#FEE38A" text="Cadastrar-se" onPress={() => navigation.navigate('Register')}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        width: 400,
        height: 400,
        alignItems: 'center'
    },
    messageText:{
        fontSize: 12,
        textAlign: 'center',
        textAlignVertical: 'top',
        color: '#070707',
        marginVertical: 12,
        width: 300,
        height: 50,
        alignSelf: 'center'
    },
    buttonContainer:{
        width: 200,
        height: 102,
        alignSelf: 'center',
        gap: 12
    }
});