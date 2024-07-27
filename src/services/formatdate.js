export function toTimestamp(date) {
  const value = Math.floor(date.getTime() / 1000);
  console.log(value);
  return value;
}

export function fromTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  return format(date);
}

export function format(date) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeZone: "Asia/Kolkata",
  }).format(date);
}
