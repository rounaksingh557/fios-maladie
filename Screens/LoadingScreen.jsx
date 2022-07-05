/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { useEffect } from "react";
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet,
  LogBox,
} from "react-native";
import { authentication } from "../DataBase/FirebaseConfig";
import { RFValue } from "react-native-responsive-fontsize";

// Helps to ignore some unnecessary logs.
LogBox.ignoreAllLogs();

/**
 * @returns The Loading Screen React component
 * @description This is a loading screen which has a activity indicator and a image.
 */
export default function LoadingScreen({ navigation }) {
  /**
   * @description A function to check if user is logged in using google credentials.
   */
  const checkIfLoggedIn = () => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("WelcomeScreen");
      } else {
        navigation.navigate("LoginScreen");
      }
    });
  };

  // Declaring UseEffect
  useEffect(() => {
    checkIfLoggedIn();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Image/logo.jpg")}
        style={styles.fiosImage}
      />
      <Text style={styles.mainTitle}>Fios Maladie</Text>
      <ActivityIndicator size={100} style={styles.activityBar} color={"gray"} />
    </View>
  );
}

// Styles Declaration
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  fiosImage: {
    top: 100,
    position: "absolute",
    height: "50%",
    width: "100%",
  },
  mainTitle: {
    fontSize: RFValue(40),
    top: 150,
    fontFamily: "TaiHeritageBold",
  },
  activityBar: {
    position: "absolute",
    bottom: 80,
  },
});
