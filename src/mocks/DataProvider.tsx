import React, { createContext, useContext } from 'react';
import { State } from '../contexts/data'; // Adjust the import path based on your project structure

type Props = {
  children: JSX.Element | null;
  mockState: State;
};

const MockDataContext = createContext<State | null>(null);

const MockDataProvider = ({ children, mockState }: Props) => {
  return (
    <MockDataContext.Provider value={mockState}>
      {children}
    </MockDataContext.Provider>
  );
};

const useData = () => {
  const state = useContext(MockDataContext);
  if (!state) {
    console.error('useMockData must be used within a MockDataProvider');
    return;
  }
  return state;
};

export { MockDataProvider, useData };
