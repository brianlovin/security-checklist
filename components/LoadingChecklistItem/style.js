// @flow
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';

const placeHolderShimmer = keyframes`
  0%{
    transform: translateX(-100%) translateY(0%);
    background-size: 100%;
    opacity: 1;
  }
  100%{
    transform: translateX(200%) translateY(0%);
    background-size: 500%;
    opacity: 0;
  }
`;

export const ShimmerInboxThread = styled.div`
  padding: 16px;

  section {
    min-height: 40px;
  }

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const ShimmerBase = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${theme.bg.wash};
  overflow: hidden;
`;

export const ShimmerLine = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  background: linear-gradient(
    to right,
    ${theme.bg.wash} 10%,
    ${theme.border.active},
    ${theme.bg.wash} 30%
  );
  animation-name: ${placeHolderShimmer};
`;

export const Cover = styled.span`
  position: absolute;
  background: ${theme.bg.default};
`;
