import { StyleSheet, View, TextInput, Button, TouchableOpacity } from "react-native";
import RenderedText from "../../components/RenderedComponents/RenderedText";
import RenderedTextInput from "../../components/RenderedComponents/RenderedTextInput";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";




export default function Login() {
    return (
        <View>
            <View style = {styles.infoBox}>
                <RenderedText style = {styles.welcome}>Bem-Vindo!</RenderedText>
                <RenderedText style = {styles.baseText}>Esse aplicativo foi criado pensando em fazer uma comunidade mais próxima, conectando aqueles que precisam de ajuda com aqueles dispostos a oferecer.</RenderedText>
            </View>
            <View style = {styles.loginBox}>
                <View style = {styles.input} id="email">
                    <RenderedText style={styles.aboveInput}>E-mail ou Número de telefone</RenderedText>
                    <TextInput placeholder="Exemplo@Exemplo.com" style={styles.textInput}/>
                </View>
                <View style = {styles.input} id="password">
                    <RenderedText style={styles.aboveInput}>Senha</RenderedText>
                    <View style = {styles.passwordInput}>
                        <View style = {styles.visibilityCheck}>
                            <TextInput secureTextEntry={true} placeholder="Senha" style={styles.textInput}/>
                        </View>
                            <TouchableOpacity>
                                <RenderedText style = {styles.forgotPassword}>Esqueci a senha</RenderedText>
                            </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.button}>
                    <TouchableOpacity style = {styles.buttonOverlay}>
                        <RenderedText style = {styles.buttonText}>
                            Login
                        </RenderedText>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.loginOptionsBox}>
                <RenderedText style = {styles.loginOptionInfo}>Ou entre com</RenderedText>
                <View style = {styles.loginOptions}>
                    <TouchableOpacity>
                        <FontAwesome style = {styles.loginIcons} name='google' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome style = {styles.loginIcons} name='facebook' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome5 style = {styles.loginIcons} name='fingerprint' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.registerBox}>
                <RenderedText style = {styles.registerText}>Não tem uma conta? </RenderedText>
                <TouchableOpacity>
                    <RenderedText style = {styles.registerLink}>Cadastre-se</RenderedText>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    infoBox:{
        paddingTop: 10,
        width: 300,
        alignSelf: 'center'
    },

    welcome:{
        fontFamily: 'LeagueSpartan_600SemiBold',
        fontSize: 24,
        color: '#EF762F'
    },

    baseText: {
        fontFamily: 'LeagueSpartan_300Light',
        fontSize: 15
    },

    loginBox: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    input: {
        paddingBottom: 10,
        paddingTop: 10
    },

    aboveInput: {
        fontFamily: 'LeagueSpartan_500Medium',
        fontSize: 20
    },

    textInput: {
        fontFamily: 'LeagueSpartan_400Regular',
        color: '#EF762F',
        fontSize: 20,
        height: 45,
        width: 300,
        backgroundColor: '#FEE38A',
        borderRadius: 15,
        paddingInline: 5,
    },

    passwordInput: {
        
    },

    visibilityCheck: {
       flexDirection: 'row',
       alignItems: 'center',
    },

    visibility: {
        fontSize: 20,
        color: '#964b20ff',
        right: 30
    },

    forgotPassword: {
        paddingTop: 5,
        color: '#4378FF',
        textDecorationLine: 'underline',
        textAlign: 'right'
    },

    button: {
        paddingTop: 50
    },

    buttonOverlay: {
        backgroundColor: '#EF762F',
        height: 45,
        width: 200,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },

    buttonText: {
        fontFamily: 'LeagueSpartan_500Medium',
        fontSize: 24,
        textAlign: 'center',
        color: '#fff'
    },

    loginOptionsBox: {
        paddingTop: 30,
        alignItems: 'center'
    },

    loginOptionInfo: {
        fontFamily: 'LeagueSpartan_300Light',
        paddingBottom: 10
    },
    
    loginOptions: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    loginIcons: {
        fontSize: 30,
        height: 40,
        width: 40,
        backgroundColor: '#FEE38A',
        color: '#EF762F',
        borderRadius: 40,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },

    registerBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 20
    },

    registerText: {
        fontFamily: 'LeagueSpartan_300Light'
    },

    registerLink: {
        fontFamily: 'LeagueSpartan_300Light',
        color: '#4378FF'
    }

})