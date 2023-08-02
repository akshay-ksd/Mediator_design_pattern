// Mediator.js
import React, { createContext, useContext, useState } from 'react';

const MediatorContext = createContext();

const Mediator = ({ children }) => {
  const [sharedState, setSharedState] = useState({});

  const updateSharedState = (key, value) => {
    setSharedState(prevState => ({ ...prevState, [key]: value }));
  };

  return (
    <MediatorContext.Provider value={{ sharedState, updateSharedState }}>
      {children}
    </MediatorContext.Provider>
  );
};

const useMediator = () => {
  const context = useContext(MediatorContext);
  if (!context) {
    throw new Error('useMediator must be used within a MediatorProvider');
  }
  return context;
};

export { Mediator, useMediator };
