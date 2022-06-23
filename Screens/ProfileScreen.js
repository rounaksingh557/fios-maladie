/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { View, Text } from "react-native";

/**
 * @returns A React functional Component.
 * @description A profile component which look's for user profile.
 */
export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Profile Screen</Text>
    </View>
  );
}
