import React, { useContext, useEffect } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem, Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", fetchTracks);
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text h1>Your journeys</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("TrackDetail", { id: item._id })}>
            <ListItem chevron bottomDivider title={item.name} />
          </TouchableOpacity>
        )}
      />
      <Spacer>{/* <Button title="Log Tracks" onPress={fetchTracks} /> */}</Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
