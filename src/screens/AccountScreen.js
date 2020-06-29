import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { state, signout } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button title="Sign out" onPress={() => signout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AccountScreen;
