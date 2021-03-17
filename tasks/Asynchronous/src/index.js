// eslint-disable-next-line import/extensions,no-unused-vars
import { renderWeather } from './weather-module.js'
// eslint-disable-next-line import/extensions,no-unused-vars
import { renderSearch } from './search-module.js'
import './style.css'

// eslint-disable-next-line no-unused-vars
function getWeather(event) {
  event.preventDefault()
  const inputCityValue = document.querySelector('.city').value
  const inputCountryValue = document.querySelector('.country').value
  if (inputCountryValue.length !== 0 || inputCityValue.length !== 0) {
    renderWeather(inputCountryValue, inputCityValue)
  } else {
    const form = document.querySelector('.form')
    form.innerHTML = '<h2 class="error">Error! Fill form, please</h2>'
  }
}

function initWeather() {
  renderSearch()

  const btnSubmit = document.querySelector('.form-btn-submit')
  btnSubmit.addEventListener('click', getWeather)
}

window.addEventListener('load', () => {
  initWeather()
})
