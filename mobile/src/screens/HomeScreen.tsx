import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RenderedText from "../components/RenderedComponents/RenderedText";
import HeaderHome from "../components/HeaderHome/HeaderHome";
import HomeServiceList from "../components/HomeServiceList";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useGetProvidersQuery } from "../store/api/apiSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ServiceStackParamList } from "../routes/ServicesStackNavigator";

type HomeNavigationProp = NativeStackNavigationProp<any>;

export default function HomeScreen() {
    const navigation = useNavigation<HomeNavigationProp>();
    const user = useSelector((state: RootState) => state.auth.user);
    const { data: providers = []} = useGetProvidersQuery();

    const favorites = providers.filter(p => p.isFavorite);
    const recents = providers.slice(0,3);

    const handleNavigateToDetails = (providers: any) => {
        navigation.navigate('ServiceInfo', { service: providers });
    }

    return(
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            {user && <HeaderHome profile={user}/>}
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                <RenderedText style={[styles.titles, {marginTop: 21}]}>Sua Agenda</RenderedText>
                <View style={styles.reserved}></View>
                <RenderedText style={[styles.titles, {marginTop: 21}]}>Recentes</RenderedText>
                <HomeServiceList services={recents} onServicePress={handleNavigateToDetails} />
                <RenderedText style={styles.titles}>Favoritos</RenderedText>
                <HomeServiceList services={favorites} onServicePress={handleNavigateToDetails} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 20
    },
    titles: {
        fontSize: 28,
        fontFamily: 'LeagueSpartan_600SemiBold',
        color: '#A04D1C',
        alignSelf: 'flex-start',
        marginLeft: 32,
        marginBottom: 3
    },
    reserved: {
        width: '100%',
        height: 230,
        backgroundColor: '#FEE38A',
        alignSelf: 'center',
        borderRadius: 20
    }
});