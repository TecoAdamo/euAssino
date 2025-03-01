import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "./Button";
import { ModalComp } from "./Modal";

type BottomSheetCardProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function BottomSheetCard({ children, footer }: BottomSheetCardProps) {
  const [modalVisible, setModalVisible] = useState(true);

  function handleOpenModal() {
    setModalVisible(true); // Abre o modal
  }
  function handleClosedModal() {
    setModalVisible(false);
  }
  function handleOkModal() {
    setModalVisible(false);
  }
  return (
    <View style={styles.card}>
      <View style={styles.content}>{children}</View>
      <ModalComp
        open={modalVisible}
        onClose={handleClosedModal}
        onOk={handleOkModal}
        title="Adicionar Assinatura"
      />
      <Button title="cadastrar assinatura" onPress={handleOpenModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    height: "54%",
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Para Android
    alignItems: "center",
  },
  content: {
    flex: 1, // Faz o conteúdo expandir e empurrar o rodapé para baixo
  },
});
