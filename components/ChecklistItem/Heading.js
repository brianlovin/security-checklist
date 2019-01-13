// @flow
import React from 'react';
import { Title, Description } from './style';
import type { ChecklistResource } from '../../types';

type Props = {
  resource: ChecklistResource,
  isChecked: boolean,
};

export const Heading = ({ resource, isChecked }: Props) => (
  <React.Fragment>
    <Title>{resource.title}</Title>
    <Description>{resource.description}</Description>
  </React.Fragment>
);
