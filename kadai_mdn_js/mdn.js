const event = new Date(Date.UTC(2025, 8, 2, 3, 0, 0));
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(event.toLocaleDateString(undefined, options));