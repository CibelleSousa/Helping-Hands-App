import React from "react";
import { View, TouchableOpacity } from "react-native";
import RenderedText from "../RenderedComponents/RenderedText";
import Button from "../Button/Button";
import FooterStyles from "./Footer.styles";
import { FontAwesome6 } from "@expo/vector-icons";

type FooterProps ={
    buttonText: string,
    middleText: string,
    questionText: string,
    linkText: string,
    onMainButtonPress: () => void,
    onLinkPress: () => void
};

export default function Footer ({ ...props } : FooterProps) {
    return(
        <View style={FooterStyles.container}>
            <Button backgroundColor="#EF762F" color="#FFF" text={props.buttonText} onPress={props.onMainButtonPress}/>
            <RenderedText style={FooterStyles.loginOptionText}>{props.middleText}</RenderedText>
            <View style={FooterStyles.loginOptionsContainer}>
                <TouchableOpacity style={FooterStyles.loginOptionButton}>
                    <FontAwesome6 name="google" size={28} color='#EF762F' />
                </TouchableOpacity>
                <TouchableOpacity style={FooterStyles.loginOptionButton}>
                    <FontAwesome6 name="facebook" size={28} color='#EF762F' />
                </TouchableOpacity>
                <TouchableOpacity style={FooterStyles.loginOptionButton}>
                    <FontAwesome6 name="fingerprint" size={28} color='#EF762F' />
                </TouchableOpacity>
            </View>
            <View style={FooterStyles.finalTextContainer}>
                <RenderedText fontFamily="LeagueSpartan_300Light">{props.questionText}</RenderedText>
                <TouchableOpacity onPress={props.onLinkPress}>
                    <RenderedText style={FooterStyles.singUpText}>{props.linkText}</RenderedText>
                </TouchableOpacity>
            </View>
        </View>
    );
}