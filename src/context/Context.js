import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  formData: null,
  modalOpen: false,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_DELIVERY":
      return { ...state, formData: action.payload, modalOpen: true };

    case "CLOSE_MODAL":
      return { ...state, modalOpen: false };

    default:
      return state;
  }
};
