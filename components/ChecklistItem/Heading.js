// @flow
import React from 'react';
import { Title, Description } from './style';
import type { ChecklistResource } from '../../types';

type Props = {
  resource: ChecklistResource,
  isCollapsed: boolean,
};

export const Heading = ({ resource, isCollapsed }: Props) => (
  <React.Fragment>
    <Title>{resource.title}</Title>
    {!isCollapsed && <Description source={resource.description} />}
  </React.Fragment>
);
