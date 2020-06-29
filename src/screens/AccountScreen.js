import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const AccountScreen = () => {
  const {} = React.useContext(Context);

  return (
    <View styles={styles.container}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button title="Sign out" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    margin: 20
  }
});

export default AccountScreen;
