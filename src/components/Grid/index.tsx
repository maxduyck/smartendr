import React from 'react';
import { useData } from '../../contexts/data';
import Table from '../Table';
import { Styled } from './style';

const Grid = () => {
  const data = useData();

  // const sortedTables = data?.tables?.length
  //   ? data.tables.sort((a, b) => a.name.localeCompare(b.name))
  //   : []

  return (
    <Styled.Container>
      {data?.tables?.map(({ name, products, sum }) => (
        <Table
          key={name}
          name={name}
          products={products}
          sum={sum}
        />
      ))}
    </Styled.Container>
  );
};

export default Grid;
