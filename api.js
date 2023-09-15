// const timeAPI = `https://timeapi.io/api/Time/current/coordinate?latitude=${lat}&longtitude=${lon}`
const weatherApiKey = "c8da7c759e9e857062359bc129bec925"



export async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`)
    const data = await response.json();
    return data;
}

export async function getLocationTime(city) {
    const response = await fetch(`https://api.api-ninjas.com/v1/worldtime?city=${city}`, { headers: { 'X-Api-Key': 'Yaw3NtySQHgGwM/YkJzpTQ==Cx7nRoVrCinWOgyu' }, })
    const data = await response.json();
    return data;
}

export async function getWeatherFromCoords(lat,lon){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`);
    const data = await response.json();
    return data;
}