/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { BlurView } from "expo-blur";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

// Invoking web browser
WebBrowser.maybeCompleteAuthSession();

/**
 * @returns The Login Screen React component.
 * @description This is the LoginScreen of the app which will use google authentication.
 */
export default function LoginScreen() {
  // States Declaration
  const [accessToken, setAccessToken] = useState(null);
  const [idToken, setIdToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  // Logs in the user
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "406194647529-2vicfe83atq6afan2jmm6r7eucdepahl.apps.googleusercontent.com",
    iosClientId:
      "406194647529-27s30iinb3a86igrhr04mlmq1u2fhvrv.apps.googleusercontent.com",
    expoClientId:
      "406194647529-ik2rvuecag2diqd4hlj76t075s3pgfkt.apps.googleusercontent.com",
  });

  // useEffect Declaration
  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      setIdToken(response.authentication.idToken);

      if (accessToken != null || idToken != null) {
        getUserData();
      }
    }
  }, [response]);

  /**
   * @description Fetches the user info.
   */
  const getUserData = async () => {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
    });
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
            onPress={
              accessToken
                ? getUserData
                : () => {
                    promptAsync({ showInRecents: true });
                  }
            }
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
