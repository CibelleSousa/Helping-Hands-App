import React from "react";
import { View, Text } from "react-native";
import { ServiceProvider } from "../../data/mockedServices.type";
import RenderedText from "../RenderedComponents/RenderedText";
import stylesInfoText from "./ServiceProviderInfoText.style";

type ServiceProviderInfoTextProps = {
    service: ServiceProvider
}

export default function ServiceProviderInfoText ({ service }: ServiceProviderInfoTextProps){
    return(
        <View style={stylesInfoText.bottomSection}>
            <RenderedText style={stylesInfoText.sectionTitle}>Sobre Mim</RenderedText>
            <RenderedText style={stylesInfoText.sectionText}>{service.textoPerfil}</RenderedText>

            <RenderedText style={stylesInfoText.sectionTitle}>Experiência Profissional</RenderedText>
            <RenderedText style={stylesInfoText.sectionText}>{service.textoExperiencia}</RenderedText>

            <RenderedText style={stylesInfoText.sectionTitle}>Destaques</RenderedText>
            
            {service.destaques.map((highlight, index) => (
            <View key={index} style={stylesInfoText.highlightItem}>
                <RenderedText style={stylesInfoText.highlightBullet}>•</RenderedText>
                <RenderedText style={stylesInfoText.highlightText}>{highlight}</RenderedText>
            </View>
            ))}

        </View>
    );
}