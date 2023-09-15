import {  getWeather, getWeatherFromCoords } from "./api.js"
import { setCityTime, setContainer, setError404 } from "./utils.js"



const container = document.querySelector(".container")
const search = document.querySelector("#search")
const weatherBox = document.querySelector(".weather-box")
const weatherDetails = document.querySelector(".weather-details")
const notFound = document.querySelector(".not-found")
const location = document.querySelector("#location")



search.addEventListener("click", searchHandler)
location.addEventListener("click", locationHandler)

async function searchHandler() {
    const city = document.querySelector(".search-box input")

    if (city.value === "") {
        alert("Please type the city you are searching for or click location button to see your current location")
        return;
    }
    if (!isNaN(+city.value) === true) {
        alert("Please type valid city !")
        city.value = ""
        return;
    }

    const data = await getWeather(city.value)

    

    if (data.cod === "404") {
        setError404(city.value)
        city.value = ""
        return;
    }
    setContainer(data)
    setCityTime(data.name)
};

async function locationHandler() {
    const successCallback = async (position) => {
        const data = await getWeatherFromCoords(position.coords.latitude, position.coords.longitude)
        setContainer(data)
        setCityTime(data.name)
        document.querySelector(".search-box input").value = `${data.name}`
    };

    const errorCallback = (error) => {
        throw new Error(`${error}`)
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}