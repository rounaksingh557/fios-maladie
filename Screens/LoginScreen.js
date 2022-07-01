/**
 * @author Rounak Singh
 * @license MIT
 */

// Reference for login using google and firebase in expo: https://docs.expo.dev/guides/authentication/#google

// Modules Import
import { useEffect } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../DataBase/FirebaseConfig";
import { BlurView } from "expo-blur";
import * as WebBrowser from "expo-web-browser";
import * as ExpoGoogle from "expo-auth-session/providers/google";

// Invoking WebBrowser which awaits to completed auth session.
WebBrowser.maybeCompleteAuthSession();

/**
 * @returns The Login Screen React component.
 * @description This is the LoginScreen of the app which will use google authentication.
 */
export default function LoginScreen() {
  /**
   * @param Request: Helps to request server
   * @param Response: The returned value
   * @param promptAsync: Function which starts the login session.
   */
  const [request, response, promptAsync] = ExpoGoogle.useIdTokenAuthRequest({
    androidClientId:
      "406194647529-2vicfe83atq6afan2jmm6r7eucdepahl.apps.googleusercontent.com",
    iosClientId:
      "406194647529-27s30iinb3a86igrhr04mlmq1u2fhvrv.apps.googleusercontent.com",
    webClientId:
      "406194647529-ik2rvuecag2diqd4hlj76t075s3pgfkt.apps.googleusercontent.com",
    expoClientId:
      "406194647529-ik2rvuecag2diqd4hlj76t075s3pgfkt.apps.googleusercontent.com",
    clientId:
      "406194647529-ik2rvuecag2diqd4hlj76t075s3pgfkt.apps.googleusercontent.com",
  });

  // UseEffect Declaration
  useEffect(() => {
    if (response?.type === "success") {
      // Fetching idToken out of response
      const { id_token } = response.params;

      // calling setTimeout to recall and get values again
      setTimeout(() => {
        const { id_token } = response.params;
        registerOnFirebase(id_token);
      }, 3000);
    }
  }, [response]);

  /**
   * @description Helps to register the google user on firebase.s
   */
  const registerOnFirebase = (IdToken) => {
    const credential = GoogleAuthProvider.credential(IdToken);
    signInWithCredential(auth, credential);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Image/BGImage.jpg")}
        style={styles.mainImage}
      >
        <BlurView tint="light" intensity={90} style={styles.hostOfLogin}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => promptAsync({ showInRecents: true })}
          >
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
