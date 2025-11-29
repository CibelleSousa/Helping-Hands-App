import React, { useState } from "react";
import { View, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Input from "../../components/Input/Input";
import RenderedText from "../../components/RenderedComponents/RenderedText";
import Footer from "../../components/AuthFooter/Footer";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes/AuthStackNavigator";
import { useDispatch } from 'react-redux';
import { setCredentials } from "../../store/slices/auth";
import { useRegisterMutation } from "../../store/api/apiSlice";


type RegisterNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

export default function Register(){
    const navigation = useNavigation<RegisterNavigationProp>();
    const dispatch = useDispatch();

    const [registerFunc, { isLoading }] = useRegisterMutation();

    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        // Validação básica de frontend
        if (password !== confirmPassword){
            Alert.alert("Erro!", "As senhas não conferem.");
            return
        }
        if (!gender || !['M', 'F'].includes(gender.toLocaleUpperCase())){
            Alert.alert("Erro!", "Gênero Inválido.");
            return
        } // Precisa de mais validações

        try {
            const response = await registerFunc({
                fullName,
                email,
                phoneNumber,
                birthDate,
                gender: gender.toUpperCase()
            }).unwrap();
            
            dispatch(setCredentials(response));
        } 
        catch (erro: any) {
            const message = erro?.data?.error || 'Erro ao criar conta. Tente novamente.';
            Alert.alert("Erro no cadastro.", message);
        }
        
    };

    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
    };

    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.inputsContainer}>
                        <Input inputTitle="Nome Completo" placeholder="Roberto Oliveira" value={fullName} onChangeText={setfullName} />
                        <Input inputTitle="Email" placeholder="exemplo@email.com" value={email} onChangeText={setEmail} />
                        <Input inputTitle="Número do Telefone" placeholder="(xx) xxxxx-xxxx" value={phoneNumber} onChangeText={setphoneNumber} />
                        <Input inputTitle="Data de Nascimento" placeholder="DD/MM/YYYY" value={birthDate} onChangeText={setBirthDate} />
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
