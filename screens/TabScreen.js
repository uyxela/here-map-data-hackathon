import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ProfileScreen from "./ProfileScreen";
import DashboardScreen from "./DashboardScreen";
import WorkoutScreen from "./WorkoutScreen";

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
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" color={tintColor} size={25} />
        ),
      },
    },
    Workout: {
        screen: WorkoutScreen,
        navigationOptions: {
          tabBarLabel: "Workout",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-home" color={tintColor} size={25} />
          ),
        },
      },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarLabel: "Profile",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-home" color={tintColor} size={25} />
          ),
        },
      },
    // Settings: {
    //     screen: ProfileScreen,
    //     navigationOptions: {
    //         tabBarLabel: 'Settings',
    //         tabBarIcon: ({ tintColor }) => (
    //             <Ionicons name="ios-settings" color={tintColor} size={25} />
    //         )
    //     }
    // },
    // Signout: {
    //     screen: ProfileScreen,
    //     navigationOptions: {
    //         tabBarLabel: 'Signout',
    //         tabBarIcon: ({ tintColor }) => (
    //             <SimpleLineIcons name="logout" color={tintColor} size={20} />
    //         ),
    //         tabBarOnPress: async ({navigation}) => {
    //             // await AsyncStorage.clear();
    //             navigation.navigate('Auth');
    //         }
    //     }
    // }
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey",
      showIcon: true,
    },
  }
);
