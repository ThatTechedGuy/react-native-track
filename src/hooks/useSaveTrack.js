import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(name, locations);
  };

  return [saveTrack];
};
