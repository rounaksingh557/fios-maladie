/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import { API_KEY } from "../API/LocationIQ";
import LocationIQ from "react-native-locationiq";
import * as Location from "expo-location";

// Files Import
import ThemeSensitiveText from "../Components/ThemeSensitiveText";
import ItemDisplayer from "../Components/ItemDisplayer";

/**
 * @returns A React functional Component.
 * @description A profile component which look's display's map.
 */
export default function MapScreen() {
  // States Declaration
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [laterLatitude, setLaterLatitude] = useState(null);
  const [laterLongitude, setLaterLongitude] = useState(null);
  const [input, setInput] = useState(null);
  const [data, setData] = useState(null);
  const [granted, setGranted] = useState(null);
  const [error, setError] = useState(null);

  // useEffect Declaration
  useEffect(async () => {
    // Asking for permission to use gps.
    let { status } = await Location.requestForegroundPermissionsAsync();

    // Location IQ Activation
    LocationIQ.init(API_KEY);

    if (status != "granted") {
      setGranted("not granted");
      setError(
        "Permission to access location was denied, go in setting to enable it."
      );
    } else {
      getLocation();
    }
  }, []);

  /**
   * @description Looks for hospital nearby.
   * @param {*} place The place user is looking for.
   */
  const findHospital = (place) => {
    LocationIQ.search(place)
      .then((result) => {
        let lat = result[0].lat;
        let lon = result[0].lon;
        let data = result;
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  /**
   * @description Call the function to look for the place user typed.
   * @param {*} text The location the user is searching for.
   */
  const onChangeText = (text) => {
    setInput(text);
    if (text.length > 2) {
      findHospital(text);
    }
  };

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
  const InitialMapRegion = {
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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <TextInput
              placeholder="Search for places"
              value={input}
              onChangeText={onChangeText}
              style={{
                height: 40,
                marginHorizontal: 12,
                borderWidth: 2.5,
                paddingHorizontal: 10,
                borderRadius: 5,
                borderColor: "#FFD84D",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            />
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return <Pressable>{ItemDisplayer(item)}</Pressable>;
              }}
              keyExtractor={(item) => item.osm_id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </TouchableWithoutFeedback>
        <MapView
          provider="google"
          initialRegion={InitialMapRegion}
          style={{
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            title="I'm here"
            pinColor={"#000000"}
          />
          <Circle
            center={{
              latitude: latitude,
              longitude: longitude,
            }}
            radius={1000}
          />
        </MapView>
      </View>
    );
  }
}
