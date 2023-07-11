import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

import Books from "../../components/book/Books";
import CustomButton from "../../components/CustomButton";
import { LargeHeading, Paragraph, SmallHeading } from "../../components/Heading";

const BookScreen = ({ route }) => {
  const { image, title, description, author, tags, available, totalBooks } = route.params;
  const availabilityText = `Available: ${available} / Total: ${totalBooks}`;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.textContainer}>
          <LargeHeading>{title}</LargeHeading>
          <Paragraph>{description}</Paragraph>
          <SmallHeading>{author}</SmallHeading>

          <CustomButton title="Take" backgroundColor="#1B9C85" onPress={() => {}} />
        </View>
      </View>
      <LargeHeading style={{ padding: 10 }}>Recommended Books</LargeHeading>
      <Books />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f2f2f2",
  },
  infoContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 20,
    gap: 10,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
  },
  availabilityContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  availabilityText: {
    fontSize: 12,
  },
});

export default BookScreen;
