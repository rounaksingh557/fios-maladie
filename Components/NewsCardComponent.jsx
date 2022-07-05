/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { View, Text } from "react-native";

// https://www.youtube.com/watch?v=wc4jFStaR2c

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
