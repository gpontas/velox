import React, { useState, createContext } from 'react';

// Create a context
export const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  // State to store the saved value (can be accessed from anywhere)
  const [savedValue, setSavedValue] = useState(0);

  const [initBudget, setInitBudget] = useState(1500.00);

  const [initSavings, setInitSavings] = useState(1234.56);




  return (
    <GlobalContext.Provider value={{ savedValue, setSavedValue, initBudget, setInitBudget, initSavings, setInitSavings }}>
        {children}
    </GlobalContext.Provider>


  );
};
