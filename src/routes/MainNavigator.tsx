import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import ServicesStackNavigator from './ServicesStackNavigator';
import Profile from '../screens/profile/Profile';
import WIPScreen from '../screens/WIPScreen';

export type BottomTabParamList = {
  HomeTab: undefined,
  ServicesStack: undefined,
  ChatTab: undefined,
  ProfileTab: undefined,
  CalendarTab: undefined,
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName='HomeTab'
                screenOptions={({ route }) => ({
                    headerShown: false, 
                    tabBarStyle:{
                        position: 'absolute',
                        bottom: 25,
                        left: 20,
                        right: 20,
                        elevation: 5,
                        backgroundColor: '#A04D1C',
                        borderRadius: 24,
                        height: 50,
                        width: '90%',
                        marginLeft: 20,
                        alignItems: 'center'
                    },
                    tabBarIcon: ({ size }) => {
                        let iconName: React.ComponentProps<typeof FontAwesome>['name'] = 'question-circle';

                        if (route.name === 'HomeTab') {
                            return (
                                <View style={{position: 'relative', width:64, height:64, backgroundColor: '#FEE38A', alignItems: 'center', borderRadius: 100, paddingVertical: 16, marginBottom: 40, borderWidth: 2, borderColor: '#A04D1C'}}>
                                    <FontAwesome name='home' size={30} color="#560000"/>
                                </View>
                            );
                        } else if (route.name === 'ServicesStack') {
                            return (
                                <View style={{alignSelf: 'center', paddingTop: 3}} >
                                    <FontAwesome6 name='hand-holding-heart' size={size} color='white' />
                                </View>
                            );
                        } else if (route.name === 'ChatTab') {
                            iconName = 'commenting';
                        } else if (route.name === 'ProfileTab') {
                            iconName = 'user';
                        } else if (route.name === 'CalendarTab') {
                            iconName = 'calendar';
                        }
                        return (
                            <View style={{alignSelf: 'center', paddingTop: 3}} >
                                <FontAwesome name={iconName} size={size} color='white' />
                            </View>   
                        );
                    },
                    tabBarShowLabel: false,
                })}
            >
                <Tab.Screen name='ProfileTab' component={Profile} />
                <Tab.Screen name='ChatTab' component={WIPScreen} />
                <Tab.Screen name='HomeTab' component={WIPScreen} />
                <Tab.Screen name='ServicesStack' component={ServicesStackNavigator} />
                <Tab.Screen name='CalendarTab' component={WIPScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}