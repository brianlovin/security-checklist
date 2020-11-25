module.exports = {
  target: 'serverless',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://brianlovin.com/security',
        permanent: true,
      },
      {
        source: '/about',
        destination: 'https://brianlovin.com/security',
        permanent: true,
      },
    ]
  },
};
