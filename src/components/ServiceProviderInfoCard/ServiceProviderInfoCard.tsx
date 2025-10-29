import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { ServiceProvider } from "../../data/mockedServices.type";
import stylesInfoCard from "./ServiceProviderInfoCard.style";
import RenderedText from "../RenderedComponents/RenderedText";

type ServiceProviderInfoCardProps = {
    service: ServiceProvider
}

export default function ServiceProviderInfoCard({ service }: ServiceProviderInfoCardProps){
    return(
        <View style={stylesInfoCard.topSection}>
            <View style={stylesInfoCard.header}>
                <Image source={{ uri: service.urlFoto }} style={stylesInfoCard.profilePicture}/>
                    <View style={stylesInfoCard.focusBox}>
                        <RenderedText style={stylesInfoCard.focusText}>{service.focoDescricao}</RenderedText>
                    </View>
            </View>
            <View style={stylesInfoCard.profileBox}>
                <RenderedText style={stylesInfoCard.profileName}>{service.nome}</RenderedText>
                <RenderedText style={stylesInfoCard.profileService}>{service.servico}</RenderedText>
            </View>
            <View style={stylesInfoCard.infoBox}>
                <View style={{flexDirection: 'row'}}>
                    <View style={stylesInfoCard.infoItem}>
                        <FontAwesome name="star" size={14} color="#2260FF" />
                        <RenderedText style={stylesInfoCard.infoText}>{service.avaliacao}</RenderedText>
                    </View>
                    <View style={[stylesInfoCard.infoItem, {marginLeft: 3}]}>
                        <FontAwesome name="commenting-o" size={14} color="#2260FF" />
                        <RenderedText style={stylesInfoCard.infoText}>{service.comentarios}</RenderedText>
                    </View>
                </View>
                <View style={[stylesInfoCard.infoItem , {width: 166}]}>
                    <Ionicons name="alarm-outline" size={14} color="#2260FF" />
                    <RenderedText style={stylesInfoCard.infoText}>{service.disponibilidade}</RenderedText>
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