import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function Messagebox({ message }) {
  const formatDate = (value, format = 'HH:mm') => {
    if (!value) return '';
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.extend(relativeTime);
    return dayjs(value).tz(dayjs.tz.guess()).format(format);
  };

  return (
    <div className="...">
      <div className="...">
        <p className="...">
          <b>{message.user}</b>
        </p>
        <p className="...">{message.message}</p>
        <p className="...">{formatDate(message.createdAt)}</p>
      </div>
    </div>
  );
}
