import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text, ScrollView, SafeAreaView } from "react-native";
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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>{items}</ScrollView>
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
