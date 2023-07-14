import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { useAuthContext } from "../contexts/AuthContext";

import {
  LibraryScreen,
  BookScreen,
  CollegeScreen,
  DepartmentScreen,
  UniversityScreen,
  SignupScreen,
  LoginScreen,
  ProfileScreen,
  HomeScreen,
} from "../screens";
import NoticesScreen from "../screens/notice/NoticesScreen";
import NoticeScreen from "../screens/notice/NoticeScreen";
import ProfileImage from "../components/header/ProfileImage";

export type StackParamList = {
  Login: undefined;
  All: undefined;
  Home: undefined;
  NoticeHome: undefined;
  Department: undefined;
  Notices: undefined;
  Notice: undefined;
  College: undefined;
  University: undefined;
  Library: undefined;
  LibraryHome: undefined;
  Book: undefined;
  Profile: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<StackParamList>();
const MaterialTopTab = createMaterialTopTabNavigator<StackParamList>();

const NoticeTabs = () => {
  return (
    <MaterialTopTab.Navigator
      screenOptions={{ tabBarItemStyle: { padding: 0 } }}
      sceneContainerStyle={{ backgroundColor: "black" }}
    >
      <MaterialTopTab.Screen name="All" component={NoticesScreen} />
      <MaterialTopTab.Screen name="Department" component={DepartmentScreen} />
      <MaterialTopTab.Screen name="College" component={CollegeScreen} />
      <MaterialTopTab.Screen name="University" component={UniversityScreen} />
    </MaterialTopTab.Navigator>
  );
};

const LibraryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerRight: () => <ProfileImage />, cardStyle: { backgroundColor: "black" } }}>
      <Stack.Screen name="Library" component={LibraryScreen} />
      <Stack.Screen name="Book" component={BookScreen} />
    </Stack.Navigator>
  );
};
const NoticeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerRight: () => <ProfileImage />, cardStyle: { backgroundColor: "black" } }}>
      <Stack.Screen name="Notices" component={NoticeTabs} />
      <Stack.Screen name="Notice" component={NoticeScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerRight: () => <ProfileImage />,
            tabBarIcon: ({ color, size, focused }) => {
              let iconName;
              let IconComponent;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
                IconComponent = Ionicons;
              } else if (route.name === "NoticeHome") {
                iconName = focused ? "notifications" : "notifications-outline";
                IconComponent = Ionicons;
              } else if (route.name === "Profile") {
                iconName = focused ? "account-circle" : "account-circle-outline";
                IconComponent = MaterialCommunityIcons;
              } else if (route.name === "LibraryHome") {
                iconName = focused ? "book" : "book-outline";
                IconComponent = Ionicons;
              }

              return <IconComponent name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
          <Tab.Screen name="NoticeHome" component={NoticeStack} options={{ headerShown: false, title: "Notices" }} />
          <Tab.Screen name="LibraryHome" component={LibraryStack} options={{ headerShown: false, title: "Library" }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
