// @flow
import * as React from 'react';
import Page, { SectionHeading } from '../components/Page';
import type { GetInitialProps } from '../types';

class Index extends React.Component<{}> {
  static async getInitialProps({ res }: GetInitialProps) {
    if (res && res.setHeader) {
      // cache podcasts for a month
      const cacheAge = 60 * 60 * 24 * 30;
      res.setHeader('Cache-Control', `public,s-maxage=${cacheAge}`);
    }

    return {};
  }

  render() {
    return (
      <Page>
        <SectionHeading />
      </Page>
    );
  }
}

export default Index;
