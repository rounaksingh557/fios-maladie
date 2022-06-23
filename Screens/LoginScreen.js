/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { BlurView } from "expo-blur";

/**
 * @returns The Login Screen React component.
 * @description This is the LoginScreen of the app which will use google authentication.
 */
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Image/BGImage.jpg")}
        style={styles.mainImage}
      >
        <BlurView tint="light" intensity={90} style={styles.hostOfLogin}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../assets/Image/google_icon.png")}
              style={styles.googleIcon}
            ></Image>
            <Text style={styles.googleText}>Sign in with Google</Text>
          </TouchableOpacity>
        </BlurView>
      </ImageBackground>
    </View>
  );
}

// Styles Declaration
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  hostOfLogin: {
    top: 50,
    left: 10,
    height: "90%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  button: {
    width: 250,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white",
  },
  googleIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  googleText: {
    color: "black",
    fontSize: 20,
    fontFamily: "TaiHeritageRegular",
  },
});
