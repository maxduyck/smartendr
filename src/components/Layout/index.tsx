import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useData } from '../../contexts/data';
import Table from '../Table';
import { Styled } from './style';

const Layout = () => {
  const data = useData();

  return (<>
    <Styled.Header>
      Pending orders: {data?.tables.length}
    </Styled.Header>
    <Styled.Container>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 340: 1, 640: 2, 940: 3, 1240: 4 }}
      >
        <Masonry gutter="20">
          {data?.tables.map(({ name, products, sum }) => (
            <Table
              key={name}
              name={name}
              products={products}
              sum={sum}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Styled.Container>
  </>);
};

export default Layout;
