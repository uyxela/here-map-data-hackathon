// Screens
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import * as firebase from "firebase";
import "firebaseConfig.json";
import {TabScreen} from "./screens/TabScreen";

//React Navigation Setup
import { createAppContainer, createSwitchNavigator } from "react-navigation";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const AppStack = createSwitchNavigator({ TabScreen });

const MainNavigator = createSwitchNavigator(
  {
    Login: { screen: LoginScreen },
    App: { screen: AppStack },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
