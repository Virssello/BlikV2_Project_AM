import * as React from "react";

import { Appbar, Button, TextInput } from "react-native-paper";
import { ScrollView, Text } from "react-native";
import { useEffect, useState } from "react";

import { FlatList } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { auth } from "../../config/Firebase/firebase";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export const Wallet = () => {
  const navigation = useNavigation<
    StackNavigationProp<{
      Main: undefined,
      Wallet: undefined
    }>
  >();

  const user = auth.currentUser;
  const userBalance = firestore().collection("Wallet").doc("currentUser.uid");
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState([]);
  const [balances, setBalances] = useState([]);
  async function setBalanceValue() {
    await userBalance.set({
      balance: 0,
      type: "cash",
    });
    setBalance([]);
  }

  useEffect(() => {
    return userBalance.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const { balance, type } = doc.data();
        list.push({
          id: doc.id,
          balance,
          type,
        });
      });

      setBalance(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      <Appbar>
        <Appbar.Content title={"TODOs List"} />
      </Appbar>
      <FlatList
        style={{ flex: 1 }}
        data={balances}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Wallet {...item} />}
      />
      <ScrollView style={{ flex: 1 }}>
        <Text>Balans konta</Text>
      </ScrollView>
      <TextInput label={"Nowy balans portfela"} onChangeText={() => {}} />
      <Button onPress={() => {}}>Zaktualizuj balans konta</Button>
    </>
  );
};
