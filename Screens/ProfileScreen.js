/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Switch,
} from "react-native";
import { BlurView } from "expo-blur";
import { ref, update, onValue } from "firebase/database";
import { database, authentication } from "../DataBase/FirebaseConfig";

/**
 * @returns A React functional Component.
 * @description A profile component which look's for user profile.
 */
export default function ProfileScreen() {
  // States Declaration
  const [name, setName] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [lastLogin, setLastLogin] = useState(null);
  const [email, setEmail] = useState(null);
  const [lightTheme, setLightTheme] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);

  // UseEffect Declaration
  useEffect(() => {
    fetchUserInfo();
  }, []);

  /**
   * @description Fetches the user info to display in the profile page.
   */
  const fetchUserInfo = async () => {
    await onValue(
      ref(database, "/users/" + authentication.currentUser.uid),
      (snapshot) => {
        setName(snapshot.val().name);
        setImageURL(snapshot.val().profile_picture);
        setEmail(snapshot.val().gmail);
        setLightTheme(snapshot.val().current_theme);
        setLastLogin(snapshot.val().last_login);
      }
    );
  };

  /**
   * @description Helps to change theme of the app oon switch toggle.
   */
  const afterToggleSwitch = () => {
    const previousState = isEnabled;
    const letTheme = previousState ? "light" : "dark";
    const updates = {};
    updates["/users/" + authentication.currentUser.uid + "/current_theme"] =
      letTheme;
    update(ref(database), updates);
    setIsEnabled(!previousState);
    setLightTheme(previousState);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.mainBackGround}
        resizeMode={"cover"}
        source={require("../assets/Image/5-diseases-image.jpg")}
      >
        <BlurView style={styles.secondContainer} intensity={65} tint="dark">
          <Image source={{ uri: imageURL }} style={styles.profileImage} />
          <View style={styles.welcomeTextView}>
            <Text style={styles.welcomeText}>Welcome 👋</Text>
          </View>
          <View style={styles.mainName}>
            <Text style={styles.mainNameText}>{name}</Text>
          </View>
          <View style={styles.emailContainer}>
            <Text style={styles.emailText} adjustsFontSizeToFit={true}>
              {email}
            </Text>
          </View>
          <View style={styles.last_Login_Container}>
            <Text style={styles.lastLoginText} adjustsFontSizeToFit={true}>
              Last Login: {lastLogin}
            </Text>
          </View>
          <Text style={styles.mode}>
            {lightTheme ? "Dark Mode Off" : "Dark Mode On"}
          </Text>
          <Switch
            style={{
              transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
            }}
            trackColor={{ false: "#767577", true: "#fff" }}
            ios_backgroundColor="#3e3e3e"
            thumbColor={isEnabled ? "#fc8403" : "#f4f3f4"}
            value={isEnabled}
            onValueChange={() => afterToggleSwitch()}
          />
        </BlurView>
      </ImageBackground>
    </View>
  );
}

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
    height: "95%",
    width: "95%",
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#fc8403",
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
    fontFamily: "TaiHeritageRegular",
    fontSize: 50,
    color: "#fff",
  },
  mainName: {
    top: 5,
  },
  mainNameText: {
    fontFamily: "TaiHeritageRegular",
    fontSize: 35,
    color: "#fff",
  },
  emailContainer: {
    top: 5,
  },
  emailText: {
    fontFamily: "TaiHeritageRegular",
    fontSize: 20,
    color: "#fff",
  },
  last_Login_Container: {
    top: 4,
  },
  lastLoginText: {
    fontFamily: "TaiHeritageRegular",
    fontSize: 18,
    color: "#fff",
  },
  mode: {
    top: 5,
    fontFamily: "TaiHeritageRegular",
    fontSize: 20,
    color: "#fff",
  },
});
