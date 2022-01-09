const hoursElement = document.getElementById("hour_hand");
const minutesElement = document.getElementById("minute_hand");
const secondsElement = document.getElementById("second_hand");

function animate() {
const date = new Date();

const hour = date.getHours() + date.getMinutes() / 60;
const minute = date.getMinutes() + date.getSeconds() / 60;
const seconds = date.getSeconds();

hoursElement.setAttribute("transform", `rotate(${(360/12)*hour})`);
minutesElement.setAttribute("transform", `rotate(${(360/60)*minute})`);
secondsElement.setAttribute("transform", `rotate(${(360/60)*seconds})`);

requestAnimationFrame(animate);
}

requestAnimationFrame(animate);