/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { View } from "react-native";
import { MaterialIcons } from "react-native-vector-icons"; // @expo/vector-icons is better alternative for expo managed app.

// Files Import
import ThemeSensitiveText from "./ThemeSensitiveText";

/**
 * @param {*} item The item to search for.
 * @description Stores and display the information of the location searched for.
 * @returns A React Component to be displayed on flat list.
 */
export default function ItemDisplayer(item) {
  let Address = item.display_name;
  if (item) {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 15,
        }}
      >
        <MaterialIcons
          name={item.type === "hospital" ? "local-hospital" : "add-location"}
          color="#3e3e3e"
          size={30}
        />
        <View
          style={{
            marginLeft: 10,
            flexShrink: 1,
          }}
        >
          <ThemeSensitiveText
            PrimaryText={Address}
            style={{ fontWeight: "700" }}
          />
        </View>
      </View>
    );
  } else {
    return null;
  }
}
