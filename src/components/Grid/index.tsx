import React from 'react';
import { useData } from '../../contexts/data';
import Table from '../Table';
import { Styled } from './style';

const Grid = () => {
  const data = useData();

  let columns = [];
  if (data?.tables.length) {
    const tables = data.tables.map((table, index) => ({ ...table, index }));
    for (let i = 0; i < tables.length; i += 2) {
      columns.push(tables.slice(i, i + 2));
    }
  }

  const mapIndex = (index: number, splitIndex: number) => index % splitIndex;

  return (
    <Styled.Container>
      {columns.map((items, i) => (
        <Styled.Column key={i}>
          {items.map(({ index, name, products, sum }) => (
            <Table
              key={name}
              colorIndex={mapIndex(index, 5)}
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
