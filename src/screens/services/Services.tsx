import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ServiceList from "../../components/ServiceList";
import SortBar from '../../components/SortBar/SortBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import MockedData from '../../data/mockedServices';
import { ServiceProvider } from "../../data/mockedServices.type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServiceStackParamList } from "../../routes/ServicesStackNavigator";


type ServiceProps = NativeStackScreenProps<ServiceStackParamList, 'ServiceList'>;

export default function Services({ navigation }: ServiceProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredServices: ServiceProvider[] = MockedData.filter(service =>
        service.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.servico.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleNavigateToDetails = (service: ServiceProvider) => {
        navigation.navigate('ServiceInfo', { service: service });
    };

    return (
        <View style={styles.container}>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <SortBar />
            <ServiceList services={filteredServices} onServicePress={handleNavigateToDetails} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff'
    }
});