import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ServiceProviderInfoCard from "../../components/ServiceProviderInfoCard/ServiceProviderInfoCard";
import ServiceProviderInfoText from "../../components/ServiceProviderInfoText/ServiceProviderInfoText";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ServiceStackParamList } from "../../routes/ServicesStackNavigator";
import { useGetProviderByIdQuery } from "../../store/api/apiSlice";

type ServiceInfoProps = NativeStackScreenProps<ServiceStackParamList, 'ServiceInfo'>;

export default function ServiceInfo({ route }: ServiceInfoProps){
  const { service: basicServiceInfo } = route.params;
  const {data: fullServiceInfo, isLoading, error } = useGetProviderByIdQuery(basicServiceInfo.id);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando perfil...</Text>
      </View>
    )
  }

  if(error || !fullServiceInfo){
    return (
      <View style={styles.loadingContainer}>
        <Text>Erro ao carregar o perfil!</Text>
      </View>
    );
  }
  return(
    <ScrollView style={styles.container}>
      <ServiceProviderInfoCard service={fullServiceInfo} />
      <ServiceProviderInfoText service={fullServiceInfo} />
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