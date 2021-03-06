import React from "react";
import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CURRENT_LOCATION":
      return { ...state, currentLocation: action.payload };
    case "START_RECORDING":
      return { ...state, recording: true };
    case "STOP_RECORDING":
      return { ...state, recording: false };
    case "ADD_LOCATION":
      /* INITIAL LOCATION STATE = []  ,FINAL LOCATION STATE = [OBJ1, OBJ2, OBJ3....OBJN] */
      return { ...state, locations: [...state.locations, action.payload] };
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "RESET":
      return { ...state, name: "", locations: [] };
    default:
      return state;
  }
};

const changeName = (dispatch) => (name) => dispatch({ type: "CHANGE_NAME", payload: name });
const startRecording = (dispatch) => () => dispatch({ type: "START_RECORDING" });

const stopRecording = (dispatch) => () => dispatch({ type: "STOP_RECORDING" });

const addLocation = (dispatch) => (location, recording) => {
  /* Adds current location of user in state. */
  dispatch({ type: "ADD_CURRENT_LOCATION", payload: location });
  /* Adds current location of user in state. */
  if (recording) dispatch({ type: "ADD_LOCATION", payload: location });
};

const reset = (dispatch) => () => dispatch({ type: "RESET" });

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
    changeName,
    reset,
  },
  { name: "", recording: false, locations: [], currentLocation: null }
);
