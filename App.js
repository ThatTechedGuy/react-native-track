import React, { useContext } from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";

import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/AuthContext";
import { setNavigator } from "./src/navigator";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TrackListFlow() {
  return (
    <Stack.Navigator initialRouteName="TrackList">
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
      />
      <Stack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
      />
    </Stack.Navigator>
  );
}

function App() {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.token === null ? (
        <Stack.Navigator initialRouteName="Signup">
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="TrackListFlow"
            component={TrackListFlow}
          />
          <Tab.Screen
            name="TrackCreate"
            component={TrackCreateScreen}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

const Application = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default Application;
