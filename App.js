// Screens
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import * as firebase from "firebase";
import {TabScreen} from "./screens/TabScreen";
import PlaceScreen from "./screens/PlaceScreen";
import PlacesScreen from "./screens/PlacesScreen";
//React Navigation Setup
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import firebaseConfig from './firebaseConfig.json';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const AppStack = createSwitchNavigator({ TabScreen });

const MainNavigator = createSwitchNavigator(
  {
    Login: { screen: LoginScreen },
    App: { screen: AppStack },
    Places: {screen: PlacesScreen},
    Place: {screen:PlaceScreen}

  },
);

const App = createAppContainer(MainNavigator);

export default App;
