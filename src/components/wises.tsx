import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  wiseTitle: string;
  wiseValue: string;
  subscriptionDate: string;
  paymentDate?: string;
};

export default function Wises({
  wiseTitle,
  wiseValue,
  subscriptionDate,
  paymentDate,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.wise}>📌 {wiseTitle}</Text>
      <Text style={styles.details}>💰 Valor Mensal: R$ {wiseValue}</Text>
      <Text style={styles.details}>📅 Assinatura: {subscriptionDate}</Text>
      {/* <Text style={styles.details}>⏳ Vencimento: {paymentDate}</Text> */}
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
