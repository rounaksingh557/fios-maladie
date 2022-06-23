/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { View, Image, Text, ActivityIndicator, StyleSheet } from "react-native";

/**
 * @returns The Loading Screen React component
 * @description This is a loading screen which has a activity indicator and a image.
 */
export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Image/logo.jpg")}
        style={styles.fiosImage}
      />
      <Text style={styles.mainTitle}>Fios Maladie</Text>
      <ActivityIndicator size={100} style={styles.activityBar} color={"gray"} />
    </View>
  );
}

// Styles Declaration
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  fiosImage: {
    top: 100,
    position: "absolute",
    height: "50%",
    width: "100%",
  },
  mainTitle: {
    fontSize: 40,
    top: 150,
    fontFamily: "TaiHeritageBold",
  },
  activityBar: {
    position: "absolute",
    bottom: 80,
  },
});
