import React, { useState, useEffect } from "react";
import { Alert, Text, View, StyleSheet, Button, Dimensions, TouchableOpacity  } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import * as firebase from "firebase";
import MapView from "react-native-maps";

export default function DashboardScreen(props) {

  const [location, setLocation] = useState(null)
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation(position);
    }, error => Alert.alert(error.message), { 
      enableHighAccuracy: true, 
      timeout: 20000, 
      maximumAge: 1000 
    });

    // get user info
    setUserInfo({firstName: "Alex"})
  }, [])

  if (location && userInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading1}>Welcome, {userInfo["firstName"]}</Text>
        <View style={styles.mapView}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
            showsUserLocation={true}
            userLocationAnnotationTitle={"Current Location"}
            showsMyLocationButton={true}
            loadingEnabled={true}
            showsPointsOfInterest={true}
            showsMyLocationButton={true}
          >
            <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Let's explore</Text>
              <Ionicons name="ios-arrow-forward" color="white" size={28} />
            </TouchableOpacity>
          </MapView>
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
    justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    borderWidth: 6,
    borderStyle: "solid",
    borderColor: "#00A9A5"
  },
  mapView: {
    width: "80%",
    height: "35%",
    margin: 20
  },
  heading1: {
    fontSize: 30,
    fontWeight: "bold",
    width: "80%",
    marginTop: "25%"
  },
  heading2: {
    fontSize: 28,
    width: "80%",
    marginTop: 20
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
    marginBottom: 10
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "500",
    color: "white",
    textAlign: "center"
  },
  statsContainer : {
    width: "80%",
    height: "30%",
    margin: 20,
    borderRadius: 25,
    backgroundColor: "#1B4965",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }, 
  statsGroup: {
    width: "30%",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  labelGroup: {
    width: "50%",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  statsText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500"
  }
});
