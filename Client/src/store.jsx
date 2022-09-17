import { createContext, useReducer } from "react";

export const Store = createContext();

const intialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  loading: true,
  error: false,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, userInfo: action.payload };
    case "SIGN_OUT":
      localStorage.clear();
      return { ...intialState };
    default:
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, intialState);

  const value = { state, dispatch };
  return <Store.Provider value={value}>{children} </Store.Provider>;
};

export default StateProvider;
