/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

// Files Import
import ThemeSensitiveText from "./ThemeSensitiveText";

/**
 * @param navigation The navigation system.
 * @pram News The news info.
 * @description A NewsCard component to display the card of news.
 * @returns A React functional Component.
 */
export default function NewsCardComponent({ navigation, News }) {
  // States Declaration
  const [data, setData] = useState(News.value);
  const [newsId, setNewsId] = useState(News.key);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("NewsScreen", {
          screen: "NewsScreen",
          param: {
            news: data,
            id: newsId,
          },
        })
      }
    >
      <View style={styles.cardContainer}>
        <View>
          <Image
            source={{
              uri: data.image_url,
            }}
            style={{
              width: Dimensions.get("window").width - 60,
              height: 250,
              borderRadius: 10,
              alignSelf: "center",
            }}
            resizeMode="contain"
          />
        </View>
        <View styles={styles.titleContainer}>
          <View style={styles.titleTextContainer}>
            <ThemeSensitiveText
              style={styles.newsTitleText}
              PrimaryText={data.title}
            />
            <ThemeSensitiveText
              style={styles.newsAuthorText}
              PrimaryText={data.author}
            />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <ThemeSensitiveText
            style={styles.descriptionText}
            PrimaryText={data.description}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: -17,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#FFFFE0",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    borderColor: "#FFD84D",
    borderWidth: 5,
  },
  titleContainer: {
    flexDirection: "row",
  },
  titleTextContainer: {
    flex: 1,
  },
  newsTitleText: {
    fontSize: RFValue(25),
  },
  newsAuthorText: {
    fontSize: RFValue(18),
  },
  descriptionContainer: {
    marginTop: 5,
  },
  descriptionText: {
    fontSize: RFValue(13),
  },
});
