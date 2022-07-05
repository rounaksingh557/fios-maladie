/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { View, Text } from "react-native";

/**
 * @returns A React functional Component.
 * @description A NewsCard component to display the card of news.
 */
export default function NewsCardComponent() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>NewsCard Screen</Text>
    </View>
  );
}
