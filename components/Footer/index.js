// @flow
import React from 'react';
import { Container, Description, Icons } from './style';
import Icon from '../Icon';

export default function Footer() {
  return (
    <Container data-cy="footer">
      <Icons>
        <a
          href="https://github.com/brianlovin/security-checklist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="github" />
        </a>
      </Icons>

      <Description>
        Copyright whenever. This is
        <a
          href="https://github.com/brianlovin/security-checklist"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source
        </a>
        .
      </Description>
    </Container>
  );
}
