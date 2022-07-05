/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
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
 * @returns A React functional Component.
 * @description A NewsCard component to display the card of news.
 */
export default function NewsCardComponent({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("NewsScreen")}>
      <View style={styles.cardContainer}>
        <View>
          <Image
            source={{
              uri: "https://media.self.com/photos/617811dba28304b5a601fc8c/4:3/w_2560%2Cc_limit/GettyImages-1265249194.jpg",
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
              PrimaryText={"Asthma Article - StatPearls"}
            />
            <ThemeSensitiveText
              style={styles.newsAuthorText}
              PrimaryText={"Rounak Singh"}
            />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <ThemeSensitiveText
            style={styles.descriptionText}
            PrimaryText={
              "Asthma is a chronic disease of the air passages characterized by inflammation and narrowing of the airways."
            }
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
