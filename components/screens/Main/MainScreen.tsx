import * as React from "react";

import { Button, Center, Heading, VStack } from "native-base";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";
import { auth } from "../../config/Firebase/firebase";

export const Main = () => {
  const user = auth.currentUser;

  const navigation = useNavigation<
    StackNavigationProp<{
      Home: undefined;
      Login: undefined;
      Approved: undefined;
      TabMenu: undefined;
      Declined: undefined;
      Payment: { data: String };
      QRGenerator: undefined;
      Wallet: undefined;
      // Register: undefined
    }>
  >();
  return (
    <>
      <Center
        _dark={{ bg: "gray.900" }}
        _light={{ bg: "gray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Heading size="lg">Welcome {user.email}</Heading>
          <Button
            mt="4"
            colorScheme="gray"
            onPress={() => {
              navigation.push("Approved");
            }}
          >
            Approved
          </Button>
          <Button
            mt="5"
            colorScheme="gray"
            onPress={() => {
              navigation.push("Declined");
            }}
          >
            Declined
          </Button>
          <Button
            mt="6"
            colorScheme="gray"
            onPress={() => {
              navigation.push("Payment");
            }}
          >
            Payment
          </Button>
          <Button
            mt="6"
            colorScheme="gray"
            onPress={() => {
              navigation.push("QRGenerator");
            }}
          >
            QR Generator
          </Button>
          <Button
            mt="6"
            colorScheme="gray"
            onPress={() => {
              navigation.push("Wallet");
            }}
          >
            Wallet
          </Button>
        </VStack>
      </Center>
    </>
  );
};
