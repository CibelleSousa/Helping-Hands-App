import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../components/Logo/Logo";

export default function Splash() {
    return(
        <View style={styles.screen}>
            <Logo color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: '#EF762F',
        alignItems: 'center',
        justifyContent: 'center'
    }
});