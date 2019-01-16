export default {
  id: 'searchEngine',
  title: 'Use a privacy-first search engine',
  description: `You should use a search engine that protects you from tracking, fingerprinting, and unwanted advertisements. DuckDuckGo and Startpage.com are privacy-first search engines that do not store your search history, have strict location and personalization permissions, and DuckDuckGo publishes regular content teaching people how to be safer on the web.
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
        linux: 'https://duckduckgo.com',
      },
    },
    {
      name: 'Startpage.com',
      image: '/static/img/startpage.png',
      url: 'https://www.startpage.com/',
      sources: {
        windows: 'https://www.startpage.com/',
        macos: 'https://www.startpage.com/',
        ios:
          'https://www.startpage.com/en/search/download-startpage-plugin.html',
        android:
          'https://www.startpage.com/en/search/download-startpage-plugin.html',
        linux: 'https://www.startpage.com/',
      },
    },
  ],
  resources: [
    {
      name: 'DuckDuckGo Privacy',
      url: 'https://duckduckgo.com/privacy',
    },
    {
      name: 'About DuckDuckGo',
      url: 'https://duckduckgo.com/about',
    },
    {
      name: 'DuckDuckGo: No, we’re not using fingerprinting to track you',
      url:
        'https://techcrunch.com/2019/01/07/duckduckgo-browser-fingerprinting/',
    },
    {
      name: 'Startpage.com privacy policy',
      url: 'https://www.startpage.com/gb/search/privacy-policy.html',
    },
    {
      name: 'About Startpage.com',
      url: 'https://www.startpage.com/gb/about-us.html',
    },
    {
      name: 'Everything Google knows about you',
      url: 'https://myactivity.google.com/myactivity',
    },
  ],
};
