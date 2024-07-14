export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function formatDay(date: Date) {
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

export function isPastDate(activityDate: Date) {
  const today = new Date();
  return activityDate < today;
}
