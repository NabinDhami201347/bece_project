import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { View, Text } from "react-native";
import { api } from "../api";
import { useAuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { getToken } = useAuthContext();
  const { data: profile, isLoading, isError, error, refetch } = useQuery(["profile"], fetchProfile);

  useEffect(() => {
    refetch();
  }, []);

  async function fetchProfile() {
    try {
      const token = await getToken();

      const response = await api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  if (isLoading) return <Text style={{ color: "white" }}>Loading</Text>;
  // @ts-ignore
  if (isError) return <Text style={{ color: "white" }}>Error occurred: {error && error.message}</Text>;

  return (
    <View style={{ backgroundColor: "blue" }}>
      <Text style={{ color: "white" }}>Name: {profile?.name}</Text>
      <Text style={{ color: "white" }}>Email: {profile?.email}</Text>
    </View>
  );
};

export default Profile;
