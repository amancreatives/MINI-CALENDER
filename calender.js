const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year= document.querySelector("#year");

const current = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const allMonths = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]

date.innerHTML = (current.getDate()<10?"0":"") + current.getDate();
day.innerHTML = weekDays[current.getDay()];
month.innerHTML = allMonths[current.getMonth()];
year.innerHTML = current.getFullYear();