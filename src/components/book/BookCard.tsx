import React, { useCallback } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { Paragraph, SmallHeading } from "../Heading";
import { Book, useBookContext } from "../../contexts/BookContext";

const BookCard: React.FC<Book> = ({ image, title, author, description, tags }) => {
  const { selectBook } = useBookContext();

  const handleBookSelection = useCallback(() => {
    const book = { image, title, author, description, tags };
    selectBook(book);
  }, [image, title, author, description, tags, selectBook]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleBookSelection}>
      <Image source={{ uri: image }} style={styles.image} />
      <SmallHeading>{title}</SmallHeading>
      <Paragraph>{author}</Paragraph>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  image: {
    width: 120,
    height: 150,
    marginBottom: 8,
    borderRadius: 6,
  },
});

export default BookCard;
