export default {
  id: 'simPin',
  title: 'Set up a carrier SIM PIN',
  description: `SIM hijacking is a method where a hacker can socially engineer or bribe a mobile carrier to transfer your phone number to a SIM card the hacker owns.
  
  \n\nIf you use text messages as a two-factor authentication method, this gives hackers the ability to bypass 2FA and in most cases reset your passwords completely.
  
  \n\nYou should enable a carrier security PIN that is required before any SIM transfers can be processed.`,
  resources: [
    {
      name: 'SIM swap attacks and what you need to know',
      url: 'https://www.dailydot.com/debug/sim-swap-attacks/',
    },
    {
      name: 'SIM hijacking explained',
      url:
        'https://www.pandasecurity.com/mediacenter/security/sim-hijacking-explained/',
    },
    {
      name: 'Verizon FAQ',
      url: 'https://www.verizonwireless.com/support/account-pin-faqs/',
    },
    {
      name: 'AT&T FAQ',
      url: 'https://www.att.com/esupport/article.html#!/wireless/KM1049472',
    },
    {
      name: 'T-Mobile FAQ',
      url: 'https://support.t-mobile.com/docs/DOC-37477',
    },
  ],
};
