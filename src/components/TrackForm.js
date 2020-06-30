import React, { useState } from "react";

import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { StyleSheet } from "react-native";

const TrackForm = () => {
  const [text, setText] = useState(false);

  return (
    <>
      <Spacer>
        <Input
          label="Track name"
          placeholder="Name of the track"
          onChangeText={(text) => setText(text)}
          inputStyle={styles.input}
        />
        <Button title="Start Recording" buttonStyle={{ backgroundColor: "green" }} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2.5,
    borderWidth: 3.5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderColor: "green",
    padding: 10,
  },
});

export default TrackForm;
