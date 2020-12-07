import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";

export default function LogScreen(props) {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    console.log("fetching user data");
    var ref = firebase.database().ref("users/");
    ref.once("value").then(function (snapshot) {
      var tempuserInfo = snapshot.child(props.navigation.getParam("id")).val();

      if (tempuserInfo) {
        setUserInfo(tempuserInfo);
      } else {
        AsyncStorage.getItem("userId").then((id) =>
          setUserInfo(snapshot.child(id).val())
        );
      }
    });
  }, []);
  useEffect(() => {
    if (userInfo) {
      console.log(Object.keys(userInfo["workouts"]));
    }
  }, [userInfo]);
  if (userInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}> Workout Logs </Text>
        <ScrollView
          style={{
            width: "100%",
            flexDirection: "column",
            // justifyContent: "flex-start",
          }}
        >
          <>
            {Object.keys(userInfo["workouts"]).map((workout) => (
              <TouchableOpacity
                style={{ width: "100%", height: 100, marginBottom: 20 }}
              >
                <View style={styles.placeList}>
                  <View
                    style={{ flexDirection: "column", width: "100%", flex: 1 }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View
                        style={{
                          flex: 0.5,
                          alignItems: "left",
                        //   justifyContent: "center",
                          margin:10
                        }}
                      >
                        <Text style={{ fontSize: 18, color: "white",fontWeight:"bold" }}>
                          {userInfo["workouts"][workout]["placeName"]}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 0.5,
                          alignItems: "flex-end",
                        //   justifyContent: "center",
                          margin:10
                        }}
                      >
                        <Text style={{ fontSize: 18, color: "white" }}>
                          {userInfo["workouts"][workout]["date"]}
                        </Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View
                        style={{
                          flex: 0.5,
                          alignItems: "left",
                        //   justifyContent: "center",
                          margin:10
                        }}
                      >
                        <Text style={{ fontSize: 14, color: "white"}}>
                          {userInfo["workouts"][workout]["duration"]} hrs
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 0.5,
                          alignItems: "center",
                        //   justifyContent: "center",
                          margin:10
                        }}
                      >
                        <Text style={{ fontSize: 14, color: "white" }}>
                          {userInfo["workouts"][workout]["length"]} miles
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 0.5,
                          alignItems: "flex-end",
                        //   justifyContent: "center",
                          margin:10
                        }}
                      >
                        <Text style={{ fontSize: 14, color: "white" }}>
                          {userInfo["workouts"][workout]["steps"]} steps
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}> Workout Logs </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            // justifyContent: "flex-start",
          }}
        ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 70,
    flexDirection: "column",
    // justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    borderWidth: 6,
    borderStyle: "solid",
    borderColor: "#00A9A5",
  },
  mapView: {
    width: "80%",
    height: "20%",
    margin: 20,
    backgroundColor: "#f7f7f7",
    borderRadius: 25,
  },
  heading1: {
    fontSize: 30,
    fontWeight: "bold",
    width: "80%",
    marginTop: "25%",
  },
  heading2: {
    fontSize: 28,
    width: "80%",
    marginTop: 20,
  },
  buttonContainer: {
    width: "90%",
    padding: 10,
    backgroundColor: "#00A9A5",
    borderRadius: 15,
    margin: "auto",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
  statsContainer: {
    width: "80%",
    height: "30%",
    margin: 20,
    borderRadius: 25,
    backgroundColor: "#1B4965",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statsGroup: {
    width: "30%",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  labelGroup: {
    width: "50%",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  statsText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  placeList: {
    flexDirection: "row",
    height: "100%",
    backgroundColor: "#3d3d3d",
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 20,
  },
  placeListInternal: {
    flexDirection: "row",
    height: "100%",
  },
});
