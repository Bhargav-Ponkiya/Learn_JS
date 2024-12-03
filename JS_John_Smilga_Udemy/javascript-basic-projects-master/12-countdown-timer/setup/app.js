const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// select elements
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");

// get current date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDateValue = currentDate.getDate();

// add 10 days to current date (js will internally handle month, year when we will add 10 days)
const futureDate = new Date(
  currentYear,
  currentMonth,
  currentDateValue + 10,
  11,
  30,
  0
);

//const futureDate = new Date(2023, 8, 3, 10, 30, 0);

const futureYear = futureDate.getFullYear();
const futureMonth = months[futureDate.getMonth()];
const futureDateValue = futureDate.getDate();
const futureDay = weekdays[futureDate.getDay()];
const futureHours = futureDate.getHours();
const futureMin = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${futureDay}, ${futureDateValue} ${futureMonth} ${futureYear} ${futureHours}:${futureMin}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  // current time in ms
  const currentTime = new Date().getTime();

  const t = futureTime - currentTime;

  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d= 24h

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // calculate all values
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const mins = Math.floor((t % oneHour) / oneMin);
  const secs = Math.floor((t % oneMin) / 1000);

  // set values array:
  const values = [days, hours, mins, secs];

  function formatZero(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.textContent = formatZero(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

// set interval
const countdown = setInterval(getRemainingTime, 1000);

// invoke this so that we don't get 33 33 33 33 in starting 1 second
getRemainingTime();
