import * as React from "react";

import {
  Button,
  Center,
  Code,
  HStack,
  Heading,
  Link,
  Switch,
  Text,
  VStack,
  View,
  useColorMode,
} from "native-base";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

export const Main = () => {
  const navigation = useNavigation<StackNavigationProp<{
    Home: undefined,
    Login: undefined,
    Approved: undefined,
    TabMenu: undefined,
    Declined: undefined,
    Payment: undefined,
    // Register: undefined
  }>>()
  return (
    <>
      <Center
        _dark={{ bg: "gray.900" }}
        _light={{ bg: "gray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Heading size="lg">Welcome to Main Screen </Heading>
              <Button mt="4" colorScheme="gray"
               onPress={() => {
                navigation.push('Approved')
              }}>Approved</Button>
              <Button mt="5" colorScheme="gray"
               onPress={() => {
                navigation.push('Declined')
              }}>Declined</Button>
              <Button mt="6" colorScheme="gray"
               onPress={() => {
                navigation.push('Payment')
              }}>Payment</Button>
        </VStack>
      </Center>
    </>
  );
};

