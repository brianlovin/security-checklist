// @flow
import * as React from 'react';
import Page, { SectionHeading, Heading, Subheading } from '../components/Page';
import type { GetInitialProps } from '../types';
import Checklist from '../components/Checklist';

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
        <SectionHeading>
          <Heading>Improve your online privacy and security</Heading>
          <Subheading>
            The follow resources are designed to improve everyday people’s
            security and privacy while using the internet.
          </Subheading>
        </SectionHeading>

        <Checklist />
      </Page>
    );
  }
}

export default Index;
