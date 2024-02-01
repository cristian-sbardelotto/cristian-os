export function getCurrentTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const currentHour = hour < 10 ? `0${hour}` : hour;
  const currentMinute = minute < 10 ? `0${minute}` : minute;

  return `${currentHour}:${currentMinute}`;
}
