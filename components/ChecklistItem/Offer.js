// @flow
import React from 'react';
import type { Offer } from '../../types';
import Icon from '../Icon';
import { OfferContainer, LeftBorder } from './style';

type Props = {
  offer: Offer,
};

export default function AppOffer({ offer }: Props) {
  return (
    <OfferContainer href={offer.url} target="_blank" rel="noopener noreferrer">
      <LeftBorder />
      <Icon glyph="link" size={20} />
      {offer.label}
    </OfferContainer>
  );
}
