import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ProviderProfileResponse } from "../../interfaces/providerProfile.interface";
import stylesInfoCard from "./ServiceProviderInfoCard.style";
import RenderedText from "../RenderedComponents/RenderedText";

type ServiceProviderInfoCardProps = {
    service: ProviderProfileResponse
}

export default function ServiceProviderInfoCard({ service }: ServiceProviderInfoCardProps){
    return(
        <View style={stylesInfoCard.topSection}> 
            <View style={stylesInfoCard.topInfoCard}>
                <Image source={{ uri: service.urlPhoto || 'https://via.placeholder.com/150' }} style={stylesInfoCard.profilePicture}/>
                <TouchableOpacity style={stylesInfoCard.favoriteButton}>
                    <MaterialCommunityIcons name={service.isFavorite ? "cards-heart" : "cards-heart-outline"} size={18} color="#2260FF" />
                </TouchableOpacity>
            </View>
            <View style={stylesInfoCard.bottomInfoCard}>
                <View style={stylesInfoCard.namePlate}>
                    <RenderedText style={stylesInfoCard.profileName}>{service.name}</RenderedText>
                    <RenderedText style={stylesInfoCard.profileService}>{service.category}</RenderedText>
                </View>
                <View style={stylesInfoCard.generalInfo}>
                    <TouchableOpacity style={stylesInfoCard.availbility}>
                        <Ionicons name="alarm-outline" size={14} color="#2260FF" />
                        <RenderedText style={stylesInfoCard.infoText}>{service.availability}</RenderedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesInfoCard.infoButton}>
                        <FontAwesome name="comment" size={11} color="#2260FF" />
                        <RenderedText style={stylesInfoCard.infoText}>{service.reviewCount}</RenderedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesInfoCard.infoButton}>
                        <FontAwesome name="star" size={11} color="#2260FF" />
                        <RenderedText style={stylesInfoCard.infoText}>{service.avaregeRate}</RenderedText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}