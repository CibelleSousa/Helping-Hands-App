import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import ServicesStackNavigator from './ServicesStackNavigator';
import Profile from '../screens/profile/Profile';
import WIPScreen from '../screens/WIPScreen';
import HomeStackNavigator from './HomeStackNavigator';

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
        <Tab.Navigator initialRouteName='HomeTab'
            screenOptions={({ route }) => ({
                headerShown: false, 
                tabBarStyle:{
                    position: 'relative',
                    bottom: 25,
                    elevation: 5,
                    backgroundColor: '#A04D1C',
                    borderRadius: 24,
                    height: 50,
                    width: '90%',
                    alignContent: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignSelf: 'center'
                },
                tabBarIcon: ({ size }) => {
                    let iconName: React.ComponentProps<typeof FontAwesome>['name'] = 'question-circle';

                    if (route.name === 'HomeTab') {
                        return (
                            <View style={{position: 'relative', alignContent: 'center', marginBottom: 30}}>
                                <FontAwesome name='home' size={30} color="#560000" 
                                style = {{textAlign: 'center',
                                        alignContent:  'center',
                                            backgroundColor: '#FEE38A',
                                            height: 64,
                                            width: 64,
                                            textAlignVertical: 'center',
                                            borderRadius: 100,
                                            borderWidth: 2,
                                            borderColor: '#A04D1C'

                                    }}/>
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
            <Tab.Screen name='HomeTab' component={HomeStackNavigator} />
            <Tab.Screen name='ServicesStack' component={ServicesStackNavigator} />
            <Tab.Screen name='CalendarTab' component={WIPScreen} />
        </Tab.Navigator>
    );
}