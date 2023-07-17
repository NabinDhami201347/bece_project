import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface ProfileCardProps {
  title: string;
  icon: any;
  content: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, icon, content }) => {
  return (
    <View style={styles.card}>
      <AntDesign name={icon} size={24} color="gray" />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{content}</Text>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    width: "100%",
    flex: 1,
  },
  cardContent: {
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardText: {
    fontSize: 16,
  },
});
