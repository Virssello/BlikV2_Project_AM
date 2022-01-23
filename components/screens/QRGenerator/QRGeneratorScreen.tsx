import * as  React from 'react';

import { Button, Image, View } from 'react-native'

import RNQRGenerator from 'rn-qr-generator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export const QRGenerator = (props) => {
    const navigation = useNavigation<
    StackNavigationProp<{
      Main: undefined,
      Wallet: undefined
    }>
  >();

    const [imageUri, setImageUri] = useState('')


    function QRGenerator() {
        let data = {
            id: "lksadnfanfj@#$adfqwe34af",
            name: 'Mobile',
            price: 25000,
        }
        RNQRGenerator.generate({
    value: JSON.stringify(data),
    height: 160,
    width: 160,
    base64: false,
    backgroundColor: 'black',
    color: 'white',
    correctionLevel: 'L'
})
            .then(response => {
                const { uri, width, height, base64 } = response;
                setImageUri(uri)
            })
            .catch(error => console.log('Cannot create QR code', error));
    }
    return (
        <View style={{ flex: 1 }}>
            <Button title="Generate" onPress={QRGenerator} />
            <Image style={{ height: 250, width: 250 }} source={{ uri: imageUri }} />
        </View>
    );
}

