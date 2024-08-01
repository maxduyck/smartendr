import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { splitTables } from './utils';

export type State = {
  isError: boolean;
  isReady: boolean;
  tables: Table[];
};

type Props = {
  children: JSX.Element | null;
  mock?: State;
};

const DataContext = createContext<State | null>(null);

const initialState: State = {
  isError: false,
  isReady: false,
  tables: [],
};

const DataProvider = ({ children, mock }: Props) => {

  const [state, setData] = useState<State>(initialState);

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
      
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const { orders }: { orders: Order[] } = await response.json();

      const tables: Table[] = splitTables(orders);

      console.log('tables', tables);
      
      setData({
        isError: false,
        isReady: true,
        tables,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        setData({
          isError: true,
          isReady: true,
          tables: [],
        });
      } else {
        console.error('An unknown error occurred');
        setData({
          isError: false,
          isReady: true,
          tables: [],
        });
      }
    }
  }

  useEffect(() => {
    if (mock) {
      setData(mock);
    } else {
      getData();
    }
  }, []);

  return (
    <DataContext.Provider value={state as State}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const state = useContext(DataContext);
  if (!state) {
    console.error('useData must be used within a DataProvider');
    return;
  }
  return state;
};

export {
  DataProvider,
  useData,
};
