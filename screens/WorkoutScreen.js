import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import { AntDesign } from "@expo/vector-icons";
// import {
//   TouchableOpacity,
// } from "react-native-gesture-handler";

export default function WorkoutScreen(props) {
  useEffect(() => {
    console.log(props.navigation);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> Places Nearby </Text>
      <View
        style={{
          flexDirection: "row",
          height: 170,
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
      <TouchableWithoutFeedback onPress={() => props.navigation.navigate("Place")}>
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
      </TouchableWithoutFeedback>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "black",
          width: 400,
        }}
      />
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
