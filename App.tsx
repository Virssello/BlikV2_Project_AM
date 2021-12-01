import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "./components/screens/Home/Home";
import { Login } from "./components/screens/Login/Login";
import { Register } from "./components/screens/Register/Register";
import  TabMenu  from "./components/TabMenu/TabMenu"
import { Main } from "./components/screens/Main/Main";
import "react-native-gesture-handler";



// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TabMenu" component={TabMenu} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  ); 
}