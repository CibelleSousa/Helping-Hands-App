import { StyleSheet } from "react-native";

export const stylesSeeMore = StyleSheet.create({
    container: {
        width: 100, // Largura do botão
        height: 30, // Mesma altura do card para alinhar
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        flexDirection: 'row'
    },
    chevronContainer: {
        width: 30,
        height: 30,
        justifyContent: 'flex-end',
        paddingBottom: 2,
        alignItems: 'center',
    },
    text: {
        color: '#A04D1C',
        fontSize: 18,
        fontFamily: 'LeagueSpartan_500Medium'
    }

});