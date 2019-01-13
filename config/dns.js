export default {
  id: 'dns',
  title: 'Use 1.1.1.1 for DNS resolution',
  description: `DNS (Domain Name Servers) are the internet's equivalent of a phone book. They translate a name like 'google.com' into an IP address. By default DNS is slow and insecure.

  \n\nCloudflare has released a privacy and performace-focused DNS tool that protects your internet traffif from prying eyes. It's faster than an average DNS service as well, making it faster to use the internet.
    `,
  apps: [
    {
      name: '1.1.1.1',
      image: '/static/img/1111.jpg',
      url: 'https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/',
      sources: {
        windows: 'https://1.1.1.1/',
        macos: 'https://1.1.1.1/',
        ios:
          'https://itunes.apple.com/app/1-1-1-1-faster-internet/id1423538627?mt=8',
        android:
          'https://play.google.com/store/apps/details?id=com.cloudflare.onedotonedotonedotone',
      },
    },
  ],
  resources: [
    {
      name: 'What is 1.1.1.1?',
      url: 'https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/',
    },
    {
      name:
        'Cloudflare launches 1.1.1.1 DNS service that will speed up your internet',
      url:
        'https://www.theverge.com/2018/4/1/17185732/cloudflare-dns-service-1-1-1-1',
    },
    {
      name: 'Cloudflare’s privacy-focused 1.1.1.1 is available on phones',
      url:
        'https://www.engadget.com/2018/11/11/cloudflare-1-1-1-1-privacy-service-on-phones/',
    },
  ],
};
