import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text } from "react-native";

type Props = {
  imageUrl?: string;
  title?: string;
  subTitle?: string;
};

export const ListItem = ({ imageUrl, title, subTitle }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image style={{ height: 90, width: 90, borderRadius: 10 }} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines={4}>
          {title}
        </Text>
        <Text style={styles.subText}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    minHeight: 100,
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
