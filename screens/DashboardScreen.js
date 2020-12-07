import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as firebase from 'firebase';

export default function ProfileScreen(props) {
    return (
      <View style={styles.container}>
        <Text> Dashboard Screen </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Welcome, to dashboard u crip
        </Text>
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