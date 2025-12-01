import React, { useState, useLayoutEffect, useMemo } from "react";
import { View, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
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
    const [showSearch, setShowSearch] = useState(false);
    const [sortByAZ, setSortByAZ] = useState(false);
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { data: providers = [], isLoading, error } = useGetProvidersQuery();  

    // Configuração da parte direita do header (Conectando os botões)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row', gap: 20, marginRight: 10 }}>
                    <TouchableOpacity onPress={() => setShowSearch(prev => !prev)}>
                        <FontAwesome name="search" size={22} color="#A04D1C" />
                    </TouchableOpacity>
                    
                    {/* Botão Sliders (Filtros): Por enquanto limpa os filtros. Abrirá opções no futuro */}
                    <TouchableOpacity onPress={() => {
                        // Exemplo de ação: Resetar filtros
                        setSortByAZ(false);
                        setShowFavoritesOnly(false);
                        setSearchTerm('');
                    }}>
                        <FontAwesome name="sliders" size={22} color="#A04D1C" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation, showFavoritesOnly, sortByAZ]);

    // LÓGICA DE FILTRAGEM E ORDENAÇÃO ---
    const processedServices = useMemo(() => {
        let result = [...providers];

        // Busca por Texto (Nome ou Categoria)
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            result = result.filter(service =>
                service.name.toLowerCase().includes(lowerTerm) ||
                service.category.toLowerCase().includes(lowerTerm)
            );
        }

        // Filtro de Favoritos
        if (showFavoritesOnly) {
            result = result.filter(service => service.isFavorite);
        }

        // Ordenação A-Z
        if (sortByAZ) {
            result.sort((a, b) => a.name.localeCompare(b.name));
        }

        return result;
    }, [providers, searchTerm, showFavoritesOnly, sortByAZ]);

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
            {showSearch && (
                <View style={styles.searchContainer}>
                    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                </View>
            )}
            <SortBar 
                sortByAZ={sortByAZ}
                onToggleSort={() => setSortByAZ(prev => !prev)}
                showFavoritesOnly={showFavoritesOnly}
                onToggleFavorites={() => setShowFavoritesOnly(prev => !prev)}
            />
            <ServiceList 
                services={processedServices} 
                onServicePress={handleNavigateToDetails} 
            />  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    searchContainer: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 10,
    }
});