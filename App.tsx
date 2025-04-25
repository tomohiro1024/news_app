import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ height: 90, width: 90, borderRadius: 10 }}
            source={{ uri: "https://picsum.photos/seed/picsum/300/300" }}
          />
        </View>
        <View style={styles.rightContainer}></View>
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
    backgroundColor: "orange",
    flexDirection: "row",
  },
  leftContainer: { height: 90, width: 90, backgroundColor: "green", margin: 5, borderRadius: 10 },
  rightContainer: { flex: 1, height: 100, width: "100%", backgroundColor: "blue" },
});
