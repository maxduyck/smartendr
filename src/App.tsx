import React from 'react';
import Layout from './components/Layout';
import Loading from './components/Loading';
import { useData } from './contexts/data';
import './index.css';

const App = () => {
  const data = useData();

  return data?.isReady && !data?.isError ? (
    <Layout />
  ) : (
    <Loading />
  );
};

export default App;
