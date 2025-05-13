import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text, ScrollView, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "./components/ListItem";
import sampleArticles from "./dummies/articles.json";
import { useState, useEffect } from "react";

export default function App() {
  const [articles, setArticles] = useState<
    { author: string; title: string; urlToImage: string; publishedAt: string }[]
  >([]);

  const fetchArticles = () => {
    setArticles(sampleArticles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

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
