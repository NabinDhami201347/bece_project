import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../utils/date";

interface NoticeCardProps {
  title: string;
  description: string;
  tag: string;
  date: string;
  image?: ImageSourcePropType | string;
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
  description: {
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

const NoticeCard: React.FC<NoticeCardProps> = ({ title, description, tag, date, image }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    // @ts-ignore
    navigation.navigate("Notice", { title, description, tag, date, image });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.tag}>{tag}</Text>
          <Text style={styles.date}>{formatDate(date)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NoticeCard;
