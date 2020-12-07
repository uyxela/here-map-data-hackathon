import React, { useState } from "react";
import { Alert, Text, View, StyleSheet, Button, Dimensions  } from "react-native";
import * as firebase from "firebase";
import MapView from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DashboardScreen(props) {

  const [location, setLocation] = useState("")

  const findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const loc = JSON.stringify(position);
      setLocation(loc);
    }, error => Alert.alert(error.message), { 
      enableHighAccuracy: true, 
      timeout: 20000, 
      maximumAge: 1000 
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={findCoordinates}>
        <Text>Location: {location}</Text>
      </TouchableOpacity>
      
      <MapView style={styles.mapStyle}>

      </MapView>
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
    //width: Dimensions.get("window").width,
    //height: Dimensions.get("window").height,
  },
});
