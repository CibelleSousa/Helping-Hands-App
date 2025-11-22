import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ServiceProvider } from "../data/mockedServices.type";
import ServiceProviderCard from "./ServiceProviderCard/ServiceProviderCard";

// Definimos as props que este componente espera receber
type ServiceListProps = {
    services: ServiceProvider[],
    onServicePress: (service: ServiceProvider) => void,
};

export default function ServiceList({ services, onServicePress }: ServiceListProps) {
    return(
        <FlatList
            data={services}
            renderItem={({ item }) => <ServiceProviderCard service={item} onInfoPress={onServicePress} />}
            keyExtractor={item => item.id.toString()}
            style={styles.list}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
    }
});