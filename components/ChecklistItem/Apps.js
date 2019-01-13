// @flow
import React from 'react';
import { AppsContainer, SectionHeading } from './style';
import type { ChecklistResource } from '../../types';
import { AppRow } from './App';

type Props = {
  resource: ChecklistResource,
};

export const Apps = ({ resource }: Props) => {
  if (!resource.apps) return null;
  return (
    <AppsContainer>
      <SectionHeading>Apps</SectionHeading>
      {resource.apps.map(app => (
        <AppRow key={app.name} app={app} />
      ))}
    </AppsContainer>
  );
};
