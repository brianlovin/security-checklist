// @flow
import App from 'next/app';
import * as React from 'react';
import Head from 'next/head';
import * as Sentry from '@sentry/browser';
import { NextSeo } from 'next-seo';
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
      <>
        <GlobalStyles />

        <Head>
          <meta name="theme-color" content="#FFF" key="theme-color" />

          <meta
            name="description"
            content="A checklist for staying safe on the internet"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <link rel="mask-icon" href="/static/pinned-tab.svg" color="#FFF" />
          <meta name="msapplication-TileColor" content="#ffffff" />

          <script
            src="https://browser.sentry-cdn.com/4.2.4/bundle.min.js"
            crossOrigin="anonymous"
          />

          {this.props.styleTags}
        </Head>

        <NextSeo config={defaultSEO} />
        <Component {...pageProps} />
      </>
    );
  }
}

export default SecurityChecklistApp;
