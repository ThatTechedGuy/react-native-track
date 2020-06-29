import { AsyncStorage } from "react-native";

import createDataContext from "./createDataContext";
import trackerApi from "./../api/tracker";
import { navigate, replaceScreen } from "../rootNavigation";

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP_ERROR":
    case "SIGNIN_ERROR":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "SIGNUP":
    case "SIGNIN":
    case "LOCAL_SIGNIN":
      return {
        token: action.payload,
        errorMessage: "",
      };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  // make api request to sign up with that email and password
  // if we sign up, modify our state, and say that we are authenticated
  // if signing up fails, we probably need to reflect an error message
  // somewhere
  try {
    const response = await trackerApi.post("/signup", {
      email,
      password,
    });
    dispatch({
      type: "SIGNUP",
      payload: response.data.token,
    });
    await AsyncStorage.setItem("token", response.data.token);
    navigate("TrackList");
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: "SIGNUP_ERROR",
      payload: "Something went wrong while registering.",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  // Try to signin
  // Handle success by updating state
  // Handle failure by showing error message (somehow)
  try {
    const response = await trackerApi.post("/signin", {
      email,
      password,
    });
    dispatch({
      type: "SIGNIN",
      payload: response.data.token,
    });
    await AsyncStorage.setItem("token", response.data.token);
    navigate("TrackList");
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: "SIGNIN_ERROR",
      payload: "Something went wrong while signing in.",
    });
  }
};

const localSignin = (dispatch) => async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "LOCAL_SIGNIN", payload: token });
      replaceScreen("MainFlow", {screen: 'TrackList'});
    } else {
      replaceScreen("LoginFlow");
    }
  } catch (err) {
    console.log("ERROR WHILE FINDING TOKEN:", err);
    replaceScreen("LoginFlow");
  }
};

const clearErrorMessage = (dispatch) => () => dispatch({ type: "CLEAR_ERROR" });

const signout = (dispatch) => () => {
    
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, localSignin },
  { token: null, errorMessage: "" }
);
