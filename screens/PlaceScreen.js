import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as firebase from "firebase";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-community/async-storage'

export default function WorkoutScreen(props) {
  const [location, setLocation] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Workout Saved!",
      "Boof some meth as a reward :)",
      [
        {
          text: "OK",
          onPress: () => {
            console.log(userInfo)
            var ref = firebase.database().ref("users/");
            ref.once("value").then(function (snapshot) {
              var id = "id" + Math.random().toString(16).slice(2);
              firebase
                .database()
                .ref("users/" + userInfo['id'] + "/workouts/" + id)
                .set({
                  workoutId: id,
                  length: 2.4,
                  date: "Dec 7, 2020",
                  steps: 3500,
                  duration: 1.4,
                  placeName: "Greenwoods Trail"
                });

            });
          },
        },
      ],
      { cancelable: false }
    );
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
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> Place Name </Text>

      <Button
        title="Back"
        onPress={() => props.navigation.navigate("Workout")}
      />
      <View
        style={{
          flexDirection: "row",
          height: 400,
        }}
      >
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
            ></MapView>
          ) : null}
        </View>
      </View>
      <Text style={{ fontSize: 15 }}> 2 mi away </Text>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "black" }}>Turn left</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "black" }}>in 250 yd</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={createTwoButtonAlert}
          style={styles.buttonContainer}
          disabled={!userInfo}
        >
          <View style={{ alignContent: "left" }}>
            <Text style={styles.buttonText}>Record Workout</Text>
          </View>
        </TouchableOpacity>
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
    height: "90%",
    margin: 20,
    backgroundColor: "#f7f7f7",
    borderRadius: 25,
  },
  buttonContainer: {
    width: "80%",
    height: "100%",
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
});
