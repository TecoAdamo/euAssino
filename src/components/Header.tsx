import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <Ionicons name="arrow-back" size={32} color="white" />
      </TouchableOpacity>
      <Image source={require("../assets/euAssino.png")} style={styles.logo} />
      <View style={styles.viewInvisivble} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 32,
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  viewInvisivble: {
    height: 24,
    width: 24,
  },
});
