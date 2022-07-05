/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { ref, onValue } from "firebase/database";
import { database, authentication } from "../DataBase/FirebaseConfig";

/**
 * @param {*} PrimaryText The text to be displayed.
 * @param secondaryText The second text to be displayed (only if there is the need to two text to be passed).
 * @param adjustFont Takes a boolean value if true then adjust font size property of text will be true.
 * @param Bold Takes a boolean value if  it is true then fontFamily will be TaiHeritageBold else TaiHeritageRegular.
 * @param style The style of the text ( don't provide color to the style ).
 * @description Note, this function does not Inherit all the properties of class Text.
 * @returns A Text Component which is theme sensitive.
 */
export default function ThemeSensitiveText({
  PrimaryText,
  adjustFont,
  Bold,
  style,
}) {
  // States Declaration
  const [theme, setTheme] = useState(null);

  // UseEffect Declaration
  useEffect(() => {
    fetchUser();
  }, []);

  /**
   * @description fetches the current theme of the user.
   */
  const fetchUser = () => {
    onValue(
      ref(database, "/users/" + authentication.currentUser.uid),
      (snapshot) => {
        setTheme(snapshot.val().current_theme);
      }
    );
  };

  if (PrimaryText) {
    return (
      <Text
        style={[
          theme === "light"
            ? styles.Custom_Text_Light
            : styles.Custom_Text_Dark,
          { fontFamily: Bold ? "TaiHeritageBold" : "TaiHeritageRegular" },
          style,
        ]}
      >
        {PrimaryText}
      </Text>
    );
  } else if (PrimaryText || adjustFont) {
    return (
      <Text
        style={[
          theme === "light"
            ? styles.Custom_Text_Light
            : styles.Custom_Text_Dark,
          { fontFamily: Bold ? "TaiHeritageBold" : "TaiHeritageRegular" },
          style,
        ]}
        adjustsFontSizeToFit={true}
      >
        {PrimaryText}
      </Text>
    );
  } else {
    return null;
  }
}

// Styles Declaration
const styles = StyleSheet.create({
  Custom_Text_Light: {
    color: "#000000",
  },
  Custom_Text_Dark: {
    color: "#fff",
  },
});
