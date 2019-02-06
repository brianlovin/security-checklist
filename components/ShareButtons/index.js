// @flow
import * as React from 'react';
import { FacebookButton, TwitterButton, CopyLinkButton } from '../Button';
import { Container } from './style';

export default function ShareButtons() {
  return (
    <Container>
      <FacebookButton
        href="https://www.facebook.com/sharer/sharer.php?u=https://securitycheckli.st"
        target="_blank"
        rel="noopener noreferrer"
      >
        Share
      </FacebookButton>

      <TwitterButton
        href="http://twitter.com/share?text=Check out Security Checklist, a checklist to help people stay safe online&url=https://securitycheckli.st"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </TwitterButton>

      <CopyLinkButton text="https://securitycheckli.st">
        Share Link
      </CopyLinkButton>
    </Container>
  );
}
