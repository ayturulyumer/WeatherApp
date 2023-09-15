import { getLocationTime } from "./api.js"

export async function setContainer(data) {
    const container = document.querySelector(".container")
    const weatherBox = document.querySelector(".weather-box")
    const weatherDetails = document.querySelector(".weather-details")
    const notFound = document.querySelector(".not-found")
    const location = document.querySelector("#location")



    notFound.style.display = "none"
    notFound.classList.remove("fade-in")

    const image = document.querySelector(".weather-box img")
    const temperature = document.querySelector(".weather-box .temperature")
    const description = document.querySelector(".weather-box .description")
    const humidity = document.querySelector(".weather-details .humidity span")
    const wind = document.querySelector(".weather-details .wind span")



    switch (data.weather[0].main) {
        case "Clear": image.src = "images/clear.png"; break;
        case "Clouds": image.src = "images/clouds.png"; break;
        case "Rain": image.src = "images/rain.png"; break;
        case "Snow": image.src = "images/snow.png"; break;
        case "Haze": image.src = "images/haze.png"; break;
    }

    temperature.innerHTML = `${parseInt(data.main.temp)}<span>C°</span>`;
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity} %`
    wind.innerHTML = `${parseInt(data.wind.speed)} Km/h`


    weatherBox.style.display = ""
    weatherDetails.style.display = ""
    weatherBox.classList.add("fade-in")
    weatherDetails.classList.add("fade-in")
    container.style.height = "500px"
}

export async function setCityTime(city) {
    const time = document.querySelector(".weather-box .time")
    const location = await getLocationTime(city)

    time.innerHTML = `${location.datetime} ${location.day_of_week}`
}

export function setError404(city) {
    const container = document.querySelector(".container")
    const weatherBox = document.querySelector(".weather-box")
    const weatherDetails = document.querySelector(".weather-details")
    const notFound = document.querySelector(".not-found")


    container.style.height = "500px";
    weatherBox.style.display = "none"
    weatherDetails.style.display = "none"
    notFound.style.display = "block"
    notFound.classList.add("fade-in")

    document.getElementById("404message").textContent = `Oops ! Looks like ${city} is still unexplored :(`
}
