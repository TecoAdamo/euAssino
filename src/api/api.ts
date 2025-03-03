import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.3.6:3000", // A URL da API
});

// Função para obter as assinaturas
export const getAssinaturas = async () => {
  try {
    const response = await api.get("/api/assinaturas"); // Endpoint para listar assinaturas
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar assinaturas", error);
    throw error;
  }
};

// Função para adicionar uma nova assinatura
export const addAssinatura = async (
  nome: string,
  valor: string,
  dataPagamento: string
) => {
  try {
    const response = await api.post("/api/cadastrarWise", {
      nome,
      valor,
      data_pagamento: dataPagamento,
    }); // Endpoint para cadastrar uma nova assinatura
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar assinatura", error);
    throw error;
  }
};
