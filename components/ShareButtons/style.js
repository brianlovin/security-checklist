// @flow
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  width: 100%;

  button {
    width: 100%;
  }

  @media (max-width: 568px) {
    grid-template-columns: 1fr;

    a, button {
      width: 100%;
    }
  }
`;
