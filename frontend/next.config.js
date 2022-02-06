const path = require('path');

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MIX_ABLY_PUBLIC_KEY: process.env.MIX_ABLY_PUBLIC_KEY,
    NEXT_PUBLIC_API_BASE_URL:
      process.env.NODE_ENV === 'production' ? process.env.API_BASE_URL : 'http://localhost:8000/api',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
