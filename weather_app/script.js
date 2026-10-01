const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchButton");

const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const errorMessage = document.querySelector("#errorMessage");


// Search weather when button is clicked
searchButton.addEventListener("click", getWeather);


// Search when Enter is pressed
cityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});


async function getWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    errorMessage.textContent = "Loading...";

    try {

        // Find the city
        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=10&language=en&format=json`
        );

        if (!locationResponse.ok) {
            throw new Error("Unable to find city.");
        }

        const locationData = await locationResponse.json();

        if (!locationData.results || locationData.results.length === 0) {
            throw new Error("City not found.");
        }

        // Prefer an Indian location when available
        const indianLocation = locationData.results.find(
            location => location.country_code === "IN"
        );

        const location = indianLocation || locationData.results[0];


        // Get weather information
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`
        );

        if (!weatherResponse.ok) {
            throw new Error("Unable to get weather data.");
        }

        const weatherData = await weatherResponse.json();

        const current = weatherData.current;


        // Display weather
        cityName.textContent =
            `${location.name}, ${location.country}`;

        temperature.textContent =
            `${current.temperature_2m}°C`;

        description.textContent =
            getWeatherDescription(current.weather_code);

        humidity.textContent =
            `Humidity: ${current.relative_humidity_2m}%`;

        wind.textContent =
            `Wind Speed: ${current.wind_speed_10m} km/h`;

        errorMessage.textContent = "";

    } catch (error) {

        console.error(error);

        errorMessage.textContent =
            "Unable to get weather information. Please try again.";
    }
}


// Convert weather code into a description
function getWeatherDescription(code) {

    const weatherDescriptions = {
        0: "Clear Sky",
        1: "Mainly Clear",
        2: "Partly Cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Foggy",
        51: "Light Drizzle",
        53: "Drizzle",
        55: "Heavy Drizzle",
        61: "Light Rain",
        63: "Rain",
        65: "Heavy Rain",
        71: "Light Snow",
        73: "Snow",
        75: "Heavy Snow",
        80: "Rain Showers",
        81: "Rain Showers",
        82: "Heavy Rain Showers",
        95: "Thunderstorm"
    };

    return weatherDescriptions[code] || "Unknown Weather";
}