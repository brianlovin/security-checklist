// @flow
import * as React from 'react';
import { FacebookButton, TwitterButton, CopyLinkButton } from '../Button';
import { Container } from './style';

export default function ShareButtons() {
  return (
    <Container>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=https://securitycheckli.st"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookButton>Share</FacebookButton>
      </a>

      <a
        href="https://twitter.com/share?text=Security Checklist: A checklist for staying safe on the internet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterButton>Tweet</TwitterButton>
      </a>

      <CopyLinkButton text="https://securitycheckli.st">
        Share Link
      </CopyLinkButton>
    </Container>
  );
}
