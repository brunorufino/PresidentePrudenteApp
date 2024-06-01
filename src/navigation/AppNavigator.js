import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            display: 'flex',
          },
        }}
      >
        <Tab.Screen
          name="História"
          component={HistoryScreen}
          options={{
            tabBarLabel: 'História',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Pontos Turísticos"
          component={TouristSpotsScreen}
          options={{
            tabBarLabel: 'Pontos Turísticos',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="map" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Informações"
          component={GeneralInfoScreen}
          options={{
            tabBarLabel: 'Informações',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Telefones"
          component={UsefulContactsScreen}
          options={{
            tabBarLabel: 'Contatos Úteis',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="call" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
