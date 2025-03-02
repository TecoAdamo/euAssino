// InputField.tsx
import React from "react";
import { TextInput, StyleSheet } from "react-native";

type InputFieldProps = {
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
};

export function InputField({ value, onChange, placeholder }: InputFieldProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
  },
});
