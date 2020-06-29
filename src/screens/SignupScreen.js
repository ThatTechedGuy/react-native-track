import React, { useState, useReducer, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", clearErrorMessage);
    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", clearErrorMessage);
    return unsubscribe;
  }, [navigation]);

  return (
    <AuthForm
      headerText="Register"
      errorMessage={state.errorMessage}
      submitButtonText="Register"
      handleSubmit={({ email, password }) => signup({ email, password })}
      handleNavigation={async () => await navigation.navigate("Signin")}
      navigationText="Already registered? Login instead."
    />
  );
};

export default SignupScreen;
