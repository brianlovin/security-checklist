// @flow
import styled from 'styled-components';
import { theme } from '../theme';
import { hexa } from '../globals';

export const Container = styled.div`
  margin-top: 128px;
  padding: 0 16px;
  width: 100%;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${theme.text.tertiary};
  max-width: 320px;
  display: flex;
  flex: 1 0 auto;
  align-items: flex-start;
  padding-bottom: 16px;

  a {
    color: ${theme.text.default};
    margin-left: 4px;
  }
  a:active, a:focus {
    box-shadow: 0 0 0 1px ${theme.bg.default},
      0 0 0 3px ${props => hexa(props.theme.text.tertiary, 0.25)};
  }
`;

export const Icons = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: flex-start;
  padding-bottom: 8px;

  a {
    color: ${theme.text.tertiary};
    margin-right: 16px;
    line-height: 1;
    border-radius: 10px;
    height: 32px;
  }

  a:hover, a:active, a:focus {
    color: ${theme.text.default};
  }

  a:active, a:focus {
    box-shadow: 0 0 0 1px ${theme.bg.default},
      0 0 0 3px ${props => hexa(props.theme.text.tertiary, 0.25)};
  }
`;
