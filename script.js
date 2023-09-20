var curr_date = document.getElementById("date__container");
var full_date = document.getElementById("full__date");
var full_time = document.getElementById("full__time");

function updateClock() {
  const now = new Date();
  const dateString = now.toDateString();
  full_date.innerHTML = dateString;
  curr_date.innerHTML = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const hours12 = hours % 12 || 12;

  const timeString = `${hours12}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")} ${amPm}`;
  full_time.innerHTML = timeString;
}

// Call the function to update the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
