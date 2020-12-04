// Screens
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import * as firebase from 'firebase';

//React Navigation Setup
import {  createAppContainer, createSwitchNavigator } from 'react-navigation';

const firebaseConfig = {
  apiKey: 'AIzaSyBQ1M4vxJTywuLidAuJ7e6xryQ2QZnK0X8',
  authDomain: 'quickstart-1586651695794.firebaseapp.com',
  databaseURL: 'https://quickstart-1586651695794-default-rtdb.firebaseio.com',
  projectId: 'quickstart-1586651695794',
  storageBucket: 'quickstart-1586651695794.appspot.com',
  messagingSenderId: '161357227708',
  appId: '1:161357227708:web:287cab380cdf9c7a8152b9',
  measurementId: 'G-KFMV1L3S56',
};

// if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
// }
const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
});

const App = createAppContainer(MainNavigator);

export default App;