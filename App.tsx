import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./components/screens/Home/HomeScreen";
import  TabMenu  from "./components/menu/TabMenu/TabMenu"
import "react-native-gesture-handler";
import  TopMenu  from "./components/menu/TopMenu/TopMenu";
import { Approved } from "./components/screens/Approved/ApprovedScreen";
import { Payment } from "./components/screens/Payment/PaymentScreen";
import { Declined } from "./components/screens/Declined/DeclinedScreen"



// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={TopMenu} />
          <Stack.Screen name="Main" component={TabMenu} />
          <Stack.Screen name="Payment" component={Payment}/>
          <Stack.Screen name="Approved" component={Approved}/>
          <Stack.Screen name="Declined" component={Declined} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
