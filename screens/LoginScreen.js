import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import AsyncStorage from '@react-native-community/async-storage'

const IOS_CLIENT_ID =
  "161357227708-bsnervueaobkrj0ffk1egodng4hmtoef.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "161357227708-0rgg09thadkhb7o5mt7sftooun540f8h.apps.googleusercontent.com";

export default function LoginScreen(props) {
  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log("LoginScreen.js 21 | ", result.user);
        var ref = firebase.database().ref("users/");
        ref.once("value").then(function (snapshot) {
          if (snapshot.child(result.user.id).exists()) {
            props.navigation.navigate("Profile", {
              id: result.user.id,
            }); 
            AsyncStorage.setItem('userId',result.user.id);
          }
          else{
            firebase
            .database()
            .ref("users/" + result.user.id)
            .set({
              email: result.user.email,
              firstName: result.user.givenName,
              lastName: result.user.familyName,
              id: result.user.id,
              photoUrl: result.user.photoUrl,
              gender: null,
              age: null,
              height: null,
              weight: null,
            });
            props.navigation.navigate("Profile", {
              id: result.user.id,
            }); 
            AsyncStorage.setItem('userId',result.user.id);
          }
        });

        
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("LoginScreen.js 30 | Error with login", e);
      return { error: true };
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Login with Google" onPress={signInWithGoogle} />
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
});
