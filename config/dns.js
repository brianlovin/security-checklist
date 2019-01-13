export default {
  id: 'dns',
  title: 'Use 1.1.1.1 for DNS resolution',
  description: `DNS (Domain Name Servers) are the internet's equivalent of a phone book. They translate a name like 'google.com' into an IP address. By default, DNS is slow and insecure. Many internet service providers track and log data that flows through DNS, in some cases reselling this data to advertisers.

  \n\nCloudflare has released a privacy and performance-focused DNS tool that protects your internet traffic from internet service providers and people snooping on public Wi-Fi networks. 1.1.1.1 is faster than the average DNS service as well, making it faster to use the internet.
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
