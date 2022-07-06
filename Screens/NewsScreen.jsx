/**
 * @author Rounak Singh
 * @license MIT
 */

// Next Up: Share using react-native-view-shot and Preview Page.

// Modules Import
import { useRef } from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import ViewShot, { captureRef } from "react-native-view-shot";
import { shareAsync } from "expo-sharing";
import Ionicons from "react-native-vector-icons/Ionicons";

// Files Import
import ThemeSensitiveText from "../Components/ThemeSensitiveText";

/**
 * @returns A React functional Component.
 * @description A News component which display's news and facts.
 */
export default function NewsScreen({ navigation }) {
  // UseRef Declaration
  const SnapShot = useRef(null);

  // Fetching value from navigation
  const { routes } = navigation.getState();
  const output = routes.find((e) => e.name === "NewsScreen");
  const { params } = output;
  const { param } = params;
  const { news } = param;

  /**
   * @description Helps in taking the snapshot and sharing it.
   */
  const shareNews = async () => {
    const result = await captureRef(SnapShot, {
      result: "tmpfile",
      quality: 1,
      format: "jpg",
    });

    if (result != null) {
      shareAsync(result);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ViewShot style={{ flex: 1 }} ref={SnapShot}>
        <ScrollView style={styles.newsCard}>
          <Image
            source={{
              uri: news.image_url,
            }}
            style={styles.mainImage}
            resizeMode="contain"
          />
          <View style={styles.dataContainer}>
            <View style={styles.titleTextContainer}>
              <ThemeSensitiveText
                style={styles.titleText}
                PrimaryText={news.title}
                adjustFont={true}
                Bold={true}
              />
              <ThemeSensitiveText
                style={styles.newsAuthorText}
                PrimaryText={news.author}
                Bold={true}
              />
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => shareNews()}>
                <Ionicons
                  name="share"
                  size={30}
                  color="#3c3c3c"
                  style={{ margin: 15 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainNews}>
            <ThemeSensitiveText
              style={styles.newsText}
              PrimaryText={news.news}
              Bold={true}
            />
          </View>
        </ScrollView>
      </ViewShot>
    </View>
  );
}

// Styles Declaration
const styles = StyleSheet.create({
  newsCard: {
    backgroundColor: "#FFFFE0",
    margin: 20,
    borderRadius: 20,
  },
  mainImage: {
    top: 10,
    width: "100%",
    alignSelf: "center",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dataContainer: {
    flexDirection: "row",
    padding: 20,
  },
  titleTextContainer: {
    flex: 0.8,
  },
  titleText: {
    fontSize: RFValue(15),
  },
  newsAuthorText: {
    fontSize: RFValue(18),
  },
  mainNews: {
    padding: 20,
    top: -30,
  },
  newsText: {
    fontSize: RFValue(15),
  },
  iconContainer: {
    flex: 0.2,
  },
});
