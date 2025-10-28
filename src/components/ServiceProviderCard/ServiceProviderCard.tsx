import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { ServiceProvider } from "../../data/mockedServices.type";
import { stylesProviderCard } from "./ServiceProviderCard.style";
import { FontAwesome } from "@expo/vector-icons";
import RenderedText from "../RenderedComponents/RenderedText";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Definimos as props que este componente espera receber
type ServiceProviderCardProps = {
    service: ServiceProvider
};

export default function ServiceProviderCard({ service } : ServiceProviderCardProps) {
    
    return(
        <View style={stylesProviderCard.card}>
            <Image
            source={{uri: service.urlFoto || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&s'}}
            style={stylesProviderCard.profilePicture}
            />
            <View style={stylesProviderCard.infoContainer}>
                <View style={stylesProviderCard.textContainer}>
                    <RenderedText style={stylesProviderCard.profileName} fontFamily='LeagueSpartan_500Medium'>{service.nome}</RenderedText>
                    <RenderedText style={stylesProviderCard.profileService} fontFamily='LeagueSpartan_300Light'>{service.servico}</RenderedText>
                </View>
                <View style={stylesProviderCard.actionsContainer}>
                    <TouchableOpacity style={stylesProviderCard.infoButton}>
                        <RenderedText style={stylesProviderCard.infoButtonText}>Info</RenderedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProviderCard.iconButton}>
                        <FontAwesome name="calendar" size={18} color='#2260ff' />
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProviderCard.iconButton}>
                        <FontAwesome name="question-circle" size={18} color='#2260ff' />
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProviderCard.iconButton}>
                        <MaterialCommunityIcons name="cards-heart" size={18} color='#2260ff' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}