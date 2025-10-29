import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MockedData from "../../data/mockedServices";
import ServiceProviderInfoCard from "../../components/ServiceProviderInfoCard/ServiceProviderInfoCard";
import ServiceProviderInfoText from "../../components/ServiceProviderInfoText/ServiceProviderInfoText";

// Apenas para testar o estilo da tela
const exampleService = MockedData.find(service => service.id === 1);

export default function ServiceInfo(){
    if(!exampleService){
        return (
            <View style={styles.loadingContainer}>
                <Text>Serviço não encontrado!</Text>
            </View>
        );
    }
    return(
        <ScrollView style={styles.container}>
            <ServiceProviderInfoCard service={exampleService} />
            <ServiceProviderInfoText service={exampleService} />
        </ScrollView>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});