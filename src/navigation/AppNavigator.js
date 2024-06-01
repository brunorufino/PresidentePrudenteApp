import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // use expo icons for tab icons

import HistoryScreen from '../screens/HistoryScreen';
import TouristSpotsScreen from '../screens/TouristSpotsScreen';
import GeneralInfoScreen from '../screens/GeneralInfoScreen';
import UsefulContactsScreen from '../screens/UsefulContactsScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="History"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'History') {
              iconName = 'book';
            } else if (route.name === 'TouristSpots') {
              iconName = 'map';
            } else if (route.name === 'GeneralInfo') {
              iconName = 'information-circle';
            } else if (route.name === 'UsefulContacts') {
              iconName = 'call';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="History" component={HistoryScreen} options={{ title: 'História' }} />
        <Tab.Screen name="TouristSpots" component={TouristSpotsScreen} options={{ title: 'Pontos Turísticos' }} />
        <Tab.Screen name="GeneralInfo" component={GeneralInfoScreen} options={{ title: 'Informações' }} />
        <Tab.Screen name="UsefulContacts" component={UsefulContactsScreen} options={{ title: 'Contatos Úteis' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;