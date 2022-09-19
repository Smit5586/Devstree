const moment = require("moment");

let startTime = "8:30";
let endTime = "12:00";

let openTime = moment(startTime, "HH:mm");

let closeTime = moment(endTime, "HH:mm");

let openTime1 = moment(startTime, "HH:mm").add(30, "minutes");

let allTimes = [];

while (openTime < closeTime) {
  let Time1 = openTime.format("HH:mm") + "-" + openTime1.format("HH:mm");

  allTimes.push(Time1);
  openTime.add(30, "minutes");
  openTime1.add(30, "minutes");
}
console.log(allTimes);