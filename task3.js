let weeklyArray = ["Mon", "Wed", "Fri"];

let mon_start_time = 10;
let tue_start_time = 9;
let wed_start_time = 11;
let thu_start_time = 25;
let fri_start_time = 14;
let sat_start_time = 16;
let sun_start_time = 50;

let createObject = {
  mon_start_time: 10,
  tue_start_time: 9,
  wed_start_time: 11,
  thu_start_time: 25,
  fri_start_time: 14,
  sat_start_time: 16,
  sun_start_time: 50,
};

let a = weeklyArray.map((p) => {
  for (var i = 0; i < Object.keys(createObject).length; i++) {
    {
      if (p.toLowerCase() == Object.keys(createObject)[i].slice(0, 3)) {
        return { name: p, start_time: Object.values(createObject)[i] };
      }
    }
  }
});
console.log(a);
