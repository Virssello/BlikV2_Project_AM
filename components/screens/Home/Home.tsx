import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Center, VStack, Heading, HStack, Code, Link, Text, Switch, useColorMode, Button, View } from "native-base";
import React from "react";
// import NativeBaseIcon from "../../NativeBaseIcon";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";


export const Home = () => {
  const navigation = useNavigation<StackNavigationProp<{
    Home: undefined,
    Login: undefined,
    TabMenu: undefined,
    // Register: undefined
  }>>()
  return (
    <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
          >
            <VStack space={5} alignItems="center">
              <Heading size="lg">Welcome to BlikV2</Heading>
              <ToggleDarkMode />
              <Button mt="2" colorScheme="gray"
               onPress={() => {
                navigation.push('Login')
              }}>Zaloguj</Button>
              {/* <Button mt="3" colorScheme="gray"
              onPress={() => {
                navigation.push('Register')
              }}>Zarejestruj</Button> */}
            </VStack>
          </Center>

)}



function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <HStack space={2} alignItems="center">
        <Text>Dark</Text>
        <Switch
          isChecked={colorMode === "light" ? true : false}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light" ? "switch to dark mode" : "switch to light mode"
          }
        />
        <Text>Light</Text>
      </HStack>
    );
  }