import { StyleSheet } from "react-native";

const LogoStyle = (color: string) => {
    const styles = StyleSheet.create({
        logoContainer:{
        width: 170,
        height: 240,
        },
        logoPic:{
        width: 170,
        height: 137,
        marginBottom: 3
        },
        textContainer:{
        width: 170,
        height: 75,
        marginBottom: 17,
        },
        titleText:{
        fontSize: 48,
        textAlign: 'center',
        color: color,
        lineHeight: 44
        },
        subtitleText:{
            fontSize: 12,
            textAlign: 'center',
            color: color
        }
    })

    return styles;
}

export default LogoStyle