/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { NavigationContainer } from "@react-navigation/native";

// Files Import
import DrawerRoute from "../Routes/DrawerRoute";

/**
 * @returns A React functional Component.
 * @description A DashBoardScreen component which links to the DrawerRouter.
 */
export default function DashBoardScreen() {
  return (
    <NavigationContainer>
      <DrawerRoute />
    </NavigationContainer>
  );
}
