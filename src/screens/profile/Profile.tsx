import React from "react";
import { View, StyleSheet } from "react-native";

import ProfileCard from "../../components/profile/ProfileCard";
import BasicInformation from "../../components/profile/BasicInformation";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <BasicInformation />

      <View style={{ flexDirection: "row" }}>
        <ProfileCard title="Department" icon="home" content="Computer Engineering" />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <ProfileCard title="Semester" icon="calendar" content="Eight" />
        <ProfileCard title="Library Books" icon="book" content="6" />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <ProfileCard title="Total Subjects" icon="calendar" content="24" />
        <ProfileCard title="Subject Passed" icon="book" content="24" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});

export default ProfileScreen;
