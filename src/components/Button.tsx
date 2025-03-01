import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export type ButtonStyleProps = "PRIMARY" | "SECONDARY";

type PropsBtn = {
  type: ButtonStyleProps;
};

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonStyleProps;
};

export function Button({ type = "PRIMARY", title, ...rest }: Props) {
  const backgroundColor = type === "PRIMARY" ? "#12104F" : "#dc2626";
  return (
    <View style={styles.viewBtn}>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor }]}
        activeOpacity={0.6}
        {...rest}
      >
        <Text style={styles.textBtn}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBtn: {
    width: "60%",
  },
  btn: {
    height: 52,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  textBtn: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 14,
  },
});
