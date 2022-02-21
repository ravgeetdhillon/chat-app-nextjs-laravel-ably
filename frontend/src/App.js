import PublicMessagesPage from './components/PublicMessagesPage';
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.REACT_APP_MIX_ABLY_PUBLIC_KEY,
  wsHost: 'realtime-pusher.ably.io',
  wsPort: 443,
  disableStats: true,
  encrypted: true,
});

export default function App() {
  return <PublicMessagesPage />;
}
