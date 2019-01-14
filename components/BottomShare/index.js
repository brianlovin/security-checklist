// @flow
import React from 'react';
import Card from '../Card';
import ShareButtons from '../ShareButtons';
import { CardContent, TopBorder } from './style';
import { SmallHeading, SmallSubheading } from '../Page/style';

const BottomShare = () => (
  <Card style={{ width: '100%', marginTop: '48px' }}>
    <TopBorder />
    <CardContent>
      <SmallHeading>Feeling more secure?</SmallHeading>
      <SmallSubheading>
        Spread the word about improving online privacy and security
      </SmallSubheading>
      <ShareButtons />
    </CardContent>
  </Card>
);

export default BottomShare;
