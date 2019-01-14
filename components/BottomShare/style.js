// @flow
import styled from 'styled-components';

export const CardContent = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 40px;
  }
`;

export const TopBorder = styled.div`
  width: 100%;
  height: 4px;
  background-image: linear-gradient(to left, #a913de, #6ac9ff);
  border-radius: 6px 6px 0 0;
`;
