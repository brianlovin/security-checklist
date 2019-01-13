// @flow
import React from 'react';
import { SectionHeading } from './style';
import type { ChecklistResource } from '../../types';
import { ResourceRow } from './Resource';

type Props = {
  resource: ChecklistResource,
};

export const Resources = ({ resource }: Props) => (
  <React.Fragment>
    <SectionHeading>More Resources</SectionHeading>
    {resource.resources.map(r => (
      <ResourceRow key={resource.name} resource={r} />
    ))}
  </React.Fragment>
);
