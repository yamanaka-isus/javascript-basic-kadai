const event = new Date();
const year = event.getFullYear();
const month = event.getMonth() + 1;
const day = event.getDate();

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(year + "年" + month + "月" + day + "日");
