import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import * as firebase from 'firebase';

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
        firebase
          .database()
          .ref("users/" + result.user.givenName)
          .set({ name: result.user.givenName });
        props.navigation.navigate("Profile", {
          username: result.user.givenName,
        }); //after Google login redirect to Profile
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
