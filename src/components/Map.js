import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const { state } = useContext(LocationContext);

  const { currentLocation, locations } = state;


  if (!currentLocation) return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  else
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={20}
          strokeColor="rgba(255,0,0,1.0)"
          fillColor="rgba(255,0,0,0.3)"
        />
        <Polyline
          coordinates={locations.map((loc) => loc.coords)}
          fillColor={"black"}
          strokeColor={"black"}
          strokeWidth={3.0}
        />
      </MapView>
    );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default Map;
