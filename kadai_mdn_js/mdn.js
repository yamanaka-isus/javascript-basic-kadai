const event = new Date();
const year = event.getFullYear();
const month = event.getMonth();
const day = event.getDay();

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(event.toLocaleDateString(undefined, options));
// 期待される結果（地方時と既定のロケールによって変化）: 2012年12月20日木曜日
