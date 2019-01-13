export default {
  id: 'email',
  title: 'Use a privacy-first email provider',
  description: `You should use an email provider that doesn’t read your email or gather data about your conversations to target you with ads.
    `,
  apps: [
    {
      name: 'FastMail',
      image: '/static/img/fastmail.jpg',
      url: 'https://www.fastmail.com/',
      sources: {
        windows: 'https://www.fastmail.com/',
        macos: 'https://www.fastmail.com/',
        ios:
          'https://itunes.apple.com/us/app/fastmail-email-calendar/id931370077',
        android:
          'https://play.google.com/store/apps/details?id=com.fastmail.app',
      },
    },
    {
      name: 'ProtonMail',
      image: '/static/img/protonmail.jpg',
      url: 'https://protonmail.com//',
      sources: {
        windows: 'https://protonmail.com//',
        macos: 'https://protonmail.com//',
        ios:
          'https://itunes.apple.com/app/protonmail-encrypted-email/id979659905',
        android:
          'https://play.google.com/store/apps/details?id=ch.protonmail.android',
      },
    },
  ],
  resources: [
    {
      name: 'Gmail vs FastMail',
      url: 'https://hiverhq.com/blog/gmail-vs-fastmail-a-blunt-comparison/',
    },
    {
      name: 'Stop the paranoia: it doesn’t matter if Google reads our email',
      url: 'https://www.maxmasnick.com/2012/02/12/gmail_paranoia/',
    },
    {
      name: 'How Google is destroying privacy and collecting your data',
      url:
        'https://www.salon.com/2014/02/05/4_ways_google_is_destroying_privacy_and_collecting_your_data_partner/',
    },
  ],
};
