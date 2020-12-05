// import React from "react";
// import { Text, View, StyleSheet, Button } from "react-native";
// import * as firebase from 'firebase';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// const Tab = createMaterialBottomTabNavigator();
// import { NavigationContainer } from '@react-navigation/native';
// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Dashboard" component={ProfileScreen} />
//       <Tab.Screen name="Exercise" component={ProfileScreen}/>
//       <Tab.Screen name="Profile" component={ProfileScreen}/>
//     </Tab.Navigator>
//   );
// }
// export default function ProfileScreen(props) {
//     return (
//       <>
//       <View style={styles.container}>
//         <Text> Profile Screen </Text>
//         <Text style={{ fontSize: 20, fontWeight: "bold" }}>
//           Welcome, {props.navigation.getParam("username")}
//         </Text>
//         <Button
//           title="Sign out"
//           onPress={() => props.navigation.navigate("Login")}
//         />
        
//       </View>
//       <NavigationContainer>
//       <MyTabs/>
//       </NavigationContainer>
      
//       </>
//     );
  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });


import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            You are on Profile Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Native Bottom Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default ProfileScreen;