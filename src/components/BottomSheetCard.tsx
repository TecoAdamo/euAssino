import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Button } from "./Button";
import { ModalComp } from "./Modal";
import Wises from "./wises";

type BottomSheetCardProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function BottomSheetCard({ children, footer }: BottomSheetCardProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const [wises, setWises] = useState<
    {
      name: string;
      value: string;
      subscriptionDate: string;
    }[]
  >([]);

  const [wise, setWise] = useState("");
  const [wiseAdd, setWiseAdd] = useState<number>(0);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [subscriptionDate, setSubscriptionDate] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleModal() {
    setModalVisible(true);
  }
  function handleClosedModal() {
    setModalVisible(false);
    setErrorMessage("");
  }
  function handleOkModal() {
    if (!name || !value || !subscriptionDate) {
      return setErrorMessage("Preencha todos os campos para cadastrar");
    }

    setWises((prevState) => {
      if (
        prevState.some((wise) => wise.name.toLowerCase() === name.toLowerCase())
      ) {
        setErrorMessage("Essa assinatura já está cadastrada.");
        return prevState;
      }

      setErrorMessage("");
      setModalVisible(false);

      const newWise = { name, value, subscriptionDate };

      setName("");
      setValue("");
      setSubscriptionDate("");

      return [...prevState, newWise];
    });
  }

  return (
    <View style={styles.card}>
      <View style={styles.content}>{children}</View>
      <ModalComp
        open={modalVisible}
        onClose={handleClosedModal}
        onOk={handleOkModal}
        title="Adicionar Assinatura"
        name={name}
        value={value}
        subscriptionDate={subscriptionDate}
        paymentDate={paymentDate}
        onNameChange={setName}
        onValueChange={setValue}
        onDateChange={setSubscriptionDate}
        onPaymentDateChange={setPaymentDate}
        errorMessage={errorMessage}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatContainer}
        data={wises}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => (
          <Wises
            wiseTitle={item.name}
            wiseValue={item.value}
            subscriptionDate={item.subscriptionDate}
          />
        )}
      />

      <Button title="cadastrar assinatura" onPress={handleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#EEEEEE",
    height: "58%",
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: "flex-start", // Aumenta a flexibilidade do conteúdo
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Para Android
  },
  content: {
    width: "100%", // Evita que o conteúdo seja distorcido
    marginBottom: 8, // Ajuste para garantir algum espaço antes do FlatList
  },
  flatContainer: {
    width: "100%",
    height: "100%",

    marginBottom: 10,
  },
});
