import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as firebase from 'firebase';

export default function ExerciseScreen(props) {
    return (
      <View style={styles.container}>
        <Text> Exercise Screen </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Welcome, {props.navigation.getParam("username")}
        </Text>
        <Button
          title="Sign out"
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});