import React from 'react';
import Table from '../Table';
import { Styled } from './style';

type Props = {
  orders: Order[];
};

const Layout = ({ orders }: Props) => {
  const tables: {
    [key: string]: {
      products: Product[];
      sum: number;
    };
  } = {};

  orders.forEach((item) => {
    const { products, table_name, total } = item;
    if (!products?.length) return;
    const cleanProducts = products.filter(({ id }) => !!id);
    if (!cleanProducts.length) return;

    if (!tables[table_name]) {
      tables[table_name] = { products: cleanProducts, sum: Number(total) };
    }
    tables[table_name] = {
      products: [...tables[table_name].products, ...cleanProducts],
      sum: tables[table_name].sum + Number(total),
    }
  })
  console.log('tables', tables);

  return (
    <Styled.Container>
      {Object.keys(tables).map((key) => (
        <Table
          key={key}
          name={key}
          products={tables[key].products}
          sum={tables[key].sum}
        />
      ))}
    </Styled.Container>
  );
};

export default Layout;
