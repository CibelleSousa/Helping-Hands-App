import React from "react";
import RootNavigator from "./src/routes/RootNavigator";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App(){
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
}