import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ServiceProviderInfoCard from "../../components/ServiceProviderInfoCard/ServiceProviderInfoCard";
import ServiceProviderInfoText from "../../components/ServiceProviderInfoText/ServiceProviderInfoText";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ServiceStackParamList } from "../../routes/ServicesStackNavigator"; 

type ServiceInfoProps = NativeStackScreenProps<ServiceStackParamList, 'ServiceInfo'>;

export default function ServiceInfo({ route }: ServiceInfoProps){
    const { service } = route.params;
    if(!service){
        return (
            <View style={styles.loadingContainer}>
                <Text>Serviço não encontrado!</Text>
            </View>
        );
    }
    return(
        <ScrollView style={styles.container}>
            <ServiceProviderInfoCard service={service} />
            <ServiceProviderInfoText service={service} />
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