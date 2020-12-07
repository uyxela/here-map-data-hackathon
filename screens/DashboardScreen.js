import React from "react";
import { Text, View, StyleSheet, Button, Dimensions  } from "react-native";
import * as firebase from "firebase";
import MapView from "react-native-maps";

export default function DashboardScreen(props) {
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
