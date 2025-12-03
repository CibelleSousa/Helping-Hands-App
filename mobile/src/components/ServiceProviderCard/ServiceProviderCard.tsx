import React from "react";
import { View, Image, TouchableOpacity} from "react-native";
import { ProviderCardResponse } from "../../interfaces/provideCard.interface";
import { stylesProviderCard } from "./ServiceProviderCard.style";
import { FontAwesome } from "@expo/vector-icons";
import RenderedText from "../RenderedComponents/RenderedText";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Definimos as props que este componente espera receber
type ServiceProviderCardProps = {
    service: ProviderCardResponse,
    onInfoPress: (service: ProviderCardResponse) => void,
};

export default function ServiceProviderCard({ service, onInfoPress } : ServiceProviderCardProps) {
    
    return(
        <TouchableOpacity style={stylesProviderCard.container} onPress={() => onInfoPress(service)}>
            <View style={stylesProviderCard.insideCard}>
                <View style={stylesProviderCard.leftSide}>
                    <Image 
                        source={{uri: service.urlPhoto || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&s'}}
                        style={stylesProviderCard.photo}/>
                    <View style={stylesProviderCard.info}>
                        <View style={stylesProviderCard.namePlate}>
                            <RenderedText style={stylesProviderCard.profileName}>{service.name}</RenderedText>
                            <RenderedText style={stylesProviderCard.profileService}>{service.category}</RenderedText>
                        </View>
                        <View style={stylesProviderCard.infoPlate}>
                            <View style={stylesProviderCard.infoButton}>
                                <FontAwesome name="star" size={10} color='#2260ff' />
                                <RenderedText style={stylesProviderCard.label}>{service.avaregeRate.toFixed(1)}</RenderedText>
                            </View>
                            <View style={stylesProviderCard.infoButton}>
                                <FontAwesome name="comment" size={10} color='#2260ff' />
                                <RenderedText style={stylesProviderCard.label}>{service.reviewCount}</RenderedText>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={stylesProviderCard.rightSide}>
                    <TouchableOpacity style={stylesProviderCard.favButton}>
                        <MaterialCommunityIcons 
                            name={service.isFavorite ? "cards-heart" : "cards-heart-outline"} 
                            size={18} 
                            color='#2260ff' />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}