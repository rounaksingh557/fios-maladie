/**
 * @author Rounak Singh
 * @license MIT
 */

// Go's to - Home Page, Search Page, Map Page

// Modules Import
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Files Import
import Search from "../Screens/SearchScreen";
import MapScreen from "../Screens/MapScreen";
import FeedScreen from "../Screens/FeedScreen";
import MedicinesHistoryScreen from "../Screens/MedicinesHistoryScreen";

/**
 * @returns The Tab Navigator.
 */
export default function TabRoute() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#FFFFE0",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("../assets/Icons/newspaper.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#8B0000" : "#3e3e3e",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#8B0000" : "#3e3e3e",
                  }}
                >
                  FEED
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("../assets/Icons/search.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#8B0000" : "#3e3e3e",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#8B0000" : "#3e3e3e",
                  }}
                >
                  SEARCH
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("../assets/Icons/map.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#8B0000" : "#3e3e3e",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#8B0000" : "#3e3e3e",
                  }}
                >
                  MAP
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MedicineHistory"
        component={MedicinesHistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("../assets/Icons/medical.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#8B0000" : "#3e3e3e",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#8B0000" : "#3e3e3e",
                  }}
                >
                  Medicine
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

// styles Declaration
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
