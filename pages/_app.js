// @flow
import App, { Container } from 'next/app';
import * as React from 'react';
import Head from 'next/head';
import * as Sentry from '@sentry/browser';
import NextSeo from 'next-seo';
import { GlobalStyles } from '../static/normalize';
import defaultSEO from '../config/next-seo.js';

const SENTRY_PUBLIC_DSN =
  'https://42334f0365364b63bc57f4245d111b87@sentry.io/1370339';

class SecurityChecklistApp extends App {
  constructor() {
    super();

    Sentry.init({ dsn: SENTRY_PUBLIC_DSN });
  }

  // $FlowFixMe
  componentDidCatch(error: mixed, errorInfo: any) {
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    Sentry.captureException(error);

    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  componentDidMount() {
    Sentry.init({
      dsn: 'https://b92b29b696884e5798e161962eac36de@sentry.io/1318151',
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyles />

        <Head>
          <meta name="theme-color" content="#16171A" key="theme-color" />
          <meta
            name="description"
            content="A checklist for staying safe on the internet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/meta/apple-touch-icon.png"
          />
          <link rel="manifest" href="/static/meta/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/meta/safari-pinned-tab.svg"
            color="#16171A"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />

          <script
            src="https://browser.sentry-cdn.com/4.2.4/bundle.min.js"
            crossOrigin="anonymous"
          />

          {this.props.styleTags}
        </Head>

        <NextSeo config={defaultSEO} />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default SecurityChecklistApp;
