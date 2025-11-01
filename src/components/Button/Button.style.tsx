import { StyleSheet } from "react-native";

const ButtonStyle = (color: string, backgroundColor: string) => {
    const styles = StyleSheet.create({
        button:{
            width: 200,
            height: 50,
            backgroundColor: backgroundColor,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonText:{
            fontSize: 24,
            textAlign: 'center',
            textAlignVertical: 'center',
            color: color
        }
    })

    return styles;
}

export default ButtonStyle;