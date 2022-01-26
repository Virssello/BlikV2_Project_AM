import { Button, Center, CloseIcon, Code, HStack, Heading, Link, Switch, Text, VStack, View, useColorMode } from "native-base";

import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export const Declined = () => {
  const navigation = useNavigation<StackNavigationProp<{
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
              <CloseIcon size="10" mt="0.5" color="error.500" />
              <Heading size="lg" color="error.500">Payment was declined, please try again :C</Heading>
              <Button mt="2" colorScheme="gray"
               onPress={() => {
                navigation.navigate('Main')
              }}>Go to Main</Button>
            </VStack>
          </Center>

)};
