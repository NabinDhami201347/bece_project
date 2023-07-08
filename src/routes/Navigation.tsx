import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import NoticesScreen from "../screens/notice/NoticeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";
import LogoutButton from "../screens/Auth/Logout";
import { useAuthContext } from "../contexts/AuthContext";
import LibraryScreen from "../screens/library/Library";

export type StackParamList = {
  Login: undefined;
  Notice: undefined;
  Library: undefined;
  Book: undefined;
  Profile: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<StackParamList>();

const Navigation = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator
          screenOptions={{
            headerRight: () => <LogoutButton />,
          }}
          sceneContainerStyle={{
            backgroundColor: "black",
          }}
        >
          <Tab.Screen name="Notice" component={NoticesScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Library" component={LibraryScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
