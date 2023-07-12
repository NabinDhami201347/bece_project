import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";

import NoticeCard from "../../components/NoticeCard";
import { useNoticeContext } from "../../contexts/NoticeContext";

const DepartmentScreen: React.FC = () => {
  const { notices } = useNoticeContext();

  // Filter notices with the "department" tag
  const departmentNotices = notices.filter((notice) => notice.tag === "DEPARTMENT");

  return (
    <View style={styles.container}>
      <FlatList
        data={departmentNotices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ScrollView style={styles.noticeContainer}>
            <NoticeCard
              key={item.id}
              title={item.title}
              description={item.description}
              tag={item.tag}
              date={item.createdAt}
              image={item.image}
            />
          </ScrollView>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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

export default DepartmentScreen;
