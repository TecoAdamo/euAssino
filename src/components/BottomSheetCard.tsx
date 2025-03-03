import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Button } from "./Button";
import { ModalComp } from "./Modal";
import Wises from "../components/wises";
import { getAssinaturas, addAssinatura } from "../api/api"; // Importando as funções

type BottomSheetCardProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function BottomSheetCard({ children, footer }: BottomSheetCardProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [wises, setWises] = useState<
    { name: string; value: string; subscriptionDate: string }[]
  >([]);

  const [isLoading, setIsLoading] = useState(false); // Carregar enquanto busca os dados

  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [subscriptionDate, setSubscriptionDate] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  // Função para abrir o modal
  function handleModal() {
    setModalVisible(true);
  }

  // Função para fechar o modal
  function handleClosedModal() {
    setModalVisible(false);
    setErrorMessage("");
  }

  // Função para quando o modal for confirmado
  async function handleOkModal() {
    if (!name || !value || !subscriptionDate) {
      return setErrorMessage("Preencha todos os campos para cadastrar");
    }

    try {
      // Adicionar a nova assinatura
      await addAssinatura(name, value, subscriptionDate);

      // Atualiza a lista de assinaturas após adicionar a nova
      const assinaturas = await getAssinaturas();
      setWises(assinaturas); // Atualiza o estado com as assinaturas

      // Limpar campos e fechar o modal
      setName("");
      setValue("");
      setSubscriptionDate("");
      setErrorMessage("");
      setModalVisible(false);
    } catch (error) {
      setErrorMessage("Erro ao adicionar a assinatura");
    }
  }

  // Função para carregar as assinaturas
  const fetchAssinaturas = async () => {
    setIsLoading(true);
    try {
      const assinaturas = await getAssinaturas();
      setWises(assinaturas); // Atualiza o estado com as assinaturas
    } catch (error) {
      console.error("Erro ao carregar as assinaturas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar assinaturas ao montar o componente
  useEffect(() => {
    fetchAssinaturas(); // Chama a função para carregar as assinaturas
  }, []); // O array vazio faz com que o efeito seja executado apenas uma vez

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
        onNameChange={setName}
        onValueChange={setValue}
        onDateChange={setSubscriptionDate}
        errorMessage={errorMessage}
      />

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatContainer}
          data={wises}
          keyExtractor={(item, index) => `${item.name}-${index}`} // A chave precisa ser única, use um ID se possível
          renderItem={({ item }) => (
            <Wises
              wiseTitle={item.name}
              wiseValue={item.value}
              subscriptionDate={item.subscriptionDate} // Dados passados para o componente
            />
          )}
        />
      )}

      <Button title="Cadastrar assinatura" onPress={handleModal} />
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
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    width: "100%",
    marginBottom: 8,
  },
  flatContainer: {
    width: "100%",
    height: "100%",
    marginBottom: 10,
  },
});
