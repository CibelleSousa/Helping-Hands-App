import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ServiceList from '../components/ServiceList';
import SortBar from '../components/SortBar/SortBar';
import SearchBar from '../components/SearchBar/SearchBar';
import MockedData from '../data/mockedServices';
import { ServiceProvider } from "../data/mockedServices.type";
import RenderedText from "../components/RenderedComponents/RenderedText";

export default function HomeScreen() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredServices: ServiceProvider[] = MockedData.filter(service =>
        service.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.servico.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <View style={styles.container}>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <SortBar />
            <ServiceList services={filteredServices} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff'
    }
});