import { createContext, useReducer } from "react";

export const Store = createContext();

const intialState = {
  userinfo: [],
  loading: true,
  error: false,
};

export const Reducer = () => {};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, intialState);

  const value = { state, dispatch };
  return <Store.Provider value={value}>{children} </Store.Provider>;
};

export default StateProvider;
