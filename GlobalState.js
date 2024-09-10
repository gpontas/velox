import React, { useState, createContext } from 'react';

// Create a context
export const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  // State to store the saved value (can be accessed from anywhere)

  const [savedValueBudget, setSavedValueBudget] = useState(0);

  const [savedPrevBudget, setSavedPrevBudget] = useState(1200);

  const [savedValueSavings, setSavedValueSavings] = useState(0);

  const [savedPrevSavings, setSavedPrevSavings] = useState(0);

  const [initBudget, setInitBudget] = useState(5000.00);

  const [initSavings, setInitSavings] = useState(5000.00);

  const [salaryAmount, setSalaryAmount] = useState(1200);




  return (
    <GlobalContext.Provider value={{ 
      savedValueBudget, setSavedValueBudget, 
      initBudget, setInitBudget, 
      initSavings, setInitSavings,
      savedValueSavings, setSavedValueSavings,
      salaryAmount, setSalaryAmount,
      savedPrevBudget, setSavedPrevBudget,
      savedPrevSavings, setSavedPrevSavings,
      }}>
        {children}
    </GlobalContext.Provider>


  );
};
