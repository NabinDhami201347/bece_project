import React, { createContext, useEffect, useState, useContext, ReactNode } from "react";
import { Text, StyleSheet, ImageSourcePropType } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

interface Notice {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  tag: string;
  image?: ImageSourcePropType | string;
}

interface NoticeContextType {
  notices: Notice[];
}

const NoticeContext = createContext<NoticeContextType>({
  notices: [],
});

const NoticeProvider = ({ children }: { children: ReactNode }) => {
  const { data: fetchedNotices, isLoading, isError, error } = useQuery<Notice[]>(["notices"], fetchNotices);

  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    if (fetchedNotices) {
      setNotices(fetchedNotices);
    }
  }, [fetchNotices]);

  async function fetchNotices(): Promise<Notice[]> {
    try {
      const response = await api.get<Notice[]>("/notices");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  if (isLoading || fetchedNotices === undefined) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (isError) {
    return (
      <Text style={[styles.errorText, styles.container]}>
        Error occurred while fetching notices {error && (error as Error).message}
      </Text>
    );
  }

  return <NoticeContext.Provider value={{ notices }}>{children}</NoticeContext.Provider>;
};

const styles = StyleSheet.create({
  loadingText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 100,
  },
  errorText: {
    color: "#fff",
    marginTop: 100,
  },
  container: {
    flex: 1,
    padding: 10,
  },
});

const useNoticeContext = (): NoticeContextType => useContext(NoticeContext);
export { NoticeContext, NoticeProvider, useNoticeContext };
