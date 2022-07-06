/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

// Files Import
import ThemeSensitiveText from "../Components/ThemeSensitiveText";

/**
 * @returns A React functional Component.
 * @description A profile component which look's display's map.
 */
export default function MapScreen() {
  // States Declaration
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [granted, setGranted] = useState(null);
  const [error, setError] = useState(null);

  // useEffect Declaration
  useEffect(async () => {
    // Asking for permission to use gps.
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status != "granted") {
      setGranted("not granted");
      setError("Permission to access location was denied");
    } else {
      getLocation();
    }
  }, []);

  /**
   * @description Helps to get location of the user.
   */
  const getLocation = async () => {
    // Getting latitude and longitude
    let location = await Location.getCurrentPositionAsync({});

    // Settings States
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);

    if (latitude === null && longitude == null) {
      return null;
    } else {
      setGranted("granted");
    }
  };

  /**
   * @description  Dataset to be used bu mapView and marker.
   * */
  const mapRegion = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  if (granted === "not granted") {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemeSensitiveText PrimaryText={error} />
      </View>
    );
  } else if (latitude === null && longitude === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={"orange"} size={100} />
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <MapView
          provider={PROVIDER_GOOGLE}
          region={mapRegion}
          style={{ flex: 1, height: "100%", width: "100%" }}
        >
          <Marker coordinate={mapRegion} title="You are here" />
        </MapView>
      </View>
    );
  }
}
