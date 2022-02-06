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
    <div className={`d-flex mb-3 ${message.isOwner ? 'justify-content-end pe-3' : ''}`}>
      <div className="bg-dark text-white shadow-sm rounded py-2 px-3 w-fit-content w-messagebox">
        <p className="mb-0 text-primary small">
          <b>{message.user}</b>
        </p>
        <p className="mb-1">{message.message}</p>
        <p className="mb-0 text-muted small">{formatDate(message.createdAt)}</p>
      </div>
    </div>
  );
}
