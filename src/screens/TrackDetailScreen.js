import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import Spacer from "../components/Spacer";

const TrackDetailScreen = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext(TrackContext);

  const track = state.find((t) => t._id === id);

  console.log(track);

  return (
    <Spacer>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        style={{ height: 300 }}
        initialRegion={{
          longitudeDelta: 0.005,
          latitudeDelta: 0.005,
          ...track.locations[0].coords,
        }}
      >
        <Polyline
          coordinates={track.locations.map((loc) => loc.coords)}
          strokeWidth={2}
          strokeColor={"red"}
        />
      </MapView>
    </Spacer>
  );
};

export default TrackDetailScreen;
