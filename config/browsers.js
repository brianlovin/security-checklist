export default {
  id: 'browsers',
  title: 'Use a privacy-first web browser',
  description: `You should use a web browser that protects you from tracking, fingerprinting, and unwanted advertisements.
    `,
  apps: [
    {
      name: 'Brave',
      image: '/static/img/brave.jpg',
      url: 'https://brave.com/',
      sources: {
        windows: 'https://laptop-updates.brave.com/latest/winx64',
        macos: 'https://laptop-updates.brave.com/latest/osx',
        ios:
          'https://geo.itunes.apple.com/us/app/brave-web-browser/id1052879175?mt=8',
        android:
          'https://play.google.com/store/apps/details?id=com.brave.browser&hl=en',
      },
    },
    {
      name: 'Firefox',
      image: '/static/img/firefox.jpg',
      url: 'https://www.mozilla.org/en-US/firefox/',
      sources: {
        windows: 'https://www.mozilla.org/en-US/firefox/',
        macos: 'https://www.mozilla.org/en-US/firefox/',
        ios: 'https://www.mozilla.org/en-US/firefox/mobile/',
        android: 'https://www.mozilla.org/en-US/firefox/mobile/',
      },
    },
    {
      name: 'Tor',
      image: '/static/img/tor.png',
      url: 'https://www.torproject.org/',
      sources: {
        windows:
          'https://www.torproject.org/projects/torbrowser.html.en#windows',
        macos: 'https://www.torproject.org/projects/torbrowser.html.en#macosx',
      },
    },
  ],
  resources: [
    {
      name: 'Don’t expect privacy from Chrome',
      url:
        'https://www.digitaltrends.com/computing/google-chrome-incognito-mode-tracking/',
    },
    {
      name: 'Google Chrome‘s users take a back seat to its bottom line',
      url:
        'https://www.eff.org/deeplinks/2018/11/google-chromes-users-take-back-seat-its-bottom-line',
    },
    {
      name: 'What data of mine does Chrome send to Google?',
      url:
        'https://lifehacker.com/5763452/what-data-does-chrome-send-to-google-about-me',
    },
    {
      name: 'Firefox multi-account containers',
      url:
        'https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/',
    },
  ],
};
