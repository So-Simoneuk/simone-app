function refreshWeather(response)
{
    let temperatureElement = document.querySelector("#temperature"); 
    temperatureElement.innerHTML = response.data.temperature.current;
      console.log(response.data.temperature.current);
}
function searchCity(city)
{
    let apiKey = "14cfdda3fo2fca08bfa9c4f19a5dat70";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event)
{
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML =searchInput.value;
    searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);


    