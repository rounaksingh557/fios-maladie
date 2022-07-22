/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { onValue, ref } from "firebase/database";
import { database, authentication } from "../DataBase/FirebaseConfig";

// Files Import
import NewsCardComponent from "../Components/NewsCardComponent";
import ThemeSensitiveText from "../Components/ThemeSensitiveText";

/**
 * @returns A React functional Component.
 * @description A Feed component which is the screen for news and facts.
 */
export default function FeedScreen({ navigation }) {
  // States Declaration
  const [lightTheme, setLightTheme] = useState(null);
  const [news, setNews] = useState([]);

  // useEffect Declaration
  useEffect(() => {
    fetchUserInfo();
    fetchNews();
  }, []);

  /**
   * @description The item to be rendered.
   */
  const renderItem = ({ item: News }) => (
    <NewsCardComponent navigation={navigation} News={News} />
  );

  /**
   * @description The number of time to be rendered
   */
  const keyExtractor = (item, index) => index.toString();

  /**
   * @description Helps in fetching the theme of the app.
   */
  const fetchUserInfo = () => {
    onValue(
      ref(database, "/users/" + authentication.currentUser.uid),
      (snapshot) => {
        setLightTheme(snapshot.val().current_theme);
      }
    );
  };

  /**
   * @description Helps in fetching the news
   */
  const fetchNews = () => {
    onValue(ref(database, "/posts/"), (snapshot) => {
      let news = [];
      if (snapshot.val()) {
        Object.keys(snapshot.val()).forEach((key) => {
          news.push({
            key: key,
            value: snapshot.val()[key],
          });
        });
        setNews(news);
      }
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      {!news[0] ? (
        <View
          style={{ flex: 0.93, justifyContent: "center", alignItems: "center" }}
        >
          <ThemeSensitiveText PrimaryText={"No News"} />
        </View>
      ) : (
        <View style={{ flex: 0.93, backgroundColor: "#FFFFE0", opacity: 0.8 }}>
          <FlatList
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={news}
          />
        </View>
      )}
    </View>
  );
}
