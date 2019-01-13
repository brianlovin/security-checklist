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
import Icon from '../Icon';

type Props = {
  app: App,
};

export const AppRow = ({ app }: Props) => {
  const sourcesKeys = Object.keys(app.sources);

  const renderSourceIcon = (key: string) => {
    const sourceUrl = app.sources[key];
    const appUrl = app.url;

    if (key === 'windows') {
      return (
        <AppSourcesListItem key={key}>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Icon size={32} glyph="windows" />
            <AppSourcesLabel>Windows</AppSourcesLabel>
          </a>
        </AppSourcesListItem>
      );
    }

    if (key === 'ios') {
      return (
        <AppSourcesListItem key={key}>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Icon size={32} glyph="apple" />
            <AppSourcesLabel>iOS</AppSourcesLabel>
          </a>
        </AppSourcesListItem>
      );
    }

    if (key === 'macos') {
      return (
        <AppSourcesListItem key={key}>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Icon size={32} glyph="app-store" />
            <AppSourcesLabel>macOS</AppSourcesLabel>
          </a>
        </AppSourcesListItem>
      );
    }

    if (key === 'android') {
      return (
        <AppSourcesListItem key={key}>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Icon size={32} glyph="android" />
            <AppSourcesLabel>Android</AppSourcesLabel>
          </a>
        </AppSourcesListItem>
      );
    }

    return null;
  };

  return (
    <AppRowContainer href={app.url} target="_blank" rel="noopener noreferrer">
      <AppMeta>
        <AppIcon src={app.image} />
        <AppName>{app.name}</AppName>
      </AppMeta>
      <AppSourcesList>{sourcesKeys.map(renderSourceIcon)}</AppSourcesList>
    </AppRowContainer>
  );
};
