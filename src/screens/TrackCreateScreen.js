import "./../../test/_mockLocation";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "./../components/TrackForm";

const TrackCreateScreen = ({ navigation }) => {
  const { addLocation } = useContext(LocationContext);
  const [focus, setFocus] = useState(true);
  const [err] = useLocation(focus, (location) => addLocation(location));

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => setFocus(true));
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => setFocus(false));
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text h1 h1Style={{ fontSize: 70 }}>
        Create a track
      </Text>
      <Map />
      {err ? (
        <Spacer>
          <Text style={styles.text}>{err.message}</Text>
        </Spacer>
      ) : null}
      <Spacer>
        <TrackForm />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: { color: "red", fontSize: 18, fontWeight: "bold" },
});

export default TrackCreateScreen;
