import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import CommentSection from "../../components/community/CommentSection";
import PostCard from "../../components/community/PostCard";

interface PostProps {
  route: {
    params: {
      title: string;
      description: string;
      author: string;
      date: string;
      image?: string;
    };
  };
}

const PostScreen: React.FC<PostProps> = ({ route }) => {
  const { title, description, author, date, image } = route.params;

  return (
    <ScrollView style={styles.container}>
      <PostCard title={title} description={description} date={date} author={author} image={image} />
      <CommentSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});

export default PostScreen;
