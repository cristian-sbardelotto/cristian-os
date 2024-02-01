export function getCurrentDate() {
  const date = new Date();
  const currentDate = date.toLocaleDateString('en-US');

  return currentDate;
}
