import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text, ScrollView, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "./components/ListItem";
import articles from "./dummies/articles.json";

export default function App() {
  const items = articles.map((article, index) => (
    <ListItem
      imageUrl={article.urlToImage}
      title={article.title}
      subTitle={article.author}
      key={index.toString()}
    />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => {
          return <ListItem imageUrl={item.urlToImage} title={item.title} subTitle={item.author} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});
