// @flow
import * as React from 'react';
import Link from 'next/link';
import {
  Container,
  ButtonRowContainer,
  Label,
  LogoLink,
  Progression,
  ProgressBar } from './style';
import { PrimaryButton, GhostButton } from '../Button';
import Logo from './Logo';

type Props = {
  showHeaderShadow: boolean,
  displayProgress: boolean,
  totalItemsCount: number,
  currentCount: number,
};

export default function Header(props: Props) {
  const { showHeaderShadow, totalItemsCount, currentCount, displayProgress } = props;

  return (
    <Container showHeaderShadow={showHeaderShadow} data-cy="header">
      <div>
        <Link href="/">
          <LogoLink href="/">
            <Label>Security Checklist</Label>
            <Logo />
          </LogoLink>
        </Link>
      </div>

      <Progression isHidden={!displayProgress}>
        {currentCount} of {totalItemsCount} completed
        <ProgressBar />
      </Progression>

      <ButtonRowContainer>
        <Link href="/about">
          <GhostButton as="a" href="/about">
            About
          </GhostButton>
        </Link>

        <PrimaryButton
          href="https://github.com/brianlovin/security-checklist"
          target="_blank"
          rel="noopener noreferrer"
          as="a"
        >
          Contribute
        </PrimaryButton>
      </ButtonRowContainer>
    </Container>
  );
}
