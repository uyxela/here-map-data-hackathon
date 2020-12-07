import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ProfileScreen from "./ProfileScreen";
import DashboardScreen from "./DashboardScreen";
import LogScreen from "./LogScreen";


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const TabScreen = createBottomTabNavigator(
  {
   
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={25} />
        ),
      },
    },
    Workout: {
        screen: LogScreen,
        navigationOptions: {
          tabBarLabel: "Workouts",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-body" color={tintColor} size={25} />
          ),
        },
      },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarLabel: "Profile",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-person" color={tintColor} size={25} />
          ),
        },
      },
  },
  {
    tabBarOptions: {
      activeTintColor: "green",
      inactiveTintColor: "grey",
      showIcon: true,
    },
  }
);
