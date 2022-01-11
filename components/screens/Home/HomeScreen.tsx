import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import { Login } from "../Login/LoginScreen";
import { Register } from "../Register/RegisterScreen";
import Container from "../../layout/Container";

export const Home = () => {
  const navigation = useNavigation<
    StackNavigationProp<{
      Login: undefined;
    }>
  >();
  return (
        <Center
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px={4}
          flex={1}
        >
          <VStack space={5} alignItems="center">
            <Heading size="lg">Welcome to BlikV2</Heading>
            <Button
              mt="2"
              colorScheme="gray"
              onPress={() => {
                navigation.push("Login");
              }}
            >
              Zaloguj
            </Button>
            {/* <Button mt="3" colorScheme="gray"
              onPress={() => {
                navigation.push('Register')
              }}>Zarejestruj</Button> */}
          </VStack>
        </Center>
  );
};
