export default function parseDate(date) {
  const isToday = new Date().getDate() === date.getDate();
  const isYesterday = new Date().getDate() - date.getDate() === 1;
  const properDate = isToday || isYesterday ? `${isToday ? 'Today' : 'Yesterday'} at ${date.getHours()}:${date.getMinutes()}` : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return properDate;
}