// @flow
import React from 'react';
import type { Resource } from '../../types';
import { ResourceRowContainer, ResourceName } from './style';
import Icon from '../Icon';

type Props = {
  resource: Resource,
};

export const ResourceRow = ({ resource }: Props) => (
  <ResourceRowContainer
    href={resource.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon glyph="link" size={20} />
    <ResourceName>{resource.name}</ResourceName>
  </ResourceRowContainer>
);
