/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { View, Text } from "react-native";

/**
 * @returns A React functional Component.
 * @description A Logout component which logs out the user.
 */
export default function LogoutScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Logout Screen</Text>
    </View>
  );
}
