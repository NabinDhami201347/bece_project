import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { imageuri } from "../../api";

const ProfileImage: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // @ts-ignore
    navigation.navigate("Profile");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: `${imageuri}7cba1ac653.jpg` }} style={styles.image} resizeMode="cover" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});

export default ProfileImage;
