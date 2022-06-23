/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { View, Text } from "react-native";

/**
 * @returns A React functional Component.
 * @description A Feed component which is the screen for news and facts.
 */
export default function FeedScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Feed Screen</Text>
    </View>
  );
}
