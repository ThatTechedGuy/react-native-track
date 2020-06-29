import React, { useContext } from "react";

import { StyleSheet, Text } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

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
      headerText="Sign in"
      errorMessage={state.errorMessage}
      submitButtonText="Login"
      handleSubmit={({ email, password }) => signin({ email, password })}
      handleNavigation={() => navigation.navigate("Signup")}
      navigationText="Do not have an account? Create one."
    />
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
