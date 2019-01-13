// @flow
import * as React from 'react';
import NextSeo from 'next-seo';
import Page, { SectionHeading, Heading, Subheading } from '../components/Page';

export default function About() {
  return (
    <Page showEmailCapture={false}>
      <NextSeo
        config={{
          title: 'Security Checklist · About',
          description: 'A checklist for staying safe on the internet',
          openGraph: {
            title: 'Security Checklist · About',
            description: 'A checklist for staying safe on the internet',
            url: 'https://securitycheckli.st/about',
          },
        }}
      />

      <SectionHeading>
        <Heading>About</Heading>

        <div style={{ padding: '8px' }} />

        <Subheading>
          This website provides a beginner’s checklist for staying safe on the
          internet. This website is the result of a conversation started during
          a{' '}
          <a
            href="https://spec.fm/podcasts/design-details/249464"
            target="_blank"
            rel="noreferrer noopener"
          >
            recent episode
          </a>{' '}
          of the{' '}
          <a
            href="https://spec.fm/podcasts/design-details/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Design Details Podcast
          </a>{' '}
          and a subsequent tweet by{' '}
          <a
            href="https://twitter.com/mknepprath/status/1083966912420372481"
            target="_blank"
            rel="noreferrer noopener"
          >
            Michael Knepprath
          </a>
          .
        </Subheading>

        <div style={{ padding: '8px' }} />

        <Subheading>
          The code that powers this website is{' '}
          <a
            href="https://github.com/brianlovin/security-checklist"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source
          </a>
          . Please contribute if you’d like to see additional resources added to
          this checklist.
        </Subheading>
      </SectionHeading>
    </Page>
  );
}
