import format from 'date-fns/format';

function formatTime(milliseconds) {
  const hours = Math.floor(milliseconds / 1000 / 3600);
  const minutesSeconds = format(milliseconds, 'mm:ss');
  return hours < 10 ? `0${hours}:${minutesSeconds}` : `${hours}:${minutesSeconds}`;
}

export default formatTime;
