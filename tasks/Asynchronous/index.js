const btnSubmit = document.querySelector('.form-btn-submit')
const form = document.querySelector('.form')

function getWeather(event) {
  event.preventDefault()

  const inputCityValue = document.querySelector('.city').value
  const inputCountryValue = document.querySelector('.country').value
  if (inputCountryValue.length !== 0 || inputCityValue.length !== 0) {
    const pressure = document.querySelector('.pressure')
    const icon = document.querySelector('.weather-icon')
    const temperature = document.querySelector('.weather-temperature')
    const location = document.querySelector('.weather-location')
    const time = document.querySelector('.time')
    const wind = document.querySelector('.wind')
    const speed = document.querySelector('.speed')
    const feelsLike = document.querySelector('.feels-like')
    const todayIs = document.querySelector('.today-is')
    const weather = document.querySelector('.weather')
    weather.classList.remove('hidden')
    fetch(`http://api.weatherstack.com/current?access_key=6e374d0009571d83905cf6fa177b2f06&query=${inputCityValue}${inputCountryValue}`)
      .then((response) => response.json()).then((response) => {
        const apiResponse = response
        icon.style.background = `url(${apiResponse.current.weather_icons})`
        temperature.textContent = `${apiResponse.current.temperature}°C`
        location.textContent = `${apiResponse.location.name}, ${apiResponse.location.country}`
        time.textContent = `Time: ${apiResponse.current.observation_time}`
        wind.textContent = `${apiResponse.current.wind_dir}`
        speed.textContent = `Speed: ${apiResponse.current.wind_speed}km/h`
        feelsLike.textContent = `Feels like ${apiResponse.current.feelslike}°C`
        todayIs.textContent = `Today is ${apiResponse.current.weather_descriptions}`
        pressure.textContent = `Pressure: ${apiResponse.current.wind_degree}MB`
      }).catch(() => {
        console.log('Opps error')
      })
  } else {
    form.innerHTML = '<h2 class="error">Error! Fill form, please</h2>'
  }
}
btnSubmit.addEventListener('click', getWeather)
