export default {
  id: 'vpn',
  title: 'Use a VPN',
  description: `A VPN, or virtual private network, is a useful tool to secure an internet connection. It guarantees that data you are sending and receiving is encrypted, preventing people from snooping on your traffic.

  \n\nYou should use a VPN provider that you trust to not harvest and re-sell your data. The best VPNs often charge a monthly subscription - this is a good thing because it means their business model is not reliant upon reselling your data to advertisers.
    `,
  apps: [
    {
      name: 'IVPN',
      image: '/static/img/ivpn.jpg',
      url: 'https://www.ivpn.net/',
      sources: {
        windows: 'https://www.ivpn.net/apps-windows',
        macos: 'https://www.ivpn.net/apps-macos',
        ios: 'https://www.ivpn.net/apps-ios',
        android: 'https://www.ivpn.net/apps-android',
        linux: 'https://www.ivpn.net/setup/gnu-linux-terminal.html',
      },
    },
    {
      name: 'Encrypt.me',
      image: '/static/img/encrypt-me.jpg',
      url: 'https://encrypt.me/',
      sources: {
        windows: 'https://app.encrypt.me/transition/download/windows/latest/',
        macos: 'https://app.encrypt.me/transition/download/osx/latest/',
        ios: 'https://itunes.apple.com/us/app/encrypt-me/id473835722?ls=1&mt=8',
        android:
          'https://play.google.com/store/apps/details?id=com.stackpath.cloak',
      },
    },
    {
      name: 'ExpressVPN',
      image: '/static/img/expressvpn.jpg',
      url: 'https://www.expressvpn.com/',
      sources: {
        windows: 'https://www.expressvpn.com/vpn-software/vpn-windows',
        macos: 'https://www.expressvpn.com/vpn-software/vpn-mac',
        ios: 'https://www.expressvpn.com/vpn-software/vpn-ios',
        android: 'https://www.expressvpn.com/vpn-software/vpn-android',
        linux:
          'https://www.expressvpn.com/support/vpn-setup/manual-config-for-linux-with-openvpn/',
      },
    },
    {
      name: 'NordVPN',
      image: '/static/img/nordvpn.jpg',
      url: 'https://nordvpn.com/',
      sources: {
        windows: 'https://nordvpn.com/download/windows/',
        macos: 'https://nordvpn.com/download/mac/',
        ios: 'https://nordvpn.com/download/ios/',
        android: 'https://nordvpn.com/download/android/',
        linux: 'https://nordvpn.com/tutorials/linux/',
      },
    },
    {
      name: 'ProtonVPN',
      image: '/static/img/protonvpn.jpg',
      url: 'https://www.protonvpn.com/',
      sources: {
        windows: 'https://protonvpn.com/download/',
        macos: 'https://protonvpn.com/download/',
        ios:
          'https://itunes.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085',
        android:
          'https://play.google.com/store/apps/details?id=com.protonvpn.android',
        linux: 'https://protonvpn.com/download/#dl-clients',
      },
    },
  ],
  resources: [
    {
      name: 'Why you should be using a VPN',
      url:
        'https://lifehacker.com/5940565/why-you-should-start-using-a-vpn-and-how-to-choose-the-best-one-for-your-needs',
    },
    {
      name: 'What is a VPN and why you need one',
      url:
        'https://www.theverge.com/2018/4/1/17185732/cloudflare-dns-service-1-1-1-1',
    },
    {
      name: 'Why you should use a VPN on a public Wi-Fi network',
      url:
        'https://www.macworld.com/article/3322951/security/why-you-should-use-a-vpn-on-a-public-wi-fi-network.html',
    },
    {
      name: 'A detailed VPN provider comparison chart',
      url:
        'https://thatoneprivacysite.net/vpn-comparison-chart/',
    },
  ],
};
