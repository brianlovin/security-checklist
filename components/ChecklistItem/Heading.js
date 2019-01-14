// @flow
import React from 'react';
import { Title, Description, Uncollapse } from './style';
import type { ChecklistResource } from '../../types';

type Props = {
  resource: ChecklistResource,
  isCollapsed: boolean,
  handleCollapse: Function,
};

export const Heading = ({ resource, isCollapsed, handleCollapse }: Props) => (
  <React.Fragment>
    <Title>
      {resource.title}
      <Uncollapse onClick={handleCollapse}>
        {isCollapsed ? 'Show details' : 'Hide details'}
      </Uncollapse>
    </Title>
    {!isCollapsed && <Description source={resource.description} />}
  </React.Fragment>
);
