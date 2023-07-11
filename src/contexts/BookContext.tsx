import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { initialBooks } from "../constants";

export interface Book {
  title: string;
  description: string;
  author: string;
  image: string;
  tags: string[];
  available: number;
  totalBooks: number;
}

interface BookContextProps {
  books: Book[];
  tags: string[];
  selectedBook: Book | null;
  selectBook: (book: Book) => void;
  selectedTag: string;
  filterBooksByTag: (tag: string) => void;
}

const BookContext = createContext<BookContextProps | null>(null);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("");

  const selectBook = (book: Book) => {
    setSelectedBook(book);
  };

  const filterBooksByTag = (tag: string) => {
    setSelectedTag(tag);
    if (tag === "All Books") {
      setBooks(initialBooks);
    } else {
      const filteredBooks = initialBooks.filter((book) => book.tags.includes(tag));
      setBooks(filteredBooks);
    }
  };

  const tags: string[] = ["All Books"];
  initialBooks.forEach((book) => {
    book.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  useEffect(() => {
    const initialTag = tags[0]; // Assuming the first tag in the array is the initial tag
    setSelectedTag(initialTag);
    filterBooksByTag(initialTag);
  }, []);

  return (
    <BookContext.Provider value={{ books, selectBook, selectedBook, selectedTag, filterBooksByTag, tags }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = (): BookContextProps => useContext(BookContext);
