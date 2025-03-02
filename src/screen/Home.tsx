import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../components/Header";
import { BottomSheetCard } from "../components/BottomSheetCard";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerTitles}>
        <Text style={styles.title}>Assinei</Text>
        <Text style={styles.suTitle}>
          Nós da Assinei te ajudamos a gerenciar suas assinaturas!
        </Text>
      </View>

      <BottomSheetCard>
        <Text style={styles.titleBottomSheet}>Minhas Assinaturas</Text>
      </BottomSheetCard>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12104F",
  },
  containerTitles: {
    paddingHorizontal: 32,
  },
  title: {
    color: "white",
    fontSize: 22,
    marginBottom: 8,
  },
  suTitle: {
    color: "gray",
  },
  titleBottomSheet: {
    textAlign: "center",
    fontSize: 24,
  },
});
