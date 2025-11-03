import { StyleSheet } from "react-native";

const FooterStyles = StyleSheet.create({
    container:{
        flex: 1,
        width: 300,
        height: 'auto',
        alignItems: 'center'
    },
    loginOptionText: {
        fontFamily: 'LeagueSpartan_300Light',
        marginTop: 16,
        marginBottom: 12,
    },
    loginOptionsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9,
    },
    loginOptionButton:{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FEE38A',
        borderRadius: 100
    },
    finalTextContainer:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 20,
        gap: 2
    },
    singUpText:{
        color: '#4378FF',
        textDecorationLine: 'underline',
        textAlign: 'right'
    }
})

export default FooterStyles;