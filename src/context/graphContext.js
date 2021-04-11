import React, { createContext, useReducer, useContext } from 'react';
import graphReducer from './graphReducer';
import graphState from './graphState';

export const GraphStore = createContext();

export const GraphProvider = ({ children }) => {
  const [state, dispatch] = useReducer(graphReducer, graphState);
  return (
    <GraphStore.Provider value={[state, dispatch]}>
      {children}
    </GraphStore.Provider>
  );
};
