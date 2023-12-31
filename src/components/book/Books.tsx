import React from "react";
import { FlatList } from "react-native";

import BookCard from "./BookCard";
import { useBookContext } from "../../contexts/BookContext";

const Books = () => {
  const { books } = useBookContext();

  const renderBookCard = ({ item }) => <BookCard book={item} />;

  return (
    <FlatList
      data={books}
      renderItem={renderBookCard}
      keyExtractor={(item) => item.title}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
    />
  );
};

export default Books;
