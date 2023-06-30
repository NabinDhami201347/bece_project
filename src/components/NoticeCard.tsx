import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatDate } from "../utils/date";

interface NoticeCardProps {
  title: string;
  summary: string;
  tag: string;
  date: string;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#2C3333",
    borderRadius: 8,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  summary: {
    color: "white",
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tag: {
    color: "orange",
    fontSize: 14,
  },
  date: {
    color: "white",
    fontSize: 14,
  },
});

const NoticeCard: React.FC<NoticeCardProps> = ({ title, summary, tag, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.summary}>{summary}</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.tag}>{tag}</Text>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
    </View>
  );
};

export default NoticeCard;
