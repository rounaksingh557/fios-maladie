/**
 * @author Rounak Singh
 * @license MIT
 */

// Go's to - Home Page, Search Page, Map Page

// Modules Import
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Files Import
import Search from "../Screens/SearchScreen";
import MapScreen from "../Screens/MapScreen";
import FeedScreen from "../Screens/FeedScreen";

/**
 * @returns The Tab Navigator.
 */
export default function TabRoute() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}
