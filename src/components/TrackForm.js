import React, { useState, useContext } from "react";

import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { StyleSheet } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          label="Track name"
          placeholder="Name of the track"
          onChangeText={changeName}
          inputStyle={styles.input}
          value={name}
        />
        <Spacer>
          {recording ? (
            <Button title="STOP" buttonStyle={{ backgroundColor: "red" }} onPress={stopRecording} />
          ) : (
            <Button
              title="Start Recording"
              buttonStyle={{ backgroundColor: "green" }}
              onPress={startRecording}
            />
          )}
        </Spacer>
        <Spacer>
          {!recording && locations.length ? (
            <Button title="Save Recording" buttonStyle={{ backgroundColor: "orange" }} />
          ) : null}
        </Spacer>
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
