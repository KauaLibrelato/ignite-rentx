import React from "react";
import { ThemeProvider } from "styled-components";
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
import { Routes } from "./src/routes";
import { AppProvider } from "./src/hooks";

LogBox.ignoreLogs([
  "expo-app-loading is deprecated in favor of expo-splash-screen",
  "ViewPropTypes will be removed from React Native.",
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
        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>
    );
  }
}
