const clock = document.querySelector("h2#clock")

function getClock() {
  const date = new Date();
  clock.innerHTML = `<i class="fa-regular fa-clock"></i> ${getZeroPadStart(2, date.getHours())}:${getZeroPadStart(2, date.getMinutes())}:${getZeroPadStart(2, date.getSeconds())}`
}

function getZeroPadStart(pad, num) {
  return num.toString().padStart(pad, '0')
}

getClock()
setInterval(getClock, 1000)
