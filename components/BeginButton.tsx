import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";

interface BeginButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

export const BeginButton: React.FC<BeginButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Begin</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 279,
    height: 48,
    backgroundColor: "#FFB703",
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Add some space above the button
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
