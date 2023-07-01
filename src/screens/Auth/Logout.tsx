import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { useAuthContext } from "../../contexts/AuthContext";

const LogoutButton = () => {
  const { handleLogout } = useAuthContext();

  return (
    <TouchableOpacity onPress={handleLogout}>
      <View style={{ marginRight: 15 }}>
        <MaterialIcons name="logout" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default LogoutButton;
