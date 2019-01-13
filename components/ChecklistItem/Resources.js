// @flow
import React from 'react';
import { SectionHeading } from './style';
import type { ChecklistResource } from '../../types';
import { ResourceRow } from './Resource';

type Props = {
  resource: ChecklistResource,
};

export const Resources = ({ resource }: Props) => {
  if (!resource.resources) return null;
  return (
    <React.Fragment>
      <SectionHeading>Resources</SectionHeading>
      {resource.resources.map(r => (
        <ResourceRow key={r.name} resource={r} />
      ))}
    </React.Fragment>
  );
};
