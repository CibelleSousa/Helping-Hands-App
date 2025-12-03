import { StyleSheet } from "react-native";

const stylesHomeServiceCard = StyleSheet.create({
    container:{
        width: 155,
        height: 155,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 17,
        elevation: 3,
        marginHorizontal: 5
    },
    insideContainer:{
        width: 100,
        height: 94,
        alignItems: 'center',
        gap: 10
    },
    profilePicture:{
        width: 60,
        height: 60,
        borderRadius: 100
    },
    namePlate:{
        width: 140,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF",
        borderRadius: 5
    },
    profileText:{
        color: '#2260FF',
        fontSize: 14,
        fontFamily: 'LeagueSpartan_400Medium',
        lineHeight: 14
    },
    serviceText:{
        color: '#000',
        fontSize: 14,
        fontFamily: 'LeagueSpartan_300Light',
        lineHeight: 14,
        textAlign: "center"
    }
});

export {stylesHomeServiceCard};