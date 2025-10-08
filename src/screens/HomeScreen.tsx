import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ServiceList from "../components/ServiceList";
import MockedData from "../data/mockedServices";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ServiceList services={MockedData}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    }
});