import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text } from "react-native";

export default function App() {
  const testText =
    "カメラレンズを購入したはずが。被害額は2万円超えです。どういった経緯で詐欺に遭ったのか、どのような対応をしたかとともに、フリマアプリで同様の被害に合わない方法をお伝えします。";
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ height: 90, width: 90, borderRadius: 10 }}
            source={{ uri: "https://picsum.photos/seed/picsum/300/300" }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text} numberOfLines={4}>
            {testText}
          </Text>
          <Text style={styles.subText}>集英社</Text>
        </View>
      </View>
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
