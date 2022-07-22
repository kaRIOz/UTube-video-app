import React, { useState, useContext } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
