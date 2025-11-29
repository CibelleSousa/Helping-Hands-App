import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import ServiceList from "../../components/ServiceList";
import SortBar from '../../components/SortBar/SortBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServiceStackParamList } from "../../routes/ServicesStackNavigator";
import { useGetProvidersQuery } from "../../store/api/apiSlice";
import { ProviderCardResponse } from "../../interfaces/provideCard.interface";
import RenderedText from "../../components/RenderedComponents/RenderedText";


type ServiceProps = NativeStackScreenProps<ServiceStackParamList, 'ServiceList'>;

export default function Services({ navigation }: ServiceProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: providers = [], isLoading, error } = useGetProvidersQuery();  

    const filteredServices: ProviderCardResponse[] = providers.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleNavigateToDetails = (service: ProviderCardResponse) => {
        navigation.navigate('ServiceInfo', { service: service });
    };

    if(isLoading){
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#EF762F"/>
                <RenderedText style={{fontFamily: 'LeagueSpartan_300Light', marginTop: 10}}>Buscando Prestadores...</RenderedText>
            </View>
        )
    }

    if (error){
        console.log("ERRO DETALHADO:", JSON.stringify(error, null, 2));
        return(
            <View style={styles.centered}>
                <RenderedText style={{fontFamily: 'LeagueSpartan_300Light', marginTop: 10, color: 'red'}}>Erro ao carregar serviços.</RenderedText>
            </View>
        )
    }

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
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});