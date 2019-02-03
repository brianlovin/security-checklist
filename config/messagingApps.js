export default {
  id: 'messagingApps',
  title: 'Use encrypted messaging apps when sharing sensitive information',
  description: `When sharing sensitive information over chat, you should be using a secure, end-to-end encrypted messaging service. End-to-end encryption ensures that only you and your intended recipient are able to view messages. Your messages will appear scrambled (and will be nearly-impossible to unscramble) to anyone else, including app developers and ISPs.
  `,
  apps: [
    {
      name: 'Signal',
      image: '/static/img/signal.jpg',
      url: 'https://www.signal.org/',
      sources: {
        windows: 'https://www.signal.org/download/',
        macos: 'https://www.signal.org/download/',
        ios:
          'https://itunes.apple.com/us/app/signal-private-messenger/id874139669?mt=8',
        android:
          'https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&referrer=utm_source%3DOWS%26utm_medium%3DWeb%26utm_campaign%3DNav',
        linux: 'https://www.signal.org/download/',
      },
    },
    {
      name: 'Wire',
      image: '/static/img/wire.jpg',
      url: 'https://wire.com/en/',
      sources: {
        windows: 'https://wire.com/en/download/',
        macos: 'https://wire.com/en/download/',
        ios:
          'https://itunes.apple.com/app/wire/id930944768?mt=8',
        android:
          'https://play.google.com/store/apps/details?id=com.wire',
        linux: 'https://wire.com/en/download/',
      },
    },
    {
      name: 'Threema',
      image: '/static/img/threema.jpg',
      url: 'https://threema.ch/en/',
      sources: {
        ios:
          'https://itunes.apple.com/de/app/threema/id578665578?mt=8&uo=4&at=10lJMu',
        android:
          'https://play.google.com/store/apps/details?id=ch.threema.app',
      },
    },
  ],
  resources: [
    {
      name: 'What is end-to-end encryption?',
      url: 'https://www.lifewire.com/what-is-end-to-end-encryption-4028873',
    },
    {
      name: 'Hacker lexicon: end-to-end encryption',
      url:
        'https://www.wired.com/2014/11/hacker-lexicon-end-to-end-encryption/',
    },
    {
      name: 'Encrypted messaging isn’t magic',
      url: 'https://www.wired.com/story/encrypted-messaging-isnt-magic/',
    },
    {
      name:
        'Secure Messaging Apps Comparison',
      url:
        'https://www.securemessagingapps.com/',
    },
    {
      name: 'Secure Messaging? More Like A Secure Mess.',
      url:
        'https://www.eff.org/deeplinks/2018/03/secure-messaging-more-secure-mess',
    },
  ],
};
