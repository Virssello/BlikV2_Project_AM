import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Home } from '../screens/Home/Home';
import { Login } from '../screens/Login/Login';
import { Center } from 'native-base';
import { Main } from '../screens/Main/Main';
import { Scan } from '../screens/Scan/Scan';


const Tab = createMaterialBottomTabNavigator();

export default function TabMenu() {
  return (
    <Tab.Navigator>
            <Tab.Screen name="Main" component={Main} options={{tabBarLabel: "Main",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )}}></Tab.Screen>
            <Tab.Screen name="Scan" component={Scan} options={{tabBarLabel: "Kod QR",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera" color={color} size={26} />
            )}}></Tab.Screen>
    </Tab.Navigator>
  );
}