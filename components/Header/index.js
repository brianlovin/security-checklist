// @flow
import * as React from 'react';
import Link from 'next/link';
import {
  Container,
  ButtonRowContainer,
  Label,
  LogoLink,
  Progression,
  ProgressBar,
  ProgressLabel } from './style';
import { PrimaryButton, GhostButton } from '../Button';
import Logo from './Logo';
import Confetti from './Confetti';

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

      { displayProgress && (
      <Progression
        id="progress"
        aria-label={`${currentCount} of ${totalItemsCount} completed`}
        tabIndex="0"
      >
        <ProgressBar
          id="progress_bar"
          aria-describedby="progress_tooltip"
          disabled={currentCount > 0 ? false : true}
        />
        <ProgressLabel
          id="progress_tooltip"
          role="tooltip"
        >
          { currentCount === totalItemsCount
            ? `🎉 Checklist Complete! 🎉`
            : `${currentCount} of ${totalItemsCount} completed`}
        </ProgressLabel>
        <Confetti fireConfetti={currentCount === totalItemsCount} />
      </Progression>)}
    </Container>
  );
}
