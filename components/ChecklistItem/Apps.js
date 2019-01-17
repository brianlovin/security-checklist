// @flow
// $FlowIssue
import React, { useState } from 'react';
import { AppsContainer, SectionHeading, ExpandContainer } from './style';
import { Button } from '../Button';
import type { ChecklistResource } from '../../types';
import { AppRow } from './App';

type Props = {
  resource: ChecklistResource,
};

export const Apps = ({ resource }: Props) => {
  const [overflowExpanded, setOverflowExpanded] = useState(false);

  if (!resource.apps) return null;

  let appList = resource.apps;
  let overflowAppList;
  if (appList.length > 3) {
    overflowAppList = appList.slice(3, appList.length);
    appList = appList.slice(0, 3);
  }

  return (
    <AppsContainer overflowExpanded={overflowExpanded}>
      <SectionHeading>Apps</SectionHeading>
      {appList.map(app => (
        <AppRow key={app.name} app={app} />
      ))}

      {overflowAppList && !overflowExpanded && (
        <ExpandContainer onClick={() => setOverflowExpanded(true)}>
          <Button>Show more choices</Button>
        </ExpandContainer>
      )}

      {overflowAppList &&
        overflowExpanded &&
        overflowAppList.map(app => <AppRow key={app.name} app={app} />)}
    </AppsContainer>
  );
};
