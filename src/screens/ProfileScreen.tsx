import React from "react";
import { View, StyleSheet } from "react-native";

import ProfileCard from "../components/profile/ProfileCard";
import BasicInformation from "../components/profile/BasicInformation";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <BasicInformation />

      <ProfileCard title="Department" icon="home" content="Computer Engineering" />
      <ProfileCard title="Semester" icon="calendar" content="6" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});

export default ProfileScreen;
