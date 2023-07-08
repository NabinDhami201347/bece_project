import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { LargeHeading } from "../../components/Heading";
import Categories from "../../components/book/Categories";
import Books from "../../components/book/Books";
import BookInformation from "../../components/book/BookInformation";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <LargeHeading>{title}</LargeHeading>
        <TouchableOpacity onPress={() => {}}>
          <LargeHeading style={styles.seeAllText}>See All</LargeHeading>
        </TouchableOpacity>
      </View>
      {children}
    </>
  );
};

const Library = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <BookInformation />
        <Categories />
      </View>

      <View style={styles.contentContainer}>
        <Section title="Most Popular">
          <Books />
        </Section>

        <Section title="Most Recent">
          <Books />
        </Section>

        <Section title="Recent Upload">
          <Books />
        </Section>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 5,
  },
  sectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  seeAllText: {
    color: "#22A699",
    fontSize: 16,
  },
});

export default Library;
