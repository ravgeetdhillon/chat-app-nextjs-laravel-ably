import Echo from 'laravel-echo';
import '../styles/globals.scss';

if (typeof window !== 'undefined') {
  window.Pusher = require('pusher-js');
  window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.NEXT_PUBLIC_MIX_ABLY_PUBLIC_KEY,
    wsHost: 'realtime-pusher.ably.io',
    wsPort: 443,
    disableStats: true,
    encrypted: true,
  });
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
