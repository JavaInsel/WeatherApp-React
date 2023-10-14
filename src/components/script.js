const apiKey = "f7ffa778a53e9b302477b2aca06c6283"
const apiURL = "https://api.openweathermap.org/data/2.5/weather"
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const clientLocalTime = new Date()
const splittedLocalTime = (clientLocalTime.toString()).split(" ")
const currentHourArray = splittedLocalTime[4].split(":")
const currentHour = +(currentHourArray[0]) //+ is used to parse string to number

console.log(clientLocalTime)
console.log(splittedLocalTime[4])
console.log(currentHour)

searchBtn.addEventListener("click",()=>{
    getWeatherData(searchBox.value)
})

searchBox.addEventListener("keypress",(event)=>{
    if(event.key === "Enter")
    {
        getWeatherData(searchBox.value)
    }
})

checkTimeAndSetBackground(currentHour)



async function getWeatherData(city)
{
    city = document.getElementById("search-text").value
    const response = await fetch(apiURL + `?q=${city}&appid=${apiKey}&units=metric`)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json()
        console.log(data)
        var weatherIcon = data.weather[0].main
        setWeatherData(data)
        setWeatherIcon(weatherIcon)
        document.querySelector(".error").style.display = "none"
        document.querySelector(".weather").style.display = "block"
    }
  
    
}





function setWeatherData(weatherData)
{
    document.querySelector(".temp").innerHTML = (weatherData.main.temp).toFixed(1) + "°C"
    document.querySelector(".city").innerHTML = weatherData.name
    document.querySelector(".humidity").innerHTML = weatherData.main.humidity + "%"
    document.querySelector(".wind").innerHTML = weatherData.wind.speed + "km/h"
}

function setWeatherIcon(weather){
    if(weather === 'Clear')
    {
        document.querySelector(".weather-icon").src = "./images/clear.png"
    }else if(weather === 'Rain')
    {
        document.querySelector(".weather-icon").src = "./images/rain.png"
    }else if(weather === 'Drizzle')
    {
        document.querySelector(".weather-icon").src = "./images/drizzle.png"
    }else if(weather === 'Snow')
    {
        document.querySelector(".weather-icon").src = "./images/snow.png"
    }else if(weather === 'Clouds')
    {
        document.querySelector(".weather-icon").src = "./images/clouds.png"
    }else if(weather === 'Mist')
    {
        document.querySelector(".weather-icon").src = "./images/mist.png"
    }
}

function checkTimeAndSetBackground(time)
{
    if(time >= 18)
    {
        document.querySelector(".card").style.background = 
        "linear-gradient(135deg, #12100e, #2b4162)"
    }
}