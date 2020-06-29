import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const AuthForm = ({
  headerText,
  errorMessage,
  handleSubmit,
  handleNavigation,
  submitButtonText,
  navigationText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h1 h1Style={{ fontSize: 90 }}>
          {headerText}
        </Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      {errorMessage ? (
        <Text style={styles.error}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          raised={true}
          buttonStyle={{ backgroundColor: "black" }}
          title={submitButtonText}
          onPress={() => handleSubmit({ email, password })}
        />
      </Spacer>
      <Spacer>
        <TouchableOpacity onPress={handleNavigation}>
          <Text
            h5
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "black",
            }}
          >
            {navigationText}
          </Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  error: {
    marginLeft: 20,
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default AuthForm;
