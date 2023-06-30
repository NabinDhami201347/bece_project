import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { api } from "../../api";
import NoticeCard from "../../components/NoticeCard";

interface Notice {
  id: number;
  title: string;
  description: string;
  summary: string;
  createdAt: string;
  tag: string;
}

const NoticesScreen: React.FC = () => {
  const { data: notices, isLoading, isError, error } = useQuery<Notice[]>(["notices"], fetchNotices);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  async function fetchNotices() {
    try {
      const response = await api.get<Notice[]>("/notices");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {}, [notices, error]);

  if (isLoading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (isError) {
    return (
      <Text style={[styles.errorText, styles.container]}>
        Error occurred while fetching notices {error && (error as Error).message}
      </Text>
    );
  }

  const filteredNotices = selectedTag ? notices.filter((notice) => notice.tag === selectedTag) : notices;
  const uniqueTags = Array.from(new Set(notices.map((notice) => notice.tag)));

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagsContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => setSelectedTag("")}>
            <Text style={[styles.tagText, selectedTag === "All" && styles.selectedTagText]}>All</Text>
          </TouchableOpacity>

          {uniqueTags.map((tag) => (
            <TouchableOpacity key={tag} style={styles.tag} onPress={() => setSelectedTag(tag)}>
              <Text style={[styles.tagText, selectedTag === tag && styles.selectedTagText]}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <FlatList
        data={filteredNotices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ScrollView style={styles.noticeContainer}>
            <NoticeCard key={item.id} title={item.title} summary={item.summary} tag={item.tag} date={item.createdAt} />
          </ScrollView>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  loadingText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 100,
  },
  errorText: {
    color: "#fff",
    marginTop: 100,
  },
  tagsContainer: {
    marginVertical: 20,
    maxHeight: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  tag: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedTag: {
    fontWeight: "bold",
  },
  tagText: {
    color: "gray",
    fontSize: 14,
  },
  selectedTagText: {
    color: "white",
  },
  noticeContainer: {
    marginBottom: 10,
  },
});

export default NoticesScreen;
