import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as AuthContext } from "./context/AuthContext";
const LoadingScreen = () => {
  const { state, localSignin } = useContext(AuthContext);

  useEffect(() => {
    localSignin();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TrackK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 80,
  },
});

export default LoadingScreen;
