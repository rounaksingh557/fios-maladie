/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { View, Text } from "react-native";

/**
 * @returns A React functional Component.
 * @description A profile component which look's display's medicine list and notifies the user when they need to buy again.
 */
export default function MedicinesHistoryScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>MedicinesHistory Screen</Text>
    </View>
  );
}
