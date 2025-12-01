import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ProviderCardResponse } from "../interfaces/provideCard.interface";
import HomeServiceCard from "./HomeServiceCard/HomeServiceCard";
import SeeMoreButton from "./SeeMoreButton/SeeMoreButton";

// Definimos as props que este componente espera receber
type HomeServiceListProps = {
    services: ProviderCardResponse[],
    onServicePress: (service: ProviderCardResponse) => void,
};

export default function HomeServiceList({ services, onServicePress }: HomeServiceListProps){
    return(
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={services}
            renderItem={({ item, index }) => <HomeServiceCard service={item} onInfoPress={onServicePress} variant={index % 2 === 0 ? 'brown' : 'yellow'} />}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.content}
            style={styles.container}
            ListFooterComponent={SeeMoreButton}
        />
    );
}

const styles = StyleSheet.create({
    content: {
        marginLeft: 28,
        alignItems: 'center',
        paddingRight: 25
    },
    container: {
        minHeight: 160,
    }
});