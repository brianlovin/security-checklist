// @flow
// $FlowIssue
import React, { useState, useRef } from 'react';
import { AppsContainer, SectionHeading, ExpandContainer, ExpandContent } from './style';
import { Button } from '../Button';
import type { ChecklistResource } from '../../types';
import { AppRow } from './App';

type Props = {
  resource: ChecklistResource,
  handleAppsExpand: Function,
};

export const Apps = ({ resource, handleAppsExpand }: Props) => {
  const [overflowExpanded, setOverflowExpanded] = useState(false);
  const [contentHeight, setcontentHeight] = useState(2000);

  const expandContentContainer = useRef(null);

  function handleExpand() {
    let expandContentHeight =
      expandContentContainer.current
        ? expandContentContainer.current.scrollHeight
        : contentHeight;

      setcontentHeight(expandContentHeight)
      setOverflowExpanded(!overflowExpanded)

    handleAppsExpand(overflowExpanded ? -expandContentHeight : expandContentHeight);
  }

  if (!resource.apps) return null;

  let appList = resource.apps;
  let overflowAppList;
  if (appList && appList.length > 3) {
    overflowAppList = appList.slice(3, appList.length);
    appList = appList.slice(0, 3);
  }

  return (
    <AppsContainer overflowExpanded={overflowExpanded}>
      <SectionHeading>Apps</SectionHeading>
      {appList && appList.map(app => (
        <AppRow key={app.name} app={app} />
      ))}

      {overflowAppList && (
        <React.Fragment>
          <ExpandContent
            id={`apps_${resource.id}`}
            role="region"
            tabindex="-1"
            ref={expandContentContainer}
            style={{ '--maxHeight': `${contentHeight}px` }}
            aria-hidden={!overflowExpanded}
          >
            {overflowAppList.map(app => <AppRow key={app.name} app={app} />)}
          </ExpandContent>
        
          <ExpandContainer
            onClick={handleExpand}
            role="button"
            aria-expanded={overflowExpanded}
            aria-controls={`apps_${resource.id}`}
          >
            <Button type="button">Show {overflowExpanded ? "less" : "more"} choices</Button>
          </ExpandContainer>
        </React.Fragment>
      )}
    </AppsContainer>
  );
}

