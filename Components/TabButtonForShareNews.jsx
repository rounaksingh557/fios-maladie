/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { View, TouchableOpacity, StyleSheet } from "react-native";

/**
 * @param children The View to present. (Automatically received)
 * @param onPress The function to execute when clicked. (Automatically received)
 * @returns A React component which returns a custom icon to navigate to ShareNews Screen.
 */
export default function TabButtonForShareNews({ children, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#8B0000",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}

// Styles Declaration
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#FF8C00",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
