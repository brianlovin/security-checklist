// @flow
import React from 'react';
import { Title, Description } from './style';
import type { ChecklistResource } from '../../types';

type Props = {
  resource: ChecklistResource,
};

export const Heading = ({ resource }: Props) => (
  <React.Fragment>
    <Title>{resource.title}</Title>
    <Description source={resource.description} />
  </React.Fragment>
);
