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
export default function NewsScreen() {
  // UseRef Declaration
  const SnapShot = useRef(null);

  // Temp Date
  let date = new Date().toLocaleDateString().toString();

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
              uri: "https://media.self.com/photos/617811dba28304b5a601fc8c/4:3/w_2560%2Cc_limit/GettyImages-1265249194.jpg",
            }}
            style={styles.mainImage}
            resizeMode="contain"
          />
          <View style={styles.dataContainer}>
            <View style={styles.titleTextContainer}>
              <ThemeSensitiveText
                style={styles.titleText}
                PrimaryText={"Asthma Article - StatPearls"}
                adjustFont={true}
                Bold={true}
              />
              <ThemeSensitiveText
                style={styles.newsAuthorText}
                PrimaryText={"Rounak Singh"}
                Bold={true}
              />
              <ThemeSensitiveText
                style={styles.newsAuthorText}
                PrimaryText={date}
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
              PrimaryText={
                "The overall etiology is complex and still not fully understood, especially when it comes to being able to say which children with pediatric asthma will carry on to have asthma as adults (up to 40% of children have a wheeze, only 1% of adults have asthma), but it is agreed that it is a multifactorial pathology, influenced by both genetics and environmental exposure."
              }
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
