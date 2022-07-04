/**
 * @author Rounak Singh
 * @license MIT
 */

// Go's to: Profile, Logout, Medicines History

// Modules Import
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// Files Import
import StackRoute from "./StackRoute";
import ProfileScreen from "../Screens/ProfileScreen";
import MedicinesHistoryScreen from "../Screens/MedicinesHistoryScreen";
import CustomSideBarMenu from "../Components/CustomSideBarMenu";

/**
 * @returns The Drawer Navigator.
 */
export default function DrawerRoute() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Fios Maladie"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFE0",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "TaiHeritageBold",
        },
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: "TaiHeritageBold",
          fontSize: 15,
        },
        drawerActiveTintColor: "#FFD84D",
      }}
      drawerContent={(props) => <CustomSideBarMenu {...props} />}
    >
      <Drawer.Screen
        name="Fios Maladie"
        component={StackRoute}
        options={{
          drawerIcon: ({ color }) => {
            return <Ionicons name="home" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="My Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => {
            return <Ionicons name="person" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Your Medicines History"
        component={MedicinesHistoryScreen}
        options={{
          drawerIcon: ({ color }) => {
            return (
              <FontAwesome5 name="clinic-medical" size={22} color={color} />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}
