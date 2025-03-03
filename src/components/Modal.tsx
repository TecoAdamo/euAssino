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
  TextInput,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { InputField } from "./Input";
import { Button } from "./Button";

type PropsModal = {
  open?: boolean;

  onClose: () => void;
  onOk: () => void;
  titleModal?: string;
  title: string;
  errorMessage?: string;
  name: string;
  value: string;
  subscriptionDate: string;

  onNameChange: (name: string) => void;
  onValueChange: (value: string) => void;
  onDateChange: (date: string) => void;
};

export function ModalComp({
  open,
  onClose,
  onOk,
  title,
  errorMessage,
  name,
  value,
  subscriptionDate,

  onNameChange,
  onValueChange,
  onDateChange,
}: PropsModal) {
  return (
    <Modal animationType="fade" transparent={true} visible={open}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          <TextInput
            value={name}
            onChangeText={onNameChange}
            placeholder="Informe o nome da assinatura:"
          />
          <TextInput
            value={value}
            onChangeText={onValueChange}
            placeholder="Informe o valor mensal:"
          />
          <TextInput
            value={subscriptionDate}
            onChangeText={onDateChange}
            placeholder="Informe a data de pagamento assinatura:"
          />
          {errorMessage ? <Text>{errorMessage}</Text> : null}
          <Button title="Cadastrar" onPress={onOk} />
          <Button title="Cancelar" onPress={onClose} />
        </View>
      </View>
    </Modal>
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
  errorText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
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
    gap: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
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
