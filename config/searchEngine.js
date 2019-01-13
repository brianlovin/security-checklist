export default {
  id: 'searchEngine',
  title: 'Use a privacy-first search engine',
  description: `You should use a search engine that protects you from tracking, fingerprinting, and unwanted advertisements.
    `,
  apps: [
    {
      name: 'DuckDuckGo',
      image: '/static/img/duckduckgo.jpg',
      url: 'https://duckduckgo.com/',
      sources: {
        windows: 'https://duckduckgo.com',
        macos: 'https://duckduckgo.com',
        ios:
          'https://itunes.apple.com/us/app/duckduckgo-search-stories/id663592361?mt=8',
        android:
          'https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android',
      },
    },
  ],
  resources: [
    {
      name: 'DuckDuckGo Privacy',
      url: 'https://duckduckgo.com/privacy',
    },
    {
      name: 'Everything Google knows about you',
      url: 'https://myactivity.google.com/myactivity',
    },
  ],
};
