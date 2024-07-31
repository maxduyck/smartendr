import React from 'react';
import Layout from './components/Layout';
import { useData } from './contexts/data';
import './index.css';

const App = () => {
  const data = useData();

  return data?.isReady ? (
    // <FilterProvider>
      <Layout />
    // </FilterProvider>
  ) : (
    <p>loading...</p>
  );
};

export default App;
