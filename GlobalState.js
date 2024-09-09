import React, { useState, createContext } from 'react';

// Create a context
export const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  // State to store the saved value (can be accessed from anywhere)
  const [savedValue, setSavedValue] = useState(null);


  return (
    <GlobalContext.Provider value={{ savedValue, setSavedValue }}>
      {children}
    </GlobalContext.Provider>
  );
};
