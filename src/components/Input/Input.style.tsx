import { StyleSheet } from "react-native";

const Inputstyles = StyleSheet.create({
    input: {
        marginBottom: 10,
        gap: 5,
    },
    aboveInput: {
        fontFamily: 'LeagueSpartan_500Medium',
        fontSize: 20
    },
    textInput: {
        fontFamily: 'LeagueSpartan_400Regular',
        fontSize: 20,
        height: 45,
        width: 300,
        backgroundColor: '#FEE38A',
        borderRadius: 10,
        paddingInline: 5,
    },
    insidePassowrdInput:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Inputstyles;