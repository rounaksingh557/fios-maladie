/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, Image, Switch } from "react-native";
import { BlurView } from "expo-blur";
import { ref, update, onValue } from "firebase/database";
import { database, authentication } from "../DataBase/FirebaseConfig";
import { RFValue } from "react-native-responsive-fontsize";

// Files Import
import ThemeSensitiveText from "../Components/ThemeSensitiveText";

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
  const fetchUserInfo = () => {
    onValue(
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
        <BlurView style={styles.secondContainer} intensity={55} tint="dark">
          <Image source={{ uri: imageURL }} style={styles.profileImage} />
          <View style={styles.welcomeTextView}>
            <ThemeSensitiveText
              style={styles.welcomeText}
              PrimaryText={"Welcome 🙏"}
              Bold={true}
            />
          </View>
          <View style={styles.mainName}>
            <ThemeSensitiveText
              style={styles.mainNameText}
              PrimaryText={name}
              Bold={true}
            />
          </View>
          <View style={styles.emailContainer}>
            <ThemeSensitiveText
              style={styles.emailText}
              adjustFont={true}
              PrimaryText={email}
              Bold={true}
            />
          </View>
          <View style={styles.last_Login_Container}>
            <ThemeSensitiveText
              style={styles.lastLoginText}
              adjustFont={true}
              PrimaryText={`Last Login: ${lastLogin}`}
              Bold={true}
            />
          </View>
          <ThemeSensitiveText
            style={styles.mode}
            PrimaryText={lightTheme ? "Dark Mode Off" : "Dark Mode On"}
            Bold={true}
          />
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
    height: "95%",
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
    fontSize: RFValue(45),
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
    fontSize: RFValue(18),
  },
  last_Login_Container: {
    top: 4,
  },
  lastLoginText: {
    fontSize: RFValue(15),
  },
  mode: {
    top: 5,
    fontSize: RFValue(20),
  },
});
