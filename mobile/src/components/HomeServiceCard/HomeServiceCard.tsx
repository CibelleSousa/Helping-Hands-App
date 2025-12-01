import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import RenderedText from '../RenderedComponents/RenderedText';
import { stylesHomeServiceCard } from './HomeServiceCard.styles';
import { ProviderCardResponse } from '../../interfaces/provideCard.interface';

type HomeServiceCardProps = {
  service: ProviderCardResponse;
  onInfoPress: (service: ProviderCardResponse) => void;
  variant?: 'brown' | 'yellow'; // Para alternar cores como no protótipo
};

export default function HomeServiceCard({ service, onInfoPress, variant = 'yellow' }: HomeServiceCardProps) {
    const bgColor = variant === 'brown' ? '#A04D1C' : '#FEE38A';
    return(
        <TouchableOpacity style={[stylesHomeServiceCard.container, {backgroundColor: bgColor}]} onPress={() => onInfoPress(service)}>
            <View style={stylesHomeServiceCard.insideContainer}>
                <Image source={{ uri: service.urlPhoto || 'https://via.placeholder.com/100' }} style={stylesHomeServiceCard.profilePicture} />
                <View style={stylesHomeServiceCard.namePlate}>
                    <RenderedText style={stylesHomeServiceCard.profileText} numberOfLines={1} ellipsizeMode='tail'>{service.name}</RenderedText>
                    <RenderedText style={stylesHomeServiceCard.serviceText}>{service.category}</RenderedText>
                </View>
            </View>
        </TouchableOpacity>
    );
}