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
  paymentDate: string;
  onNameChange: (name: string) => void;
  onValueChange: (value: string) => void;
  onDateChange: (date: string) => void;
  onPaymentDateChange: (date: string) => void;
};

export function ModalComp({
  open,
  onClose,
  onOk,
  titleModal,
  title,
  errorMessage,
  name,
  value,
  subscriptionDate,
  paymentDate,
  onNameChange,
  onValueChange,
  onDateChange,
  onPaymentDateChange,

  ...rest
}: PropsModal) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal animationType="fade" transparent={true} visible={open} {...rest}>
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{title}</Text>
                <InputField
                  value={name}
                  onChange={onNameChange}
                  placeholder="Informe o nome da assinatura:"
                />
                <InputField
                  value={value}
                  onChange={onValueChange}
                  placeholder="Informe o valor mensal:"
                />
                <InputField
                  value={subscriptionDate}
                  onChange={onDateChange}
                  placeholder="Informe a data da assinatura:"
                />

                {errorMessage ? (
                  <Text style={styles.errorText}>{errorMessage}</Text>
                ) : null}
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
