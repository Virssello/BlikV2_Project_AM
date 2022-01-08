import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Center, VStack, Heading, HStack, Code, Link, Text, Switch, useColorMode, Button, View } from "native-base";
import React from "react";



export const Approved = () => {
  const navigation = useNavigation<StackNavigationProp<{
    Approved: undefined,
    Main: undefined,
  }>>()
  return (
    <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
          >
            <VStack space={5} alignItems="center">
              <Heading size="lg">Payment was approved :)</Heading>
              <Button mt="2" colorScheme="gray"
               onPress={() => {
                navigation.push('Main')
              }}>Go to Main</Button>
            </VStack>
          </Center>

)}
