import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../CustomButton";
import { LargeHeading, Paragraph, SmallHeading } from "../Heading";
import { useBookContext } from "../../contexts/BookContext";

const BookInformation: React.FC = () => {
  const { selectedBook, selectBook } = useBookContext();

  if (!selectedBook) {
    return null;
  }

  const { image, title, description, author } = selectedBook;

  const handleClearSelection = () => {
    selectBook(null);
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <View style={styles.textContainer}>
        <LargeHeading>{title}</LargeHeading>
        <Paragraph>{description}</Paragraph>
        <SmallHeading>{author}</SmallHeading>

        <CustomButton title="Take" backgroundColor="#1B9C85" onPress={() => {}} />

        <TouchableOpacity style={styles.closeButton} onPress={handleClearSelection}>
          <Ionicons name="close" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 20,
    gap: 10,
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default BookInformation;
