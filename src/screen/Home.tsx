import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../components/Header";
import { BottomSheetCard } from "../components/BottomSheetCard";
import { Button } from "../components/Button";
import { ModalComp } from "../components/Modal";
import { useState } from "react";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleModal() {
    setModalVisible(true);
    console.log("aaaa");
  }
  function handleClosedModal() {
    setModalVisible(false);
  }
  function handleOkModal() {
    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerTitles}>
        <Text style={styles.title}>Eu Assino</Text>
        <Text style={styles.suTitle}>
          A Eu Assino te ajuda a gerenciar suas assinaturas !
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
    marginBottom: 20,
  },
});
