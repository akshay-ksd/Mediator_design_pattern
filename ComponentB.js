// ComponentB.js
import React from 'react';
import { useMediator } from './Mediator';

const ComponentB = () => {
  const { sharedState } = useMediator();

  return (
    <div>
      <h2>Component B</h2>
      <p>Count: {sharedState.count}</p>
    </div>
  );
};

export default ComponentB;
