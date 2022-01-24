import * as React from "react";

import { Button, Image, View } from "react-native";
import { Input, NumberInput } from "native-base";

import { StackNavigationProp } from "@react-navigation/stack";
import SvgQRCode from "react-native-qrcode-svg";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const QRGenerator = () => {
    const [amount, setAmount] = useState<string>("");
    const [name, setName] = useState<string>("");

  const navigation = useNavigation<
    StackNavigationProp<{
      Main: undefined;
      Wallet: undefined;
    }>
  >();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Input
      value={amount}
      onChangeText={setAmount}
      placeholder='0'
      ></Input>

    <Input value = {name}
    onChangeText={setName}
    placeholder="Write name of the product">
    </Input>
      <SvgQRCode
        size={300}
        value={JSON.stringify({ amount ,  name})}
      />
    </View>
  );
};
