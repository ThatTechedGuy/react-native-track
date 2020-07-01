import React, { useReducer } from "react";

/**
 * Function input:-
 *  REDUCER: Will rebuild a new state object from scratch based on the action dispatched.
 *  METHODS: Will Dispatch actions filled with particular type and payload.
 *  DEFAULT_VALUE: INITIAL STATE {}
 */
export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    /* useReducer takes in a reducer and initState and returns a current state +  action methods to change it. */
    const [state, dispatch] = useReducer(reducer, defaultValue);

    /* This newly created dispatch dependant action will let us take in the dispatch as 
       a dependancy to reach the reducer easily.
    */
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    /* 
     *  Make all time current application state and actions to
     *  change it available to the required consumers.
     */
    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  /**
   * Context object contains :-
   *      current state of the Application as well as actions to change it.
   * Provider just has to be put at the top of the Application Root
   * in order to make the state available everywhere through the use of useContext() hook.
   */
  return { Context, Provider };
};
