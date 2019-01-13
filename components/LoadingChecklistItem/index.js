// @flow
import React from 'react';
import { ShimmerInboxThread, ShimmerBase, ShimmerLine, Cover } from './style';
import Card from '../Card';

const LoadingChecklistItem = () => (
  <Card>
    <ShimmerInboxThread>
      <ShimmerBase>
        <ShimmerLine />
        <Cover
          style={{
            top: '0',
            left: '40px',
            height: '40px',
            width: '16px',
          }}
        />
        <Cover
          style={{
            top: '0',
            left: '50%',
            height: '40px',
            width: '50%',
          }}
        />

        <Cover
          style={{
            top: '20px',
            left: '40px',
            height: '8px',
            width: '50%',
          }}
        />

        <Cover
          style={{
            top: '40px',
            left: '0',
            height: '16px',
            width: '100%',
          }}
        />
        <Cover
          style={{
            top: '40px',
            left: '0',
            height: '100%',
            width: '48px',
          }}
        />
        <Cover
          style={{
            top: '72px',
            left: '48px',
            height: '8px',
            width: '100%',
          }}
        />
        <Cover
          style={{
            top: '72px',
            left: '35%',
            height: '24px',
            width: '100%',
          }}
        />
      </ShimmerBase>
    </ShimmerInboxThread>
  </Card>
);

export default LoadingChecklistItem;
