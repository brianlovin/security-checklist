// @flow
import React from 'react';
import type { App } from '../../types';
import {
  AppMeta,
  AppRowContainer,
  AppIcon,
  AppName,
  AppSourcesList,
  AppSourcesListItem,
  AppSourcesLabel,
} from './style';
import Offer from './Offer';
import Icon from '../Icon';

type Props = {
  app: App,
};

export const AppRow = ({ app }: Props) => {
  const sourcesKeys = app.sources && Object.keys(app.sources);

  const renderSourceIcon = (key: string) => {
    const sourceUrl = app.sources[key];
    const renderMatch = key.toLowerCase();
    const hideOnMobile =
      renderMatch === 'linux' ||
      renderMatch === 'macos' ||
      renderMatch === 'windows';
    return (
      <AppSourcesListItem hideOnMobile={hideOnMobile} key={key}>
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          <Icon size={32} glyph={renderMatch} />
          <AppSourcesLabel>{renderMatch}</AppSourcesLabel>
        </a>
      </AppSourcesListItem>
    );
  };

  return (
    <AppRowContainer href={app.url} target="_blank" rel="noopener noreferrer">
      <AppMeta>
        {app.image && <AppIcon alt={app.name} src={app.image} />}
        <AppName>{app.name}</AppName>
      </AppMeta>
      {sourcesKeys && (
        <AppSourcesList>{sourcesKeys.map(renderSourceIcon)}</AppSourcesList>
      )}
      {app.offer && <Offer offer={app.offer} />}
    </AppRowContainer>
  );
};
