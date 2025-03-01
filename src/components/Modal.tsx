import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

type PropsModal = {
  open?: boolean;
  onClose: () => void;
  onOk: () => void;
  titleModal?: string;
  title: string;
};

export function ModalComp({
  open,
  onClose,
  onOk,
  titleModal,
  title,
  ...rest
}: PropsModal) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={open}
          {...rest}
        >
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{title}</Text>
                <View style={styles.modalViewButtons}>
                  <TouchableOpacity style={styles.btn} onPress={onOk}>
                    <Text style={styles.textBtn}>Cadastrar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={onClose}>
                    <Text style={styles.textBtn}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    width: "90%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalViewButtons: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#2196F3",
    width: 90,
    padding: 8,
    borderRadius: 10,
  },
  textBtn: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
  },
});
