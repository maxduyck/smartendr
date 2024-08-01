import React from 'react';
import { useData } from '../../contexts/data';
import { Styled } from './style';

const Loading = () => {
  const data = useData();

  return (
    <Styled.Wrapper>
      {!data?.isReady && <Styled.Loader data-test="loader" />}
      {data?.isReady && data?.isError && (
        <Styled.Error data-test="error">
          ⚠ An error occurred. Please try again shortly
        </Styled.Error>
      )}
    </Styled.Wrapper>
  );
};

export default Loading;
