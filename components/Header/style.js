// @flow
import styled from 'styled-components';
import { theme } from '../theme';
import { hexa } from '../globals';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'logo progression actions';
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props =>
    props.showHeaderShadow ? props.theme.bg.default : props.theme.bg.wash};
  z-index: 3;
  box-shadow: ${props =>
    props.showHeaderShadow ? '0 4px 8px rgba(0,0,0,0.04)' : 'none'};
  transition: all 0.2s ease-in-out;

  @media (max-width: 968px) {
    padding: 8px 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "logo actions" "progression progression";
  }
`;

export const Logo = styled.h1`
  grid-area: logo;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.text.default};
`;

export const Progression = styled.div`
  grid-area: progression;
  text-align: center;

  display: ${props =>
    props.isHidden ? 'none' : 'block'};
`;

export const ProgressBar = styled.div`
  height: 8px;
  margin: 6px 0;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background-image: linear-gradient(to left, #a913de, #6ac9ff);

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    right: 0;
    width: 100%;
    background: ${theme.border.default};
    max-width: var(--progress);
    transition: max-width ${theme.animations.default};
  }
`;

export const ButtonRowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-area: actions;
  align-items: center;

  a {
    margin-left: 8px;
  }
`;

export const LogoLink = styled.a`
  transition: all ${props => props.theme.animations.default};
  display: inline-flex;
  align-items: center;
  border-radius: 6px;

  &:hover {
    transform: scale(1.2);
  }
  &:active, &:focus {
    transform: scale(1.2);
    box-shadow: 0 0 0 1px ${theme.bg.default},
      0 0 0 3px ${props => hexa(props.theme.text.tertiary, 0.25)};
  }
`;

export const Label = styled.h1`
  position: absolute;
  left: -9999px;
  visibility: none;
`;
