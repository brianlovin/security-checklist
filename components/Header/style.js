// @flow
import styled from 'styled-components';
import { theme } from '../theme';
import { hexa } from '../globals';
import { Shadows } from '../globals';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "logo actions";
  padding: 16px 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.bg.default};
  z-index: 3;
  box-shadow: 0 4px 8px rgba(0,0,0,0.04);
  transition: all 0.2s ease-in-out;

  @media (max-width: 968px) {
    padding: 8px 16px;
  }
`;

export const Logo = styled.h1`
  grid-area: logo;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.text.default};
`;

export const Progression = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  height: 32px;
  width: 100%;
  bottom: -16px;
  display: block;
  background: transparent;

  &:active, &:focus {
    outline: none;
  }
`;

export const ProgressBar = styled.div`
  display: block;
  height: 4px;
  width: 100%;
  margin: 16px 0 0;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(to left, #a913de, #6ac9ff);
  box-shadow: 0 4px 8px rgba(0,0,0,0.04);
  z-index: 5;

  ${Progression}:focus &,
  ${Progression}:active & {
    box-shadow: 0 0 0 1px ${theme.bg.default},
      0 0 0 3px ${props => hexa(props.theme.brand.default, 0.25)};
  }

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    width: 100%;
    background: ${theme.border.default};
    max-width: var(--progress);
    transition: max-width ${theme.animations.default}, background ${theme.animations.default};
  }
  &[disabled]::after {
    background: ${theme.bg.default};
  }
`;

export const ProgressLabel = styled.p`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: 4;
  bottom: -25%;
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.bg.default};
  padding: 8px 16px;

  transition: all ${theme.animations.default};

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  white-space: nowrap;
  ${Shadows.default};

  ${Progression}:hover ${ProgressBar}:not([disabled]) + &,
  ${Progression}:focus ${ProgressBar}:not([disabled]) + &,
  ${Progression}:active ${ProgressBar}:not([disabled]) + &
   {
    visibility: visible;
    opacity: 1;
    bottom: -87.5%;
  }

  @media (max-width: 968px) {
    padding: 8px 12px;
  }
`

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
  height: 100%;

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

export const ParticleZone = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  & > div, & > svg {
    position: absolute;
    transition: all 5s ease-out;
  }
`

