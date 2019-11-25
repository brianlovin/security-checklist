import * as React from 'react'
import App from 'next/app';
import Fathom from 'fathom-client'
import Router from 'next/router'
import Providers from '../components/Providers';

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview()
})

function FathomWrapper(props) {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load();
      Fathom.setSiteId('ESMHTGZE');
      Fathom.trackPageview();
    }
  }, [])
  return <div {...props} />
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <FathomWrapper>
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </FathomWrapper>
    );
  }
}

export default MyApp;