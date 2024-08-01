import React from 'react';
import { useData } from '../../contexts/data';
import Table from '../Table';
import { Styled } from './style';

const Grid = () => {
  const data = useData();

  let columns = [];
  if (data?.tables.length) {
    for (let i = 0; i < data.tables.length; i += 2) {
      columns.push(data.tables.slice(i, i + 2));
    }
  }

  return (
    <Styled.Container>
      {columns.map((items, i) => (
        <Styled.Column key={i}>
          {items.map(({ name, products, sum }) => (
            <Table
              key={name}
              name={name}
              products={products}
              sum={sum}
            />
          ))}
        </Styled.Column>
      ))}
    </Styled.Container>
  );
};

export default Grid;
