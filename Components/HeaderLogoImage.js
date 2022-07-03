/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { Image } from "react-native";

/**
 * @description A logo to be used in the app.
 * @returns A react component having a logo.
 */

export default function HeaderLogoImage() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../assets/Image/logo.png")}
    />
  );
}
