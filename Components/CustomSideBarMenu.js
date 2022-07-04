/**
 * @author Rounak Singh
 * @license MIT
 */

// Icons: https://oblador.github.io/react-native-vector-icons/
// Help: https://www.youtube.com/watch?v=l8nY4Alk70Q

// Modules Import
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ref, onValue } from "firebase/database";
import { database, authentication } from "../DataBase/FirebaseConfig";
import { RFValue } from "react-native-responsive-fontsize";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// Files Import
import ThemeSensitiveText from "./ThemeSensitiveText";

/**
 * @description A side side bar menu which matches to the theme of the app.
 * @return A React component having a custom side bar menu.
 */
export default function CustomSideBarMenu(props) {
  // States Declaration
  const [name, setName] = useState(null);
  const [imageURl, setImageURL] = useState(null);
  const [email, setEmail] = useState(null);
  const [lightTheme, setLightTheme] = useState(null);

  // useEffect Declaration
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
      }
    );
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#FFD84D" }}
      >
        <ImageBackground
          source={require("../assets/Image/BgImageDR.jpg")}
          style={styles.ImgBack}
        >
          <Image source={{ uri: imageURl }} style={styles.profilePic} />
          <ThemeSensitiveText PrimaryText={name} style={styles.userName} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <ThemeSensitiveText
              PrimaryText={email}
              style={styles.userEmail}
              adjustFont={true}
            />
            <FontAwesome5
              name="mail-bulk"
              size={14}
              color="#000000"
              style={{ alignSelf: "center" }}
            />
          </View>
        </ImageBackground>
        <View style={styles.itemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            authentication.signOut();
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="logout" size={22} />
            <ThemeSensitiveText
              PrimaryText={"Logout"}
              Bold={true}
              style={styles.font}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ImgBack: {
    padding: 20,
  },
  profilePic: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: RFValue(20),
  },
  userEmail: {
    fontSize: RFValue(14),
    marginRight: 10,
  },
  itemList: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  footer: {
    padding: 20,
    borderTopWidth: 3,
    borderTopColor: "#ccc",
  },
  font: {
    fontSize: 15,
  },
});
