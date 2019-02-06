// @flow
// $FlowIssue
import React, { useState } from 'react';
import { CopyLinkButton as StyledCopyLinkButton } from './style';
import Icon from '../Icon';
import type { ButtonProps } from './types';

type CopyLinkProps = {
  ...$Exact<ButtonProps>,
  text: string,
};

export default function CopyLinkButton(props: CopyLinkProps) {
  const { text, children } = props;
  const [isClicked, handleClick] = useState(false);

  const onClick = () => {
    handleClick(true);
    setTimeout(() => handleClick(false), 2000);
  };

  return (
    <StyledCopyLinkButton
      data-clipboard-text={text}
      onSuccess={onClick}
      component="button"
      data-cy="copy-link-button"
      isClicked={isClicked}
      aria-label="Copy the website’s address to your clipboard."
      {...props}
    >
      <Icon glyph="link" size={24} />
      {isClicked ? 'Copied!' : children}
    </StyledCopyLinkButton>
  );
}
