/**
 * @author Rounak Singh
 * @license MIT
 */

// Modules Import
import { View, FlatList } from "react-native";

// Files Import
import NewsCardComponent from "../Components/NewsCardComponent";

/**
 * @returns A React functional Component.
 * @description A Feed component which is the screen for news and facts.
 */
export default function FeedScreen({ navigation }) {
  /**
   * @description The item to be rendered.
   */
  const renderItem = () => <NewsCardComponent navigation={navigation} />;

  /**
   * @description The number of time to be rendered
   */
  const keyExtractor = (item, index) => index.toString();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff"
      }}
    >
      <View style={{ flex: 0.93 }}>
        <FlatList
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={"oo"}
        />
      </View>
    </View>
  );
}
