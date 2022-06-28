import React from "react";
import { ThemeProvider } from "styled-components";
import { CarDetails } from "./src/screens/CarDetails";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import theme from "./src/styles/theme";
import AppLoading from "expo-app-loading";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "expo-app-loading is deprecated in favor of expo-splash-screen",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <CarDetails />
      </ThemeProvider>
    );
  }
}
