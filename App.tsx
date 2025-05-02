import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text } from "react-native";
import { ListItem } from "./components/ListItem";
import articles from "./dummies/articles.json";

export default function App() {
  const items = articles.map((article, index) => (
    <ListItem
      key={index.toString()}
      imageUrl={article.urlToImage}
      title={article.title}
      subTitle={article.author}
    />
  ));

  return (
    <View style={styles.container}>
      {items}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
  },
  leftContainer: { height: 90, width: 90, margin: 5, borderRadius: 10 },
  rightContainer: { flex: 1, marginTop: 5, justifyContent: "space-between" },
  text: {
    fontSize: 14,
  },
  subText: {
    fontSize: 12,
    color: "grey",
    marginBottom: 5,
  },
});
