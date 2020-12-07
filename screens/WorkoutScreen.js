import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MapView from "react-native-maps";

export default function WorkoutScreen(props) {
  const [location, setLocation] = useState(null);

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
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> Places Nearby </Text>
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
      <View style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start"
      }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Place")}
          style={{ width: "100%", height: "22%", marginBottom: 20 }}
        >
          <View style={styles.placeList}>
            <View
              style={{
                flex: 0.4,
                alignItems: "left",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "white" }}>Place Name</Text>
            </View>
            <View
              style={{
                flex: 0.4,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "white" }}>0.7 mi</Text>
            </View>

            <View
              style={{
                flex: 0.1,
                alignItems: "flex-end",
                justifyContent: "center",
                marginRight: -35,
              }}
            >
              <AntDesign name="arrowright" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Place")}
          style={{ width: "100%", height: "22%", marginBottom: 20 }}
        >
          <View style={styles.placeList}>
            <View
              style={{
                flex: 0.4,
                alignItems: "left",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "white" }}>Place Name</Text>
            </View>
            <View
              style={{
                flex: 0.4,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "white" }}>0.7 mi</Text>
            </View>

            <View
              style={{
                flex: 0.1,
                alignItems: "flex-end",
                justifyContent: "center",
                marginRight: -35,
              }}
            >
              <AntDesign name="arrowright" size={24} color="white" />
            </View>
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
    margin: 20
  },
});
