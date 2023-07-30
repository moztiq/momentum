const API_KEY = '7e5156affa3eef415041b74ce791d047'
function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather div:first-child")
    const city = document.querySelector("#weather div:last-child")
    weather.innerText = `${data.weather[0].main} ${(data.main.temp).toFixed(1)}°C`
    city.innerText = data.name
  })
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

