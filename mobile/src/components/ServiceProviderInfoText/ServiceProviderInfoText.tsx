import React from "react";
import { View } from "react-native";
import { ProviderProfileResponse } from "../../interfaces/providerProfile.interface";
import RenderedText from "../RenderedComponents/RenderedText";
import Button from "../Button/Button";
import stylesInfoText from "./ServiceProviderInfoText.style";

type ServiceProviderInfoTextProps = {
    service: ProviderProfileResponse
}

export default function ServiceProviderInfoText ({ service }: ServiceProviderInfoTextProps){
    return(
        <View style={stylesInfoText.bottomSection}> 
            <View style={stylesInfoText.sectionContainer}>
                <RenderedText style={stylesInfoText.sectionTitle}>Sobre Mim</RenderedText>
                <RenderedText style={stylesInfoText.sectionText}>{service.profileText}</RenderedText>
            </View>
            <View style={stylesInfoText.sectionContainer}>
                <RenderedText style={stylesInfoText.sectionTitle}>Foco</RenderedText>
                <RenderedText style={stylesInfoText.sectionText}>{service.focus}</RenderedText>
            </View>
            <View style={stylesInfoText.sectionContainer}>
                <RenderedText style={stylesInfoText.sectionTitle}>Experiência Profissional</RenderedText>
                <RenderedText style={stylesInfoText.sectionText}>{service.experienceText}</RenderedText>
            </View>
            <View style={stylesInfoText.sectionContainer}>
                <RenderedText style={stylesInfoText.sectionTitle}>Destaques</RenderedText>
                {service.highlight.map((highlight, index) => (
                    <View key={index} style={stylesInfoText.highlightItem}>
                        <RenderedText style={stylesInfoText.highlightBullet}>•</RenderedText>
                        <RenderedText style={[stylesInfoText.highlightText, stylesInfoText.sectionText]}>{highlight}</RenderedText>
                    </View>
                ))}
            </View>
            <View style={{alignSelf: 'center', marginTop: 25}}>
                <Button color="#FFF" backgroundColor="#2260FF" text="Agendar" onPress={() => {}}/>
            </View>
        </View>
    );
}