/**
 * @author Rounak Singh
 * @license MIT
 */

// Go's to: Profile, Logout, Medicines History

// Modules Import
import { createDrawerNavigator } from "@react-navigation/drawer";

// Files Import
import StackRoute from "./StackRoute";
import ProfileScreen from "../Screens/ProfileScreen";
import LogoutScreen from "../Screens/LogoutScreen";
import MedicinesHistoryScreen from "../Screens/MedicinesHistoryScreen";

/**
 * @returns The Drawer Navigator.
 */
export default function DrawerRoute() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackRoute} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen
        name="MedicinesHistory"
        component={MedicinesHistoryScreen}
      />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}
