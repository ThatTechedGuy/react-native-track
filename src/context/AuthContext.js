import { AsyncStorage } from "react-native";

import createDataContext from "./createDataContext";
import trackerApi from "./../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP_ERROR":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "SIGNUP":
      return {
        token: action.payload,
        errorMessage: "",
      };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({
  email,
  password,
}) => {
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
    await AsyncStorage.setItem(
      "token",
      response.data.token
    );
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: "SIGNUP_ERROR",
      payload: "Something went wrong while registering.",
    });
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow sign out!!!
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
