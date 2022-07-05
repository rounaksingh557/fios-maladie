/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { onValue, ref } from "firebase/database";
import { BlurView } from "expo-blur";
import { database, authentication } from "../DataBase/FirebaseConfig";
import { RFValue } from "react-native-responsive-fontsize";

// Files Import
import ThemeSensitiveText from "../Components/ThemeSensitiveText";

/**
 * @param {*} navigation The access to change stack of screen.
 * @returns A React component displaying user info.
 */
export default function WelcomeScreen({ navigation }) {
  // States Declaration
  const [name, setName] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [email, setEmail] = useState(null);
  const [lightTheme, setLightTheme] = useState(null);
  const [wait, setWait] = useState("red");

  // UseEffect Declaration
  useEffect(() => {
    fetchUserInfo();
    setTimeout(() => {
      setWait("green");
    }, 3500);
  }, []);

  /**
   * @description Fetches the user info to display in the profile page.
   */
  const fetchUserInfo = () => {
    onValue(
      ref(database, "/users/" + authentication.currentUser.uid),
      (snapshot) => {
        setName(snapshot.val().name);
        setImageURL(snapshot.val().profile_picture);
        setEmail(snapshot.val().gmail);
        setLightTheme(snapshot.val().current_theme);
      }
    );
  };

  if (wait === "red") {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.mainBackGround}
          resizeMode={"cover"}
          source={require("../assets/Image/5-diseases-image.jpg")}
        >
          <BlurView style={styles.secondContainer} intensity={55} tint="dark">
            <Image source={{ uri: imageURL }} style={styles.profileImage} />
            <View style={styles.welcomeTextView}>
              <ThemeSensitiveText
                style={styles.welcomeText}
                PrimaryText={"Welcome 👋"}
              />
            </View>
            <View style={styles.mainName}>
              <ThemeSensitiveText
                style={styles.mainNameText}
                PrimaryText={name}
              />
            </View>
            <View style={styles.emailContainer}>
              <ThemeSensitiveText
                style={styles.emailText}
                adjustFont={true}
                PrimaryText={email}
              />
            </View>
            <ActivityIndicator
              color={"orange"}
              style={{ top: 50 }}
              size={100}
            />
          </BlurView>
        </ImageBackground>
      </View>
    );
  } else {
    return navigation.navigate("DashBoardScreen");
  }
}

// Styles Declaration
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainBackGround: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  secondContainer: {
    height: "90%",
    width: "95%",
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#FFFFE0",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    top: 50,
  },
  welcomeTextView: {
    top: 20,
  },
  welcomeText: {
    fontSize: RFValue(50),
  },
  mainName: {
    top: 5,
  },
  mainNameText: {
    fontSize: RFValue(35),
  },
  emailContainer: {
    top: 5,
  },
  emailText: {
    fontSize: RFValue(20),
  },
});
