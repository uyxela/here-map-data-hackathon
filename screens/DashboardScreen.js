import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import {
  Alert,
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import * as firebase from "firebase";
import MapView from "react-native-maps";

export default function DashboardScreen(props) {
  const [location, setLocation] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    console.log("fetching user data");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      (error) => Alert.alert(error.message),
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: Infinity,
      }
    );
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
    // get user info
  }, []);

  if (userInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading1}>Welcome, {userInfo["firstName"]}</Text>
        <View style={styles.mapView}>
          {location ? (
            <MapView
              style={styles.mapStyle}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
              showsUserLocation={true}
              userLocationAnnotationTitle={"Current Location"}
              showsMyLocationButton={true}
              loadingEnabled={true}
              showsPointsOfInterest={true}
              showsMyLocationButton={true}
            >
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Places")}
                style={styles.buttonContainer}
              >
                <View style={{ alignContent: "left" }}>
                  <Text style={styles.buttonText}>Let's explore</Text>
                </View>
                <View style={{ alignContent: "left" }}>
                  <Ionicons name="ios-arrow-forward" color="white" size={28} />
                </View>
              </TouchableOpacity>
            </MapView>
          ) : null}
        </View>
        <Text style={styles.heading2}>Your Weekly Stats</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statsGroup}>
            <Text style={styles.statsText}>{5}</Text>
            <Text style={styles.statsText}>{12}</Text>
            <Text style={styles.statsText}>{12000}</Text>
          </View>
          <View style={styles.labelGroup}>
            <Text style={styles.statsText}>Hours exercised</Text>
            <Text style={styles.statsText}>Miles travelled</Text>
            <Text style={styles.statsText}>Steps taken</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
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
    height: "35%",
    margin: 20,
    backgroundColor: "#f7f7f7",
    borderRadius: 25,
  },
  heading1: {
    fontSize: 40,
    fontWeight: "bold",
    width: "80%",
    // marginTop: "25%",
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
});
