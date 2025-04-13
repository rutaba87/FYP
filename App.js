import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Navigation from "./src/naviagtion/Navigation";
import { createStyles } from "@mui/material";

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
export default App;
