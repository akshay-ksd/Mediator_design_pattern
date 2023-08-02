// ComponentA.js
import React from 'react';
import { useMediator } from './Mediator';

const ComponentA = () => {
  const { sharedState, updateSharedState } = useMediator();

  const handleButtonClick = () => {
    // Update the shared state through the Mediator
    updateSharedState('count', sharedState.count + 1);
  };

  return (
    <div>
      <h2>Component A</h2>
      <p>Count: {sharedState.count}</p>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
};

export default ComponentA;
