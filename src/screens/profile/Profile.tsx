import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import RenderedText from "../../components/RenderedComponents/RenderedText";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {

    return (
        <View>
            <View style = {styles.head}>

            </View>
            <View style= {styles.menuOption}>
                <FontAwesome style = {styles.icon}/>
                <RenderedText style={styles.menuText}>
                    Opt
                </RenderedText>
                <FontAwesome style = {styles.button}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {alignContent:'center',
            justifyContent: 'center'
    },
    profilePic: {height: 500, width: 500, aspectRatio: 1/1},
    profileName: {fontFamily:'LeagueSpartan_600SemiBold'},
    menuOption: {},
    button: {},
    icon: {},
    menuText: {fontFamily: 'LeagueSpartan_400Regular'}    
})