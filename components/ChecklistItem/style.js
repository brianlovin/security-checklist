// @flow
import styled from 'styled-components';
import { theme } from '../theme';
import { Shadows } from '../globals';

export const Container = styled.div`
  margin-bottom: 24px;
`;

export const CardContent = styled.div`
  padding: 24px 16px;
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.text.default};
`;

export const Description = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.text.secondary};
`;

export const SectionHeading = styled.h5`
  font-size: 12px;
  font-weight: 500;
  color: ${theme.text.tertiary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 32px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 48px;
  justify-content: center;
`;

export const Checkbox = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid
    ${props => (props.isChecked ? theme.brand.default : theme.border.default)};
  background: ${props =>
    props.isChecked ? theme.brand.default : theme.bg.wash};
  cursor: pointer;
  position: relative;

  &:hover {
    ${Shadows.default};
    border: 1px solid
      ${props => (props.isChecked ? theme.brand.default : theme.border.active)};
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    left: 11px;
    top: 6px;
    width: 6px;
    height: 12px;
    border: solid
      ${props => (props.isChecked ? theme.bg.default : theme.border.active)};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const ResourceContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  width: 100%;

  @media (max-width: 768px) {
    padding-left: 8px;
    margin-top: 24px;
  }
`;

export const AppsContainer = styled.div`
  margin-top: 8px;

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;

export const AppMeta = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const AppRowContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  width: 100%;
  border-radius: 6px;
  padding: 8px;
  padding-left: 16px;
  margin-left: -16px;
  width: calc(100% + 12px);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    border-top: 1px solid ${theme.bg.wash};
    border-radius: 0;
    margin-top: 0px;
    margin-left: -24px;
    width: calc(100% + 40px);
    padding: 24px;

    &:last-of-type {
      border-bottom: 1px solid ${theme.bg.wash};
    }
  }

  &:hover {
    background: ${theme.bg.wash};
  }
`;

export const AppIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 12px;
`;

export const AppName = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.text.secondary};
`;

export const AppSourcesList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-right: 8px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    justify-content: space-between;
  }
`;

export const AppSourcesListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.text.tertiary};
  margin-left: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  min-width: 56px;
  transition: all 0.1s ease-in-out;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    position: relative;
    top: 4px;
    left: 6px;
  }

  &:hover {
    color: ${theme.text.secondary};
    background: ${theme.bg.default};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    transition: all 0.1s ease-in-out;
  }
`;

export const AppSourcesLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${theme.text.tertiary};
  margin-top: 4px;
`;

export const ResourceRowContainer = styled.a`
  display: flex;
  align-items: center;
  margin-top: 4px;
  width: 100%;
  border-radius: 6px;
  padding: 8px 12px;
  margin-left: -12px;
  color: ${theme.text.tertiary};
  width: calc(100% + 8px);

  @media (max-width: 768px) {
    width: calc(100% + 16px);
  }

  &:first-of-type {
    margin-top: 8px;
  }

  .icon {
    margin-right: 8px;
  }

  &:hover {
    background: ${theme.bg.wash};
    color: ${theme.text.default};
  }
`;

export const ResourceName = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
