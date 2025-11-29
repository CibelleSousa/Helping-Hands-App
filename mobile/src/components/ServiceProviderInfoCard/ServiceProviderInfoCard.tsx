import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { ProviderProfileResponse } from "../../interfaces/providerProfile.interface";
import stylesInfoCard from "./ServiceProviderInfoCard.style";
import RenderedText from "../RenderedComponents/RenderedText";

type ServiceProviderInfoCardProps = {
    service: ProviderProfileResponse
}

export default function ServiceProviderInfoCard({ service }: ServiceProviderInfoCardProps){
    return(
        <View style={stylesInfoCard.topSection}>
            <View style={stylesInfoCard.header}>
                <Image source={{ uri: service.urlPhoto || 'https://via.placeholder.com/150' }} style={stylesInfoCard.profilePicture}/>
                    <View style={stylesInfoCard.focusBox}>
                        <RenderedText style={stylesInfoCard.focusText}>{service.focus}</RenderedText>
                    </View>
            </View>
            <View style={stylesInfoCard.profileBox}>
                <RenderedText style={stylesInfoCard.profileName}>{service.name}</RenderedText>
                <RenderedText style={stylesInfoCard.profileService}>{service.category}</RenderedText>
            </View>
            <View style={stylesInfoCard.infoBox}>
                <View style={{flexDirection: 'row'}}>
                    <View style={stylesInfoCard.infoItem}>
                        <FontAwesome name="star" size={14} color="#2260FF" />
                        <RenderedText style={stylesInfoCard.infoText}>{service.avaregeRate}</RenderedText>
                    </View>
                    <View style={[stylesInfoCard.infoItem, {marginLeft: 3}]}>
                        <FontAwesome name="commenting-o" size={14} color="#2260FF" />
                        <RenderedText style={stylesInfoCard.infoText}>{service.reviewCount}</RenderedText>
                    </View>
                </View>
                <View style={[stylesInfoCard.infoItem , {minWidth: 166, width: 'auto'}]}>
                    <Ionicons name="alarm-outline" size={14} color="#2260FF" />
                    <RenderedText style={stylesInfoCard.infoText}>{service.availability}</RenderedText>
                </View>
            </View>
            <View style={stylesInfoCard.actionBox}>
                <TouchableOpacity style={stylesInfoCard.scheduleButton}>
                    <FontAwesome name="calendar" size={14} color="white" />
                    <RenderedText style={stylesInfoCard.scheduleText}>Agendar</RenderedText>
                </TouchableOpacity>
                <TouchableOpacity style={stylesInfoCard.favoriteButton}>
                    <FontAwesome name="heart-o" size={14} color="#FFF" />
                    </TouchableOpacity>
            </View>
        </View>
    );
}