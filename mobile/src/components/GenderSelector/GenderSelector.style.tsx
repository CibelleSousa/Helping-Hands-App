import { StyleSheet } from "react-native";

const GenderSelectorstyles = StyleSheet.create({
    container: {
        marginBottom: 10,
        alignSelf: 'flex-start'
    },
    label: {
        fontFamily: 'LeagueSpartan_500Medium',
        fontSize: 20,
    },
    optionsContainer: {
        flexDirection: 'row',
        gap: 50,
        alignItems: 'center'
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 8
    },
    optionText: {
        fontSize: 16,
        color: '#302c2cff',
        fontFamily: 'LeagueSpartan_300Light'
    }
});

export default GenderSelectorstyles;