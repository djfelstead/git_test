let today = new Date();
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = today.getDay();
console.log("Today is " + daylist[day]);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
console.log("The time is " + hour + ":" + minute + ":" + second)