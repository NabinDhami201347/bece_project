import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const QuickLinks = ({ title }: { title: string }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default QuickLinks;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    alignSelf: "flex-end",
  },
  title: {
    color: "#4942E4",
    fontWeight: "bold",
    fontSize: 16,
  },
});
