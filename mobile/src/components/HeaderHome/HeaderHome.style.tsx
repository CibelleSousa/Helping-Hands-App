import { StyleSheet } from "react-native";

const HeaderHomestyles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: 298,
        height: 60,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    profilePicture:{
        width: 60,
        height: 60,
        borderRadius: 100,
        marginRight: 10
    },
    textContainer:{
        width: 101,
        height: 29,
        justifyContent: 'flex-start',
        marginRight: 120,
        marginTop: 15
    },
    welcomeText:{
        fontSize: 14,
        fontFamily: 'LeaguSpartan_300Light',
        color: '#A04D1C',
        lineHeight: 14
    },
    profileText:{
        fontSize: 18,
        fontFamily: 'LeaguSpartan_400Regular',
        color: '#000',
        lineHeight: 18
    },
    bellContainer:{
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FEE38A',
        borderRadius: 100,
        marginTop: 15
    }
})

export {HeaderHomestyles}