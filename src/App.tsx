import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Layout from './components/Layout';
// import { FilterProvider } from './contexts/filter';
import './index.css';

const App = () => {
  const [orders, setOrders] = useState<Order[] | null>(null);

  const getData = async () => {
    const url = 'https://staging.smartendr.be/app/api_get_orders?locations=23,12&timestamp=43399';
    // const url = 'https://staging.smartendr.be/app/api_get_orders?locations=23,12&timestamp=1700000000';
    const options: RequestInit = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    };
    try {
      const response = await fetch(url, options);
      console.log('response', response);
      
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const items = await response.json();
      console.log('items', items);
      setOrders(items.orders);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('An unknown error occurred');
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return orders ? (
    // <FilterProvider>
      <Layout orders={orders} />
    // </FilterProvider>
  ) : (
    <p>loading...</p>
  );
};

export default App;
