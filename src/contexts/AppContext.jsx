import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    backgroundColor: "white",
  });

  const toggleBackground = () => {
    setState((prevState) => ({
      ...prevState,
      backgroundColor:
        prevState.backgroundColor === "white" ? "black" : "white",
    }));
  };

  return (
    <AppContext.Provider value={{ state, setState, toggleBackground }}>
      {children}
    </AppContext.Provider>
  );
};
