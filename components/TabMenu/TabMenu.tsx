import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Home } from '../screens/Home/Home';
import { Login } from '../screens/Login/Login';
import { Center } from 'native-base';


const Tab = createMaterialBottomTabNavigator();

const Tab1 = () => (<Center
  _dark={{ bg: "blueGray.900" }}
  _light={{ bg: "blueGray.50" }}
  px={4}
  flex={1}
><Text>123</Text></Center>)

const Tab2 = () => (<Center
  _dark={{ bg: "blueGray.900" }}
  _light={{ bg: "blueGray.50" }}
  px={4}
  flex={1}
><Text>123</Text></Center>)

export default function TabMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Tab1"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'grey' }}
    >
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarLabel: 'Kod QR',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: 'Karta',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}