import React from 'react';
import { useData } from '../../contexts/data';
import Grid from '../Grid';
import { Styled } from './style';

const Layout = () => {
  const data = useData();

  return (<>
    <Styled.Header>
      Pending orders: {data?.tables.length}
    </Styled.Header>
    <Styled.Body>
      <Grid />
    </Styled.Body>
  </>);
};

export default Layout;
