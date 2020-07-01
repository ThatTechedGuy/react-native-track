import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as TrackContext } from "../context/TrackContext";
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
  const { fetchTracks } = useContext(TrackContext);
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button title="Go to Track Detail" onPress={() => navigation.navigate("TrackDetail")} />
      <Spacer>
        <Button title="Log Tracks" onPress={fetchTracks} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
