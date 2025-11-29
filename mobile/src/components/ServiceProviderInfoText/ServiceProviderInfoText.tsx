import React from "react";
import { View, Text } from "react-native";
import { ProviderProfileResponse } from "../../interfaces/providerProfile.interface";
import RenderedText from "../RenderedComponents/RenderedText";
import stylesInfoText from "./ServiceProviderInfoText.style";

type ServiceProviderInfoTextProps = {
    service: ProviderProfileResponse
}

export default function ServiceProviderInfoText ({ service }: ServiceProviderInfoTextProps){
    return(
        <View style={stylesInfoText.bottomSection}>
            <RenderedText style={stylesInfoText.sectionTitle}>Sobre Mim</RenderedText>
            <RenderedText style={stylesInfoText.sectionText}>{service.profileText}</RenderedText>

            <RenderedText style={stylesInfoText.sectionTitle}>Experiência Profissional</RenderedText>
            <RenderedText style={stylesInfoText.sectionText}>{service.experienceText}</RenderedText>

            <RenderedText style={stylesInfoText.sectionTitle}>Destaques</RenderedText>
            
            {service.highlight.map((highlight, index) => (
            <View key={index} style={stylesInfoText.highlightItem}>
                <RenderedText style={stylesInfoText.highlightBullet}>•</RenderedText>
                <RenderedText style={stylesInfoText.highlightText}>{highlight}</RenderedText>
            </View>
            ))}

        </View>
    );
}