import "./../../test/_mockLocation";

import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
import Spacer from "../components/Spacer";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        console.log(location);
      });
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h1 h1Style={{ fontSize: 70 }}>
        Create a track
      </Text>
      <Map />
      {err ? (
        <Spacer>
          <Text style={{ color: "red", fontSize: 18, fontWeight: "bold" }}>
            {err.message}
          </Text>
        </Spacer>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
