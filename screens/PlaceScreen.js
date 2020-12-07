import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as firebase from "firebase";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function WorkoutScreen(props) {
  return (
    <View style={styles.container}>
        <Button title="Back" onPress={() => props.navigation.navigate("Workout")}/>
      <Text style={styles.titleText}> Place Title </Text>
      <View
        style={{
          flexDirection: "row",
          height: 400,
          paddingTop: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#00A9A5",
            flex: 0.75,
            margin: 10,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>
            MAP GOES HERE
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          //   backgroundColor: "red",
          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 0.4,
            alignItems: "left",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "black" }}>Place Name</Text>
        </View>
        <View
          style={{
            flex: 0.4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "black" }}>0.7 mi</Text>
        </View>
        
          <View
            style={{
              flex: 0.1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button title="Log Workout" />
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
