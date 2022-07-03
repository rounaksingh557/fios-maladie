/**
 * @author Rounak Singh
 * @license MIT
 */

// Go's to: Card Components on Home Screen

// Modules Import
import { createStackNavigator } from "@react-navigation/stack";

// Files Import
import NewsScreen from "../Screens/NewsScreen";
import TabRoute from "./TabRoute";

/**
 * @returns The Stack Navigator.
 */
export default function StackRoute() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={TabRoute} />
      <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  );
}
