import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  wiseTitle: string;
  wiseValue: string;
  subscriptionDate: string;
};

export default function Wises({
  wiseTitle,
  wiseValue,
  subscriptionDate,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.wise}>📌 {wiseTitle}</Text> {/* Nome da assinatura */}
      <Text style={styles.details}>💰 Valor Mensal: R$ {wiseValue}</Text>{" "}
      {/* Valor da assinatura */}
      <Text style={styles.details}>📅 Assinatura: {subscriptionDate}</Text>{" "}
      {/* Data da assinatura */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    borderRadius: 12,
    height: 120,
    marginVertical: 8,
    alignSelf: "stretch",
    backgroundColor: "#fff",

    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 8,
  },
  wise: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  details: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
});
