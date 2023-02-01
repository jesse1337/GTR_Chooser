import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./screens/Welcome";
import PictureScreen from "./screens/PictureScreen";
import CarBlack from "./screens/CarBlack";
import CarWhite from "./screens/CarWhite";
import CarSilver from "./screens/CarSilver";
import CarChrome from "./screens/CarChrome";
import Yumi from "./screens/Yumi";
import CarBlackDesc from "./screens/CarBlackDesc";
import CarChromeDesc from "./screens/CarChromeDesc";
import CarWhiteDesc from "./screens/CarWhiteDesc";
import CarSilverDesc from "./screens/CarSilverDesc";

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
      <Stack.Group>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="PictureScreen" component={PictureScreen} />
        <Stack.Screen name="CarBlack" component={CarBlack} />
        <Stack.Screen name="CarWhite" component={CarWhite} />
        <Stack.Screen name="CarSilver" component={CarSilver} />
        <Stack.Screen name="CarChrome" component={CarChrome} />
        <Stack.Screen name="Yumi" component={Yumi} />
        <Stack.Screen name="CarBlackDesc" component={CarBlackDesc} />
        <Stack.Screen name="CarChromeDesc" component={CarChromeDesc} />
        <Stack.Screen name="CarWhiteDesc" component={CarWhiteDesc} />
        <Stack.Screen name="CarSilverDesc" component={CarSilverDesc} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackScreen;
