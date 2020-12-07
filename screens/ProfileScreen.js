import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import * as firebase from "firebase";
import AsyncStorage from '@react-native-community/async-storage'

export default function ProfileScreen(props) {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    console.log("fetching user data")
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
  },[]);
  if (userInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}> Profile </Text>
        <Image
          style={styles.profilePic}
          source={{
            uri: userInfo["photoUrl"],
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Welcome, {userInfo["firstName"]}
        </Text>
        <Text style={{ fontSize: 15, marginTop: 10 }}>{userInfo["email"]}</Text>
        <Button
          title="Sign out"
          onPress={() => props.navigation.navigate("Login")}
        />
        <View
          style={{
            flexDirection: "row",
            height: 170,
            paddingTop: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#082D0F",
              flex: 0.5,
              margin: 10,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              Male
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#B2FFA9",
              flex: 0.5,
              margin: 10,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>
              18 yrs
            </Text>
          </View>
        </View>
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
              flex: 0.5,
              margin: 10,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>
              5' 11"
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#1B4965",
              flex: 0.5,
              margin: 10,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              170 lbs
            </Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text> Loading </Text>
      </View>
    );
  }
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
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
  },
});
