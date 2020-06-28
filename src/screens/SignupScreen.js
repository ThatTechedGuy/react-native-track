import React, {
  useState,
  useReducer,
  useContext,
} from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h1 h1Style={{ fontSize: 90 }}>
          Register
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
      {state.errorMessage ? (
        <Text style={styles.error}>
          {state.errorMessage}
        </Text>
      ) : null}
      <Spacer>
        <Button
          raised={true}
          buttonStyle={{ backgroundColor: "black" }}
          title="Sign Up"
          onPress={() => signup({ email, password })}
        />
      </Spacer>
      <Spacer>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signin")}
        >
          <Text
            h5
            style={{ fontWeight: "bold", fontSize: 18, color: 'black' }}
          >
            Already registered? Sign in instead.
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

export default SignupScreen;
