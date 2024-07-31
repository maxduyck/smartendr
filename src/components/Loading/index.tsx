import React from 'react';
import { useData } from '../../contexts/data';
import { Styled } from './style';

const Loading = () => {
  const data = useData();

  return (
    <Styled.Wrapper>
      {!data?.isReady && <Styled.Loader />}
      {data?.isReady && data?.isError && (
        <Styled.Error>
          ⚠ An error occurred. Please try again shortly
        </Styled.Error>
      )}
    </Styled.Wrapper>
  )
};

export default Loading;
