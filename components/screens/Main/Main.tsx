import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Center,
  VStack,
  Heading,
  HStack,
  Code,
  Link,
  Text,
  Switch,
  useColorMode,
  Button,
  View,
} from "native-base";
import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";

export const Main = () => {
  return (
    <>
      <Center
        _dark={{ bg: "gray.900" }}
        _light={{ bg: "gray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Heading size="lg">Welcome to Main Screen</Heading>
        </VStack>
      </Center>
      <Tab.Navigator
        initialRouteName="Tab1"
        activeColor="lavender"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: "lightcoral " }}
      >
        <Tab.Screen
          name="Tab1"
          component={Tab1}
          options={{
            tabBarLabel: "Kod QR",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Tab2"
          component={Tab2}
          options={{
            tabBarLabel: "Karta",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="card" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const Tab = createMaterialBottomTabNavigator();

const Tab1 = () => (
  <Center _dark={{ bg: "gray.900" }} _light={{ bg: "gray.50" }} px={4} flex={1}>
    <Text>Kod QR</Text>
  </Center>
);

const Tab2 = () => (
  <Center _dark={{ bg: "gray.900" }} _light={{ bg: "gray.50" }} px={4} flex={1}>
    <Text>Karta</Text>
  </Center>
);
