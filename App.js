/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import firebase from "firebase";
import * as Font from "expo-font";

// Files Import
import LoginScreen from "./Screens/LoginScreen";
import DashBoardScreen from "./Screens/DashBoardScreen";
import LoadingScreen from "./Screens/LoadingScreen";
import { FirebaseConfig } from "./DataBase/FirebaseConfig";

// Initializing Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseConfig);
} else {
  firebase.app();
}

// Primary Navigation
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashBoardScreen: DashBoardScreen,
});

// Defining Navigation Container
const AppNavigator = createAppContainer(AppSwitchNavigator);

/**
 * @returns A react functional component.
 * @description This is the entry point of the app.
 */
export default function App() {
  // States Declaration
  const [loaded, setLoaded] = useState(false);
  const [loadLoading, setLoadLoading] = useState(null);

  /**
   *@description A function to load font and make it globally accessible
   * */
  async function LoadFonts() {
    await Font.loadAsync({
      TaiHeritageBold: require("./assets/Fonts/TaiHeritagePro-Bold.ttf"),
      TaiHeritageRegular: require("./assets/Fonts/TaiHeritagePro-Regular.ttf"),
    });
    if (Font.isLoaded("TaiHeritageBold")) {
      setLoaded(true);
      setLoadLoading(false);
    } else {
      setLoaded(false);
    }
    setTimeout(() => setLoadLoading(true), 3000);
  }

  // UseEffect Declaration
  useEffect(() => {
    LoadFonts();
  }, []);

  if (loaded === false) {
    return (
      <>
        <StatusBar style="auto" />
        <ActivityIndicator
          size={100}
          color={"gray"}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      </>
    );
  } else if (loadLoading === false) {
    return (
      <>
        <StatusBar style="auto" />
        <LoadingScreen />
      </>
    );
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <AppNavigator />
      </>
    );
  }
}
