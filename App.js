// Screens
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoggingScreen from './screens/LoggingScreen';
import ProfileScreen from './screens/ProfileScreen';

// Firebase
import * as firebase from 'firebase';
import "firebaseConfig.json"

//React Navigation Setup
import {  createAppContainer, createSwitchNavigator } from 'react-navigation';

// if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
// }

const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: DashboardScreen },
  Logging: { screen: LoggingScreen },
  Profile: { screen: ProfileScreen },
});

const App = createAppContainer(MainNavigator);

export default App;