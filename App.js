import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

import { navigationRef } from "./src/rootNavigation";
import LoadingScreen from "./src/loadingScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TrackListFlow() {
  return (
    <Stack.Navigator initialRouteName="TrackList">
      <Stack.Screen name="TrackList" component={TrackListScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={{ title: "Track Details", headerShown: true }}
      />
    </Stack.Navigator>
  );
}

function MainFlow() {
  return (
    <Tab.Navigator initialRouteName="TrackListFlow">
      <Tab.Screen name="TrackListFlow" component={TrackListFlow} options={{ headerShown: false }} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function LoginFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="LoginFlow" component={LoginFlow} options={{ headerShown: false }} />
        <Stack.Screen name="MainFlow" component={MainFlow} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Application = () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};

export default Application;
