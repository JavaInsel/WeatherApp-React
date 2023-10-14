import React from "react"
export default function Weather(props){
    const weatherData = props.weather
    //console.log(props)
    const[weatherIcon,setWeatherIcon] = React.useState("./images/mist.png")
    const[temp,setTemp] = React.useState("")
    const[city,setCity] = React.useState("")
    const[humidity,setHumidity] = React.useState("")
    const[windSpeed,setWindSpeed] = React.useState("")


   React.useEffect(()=>{
           if(Object.keys(props.weather).length!=0 && props.weather.cod!="404")
           {
                setCity(props.weather.name)
                setTemp(props.weather.main.temp)
                setWindSpeed(props.weather.wind.speed)
                setHumidity(props.weather.main.humidity)
                switch(props.weather.weather[0].main){
                    case "Clear":
                        setWeatherIcon("./images/clear.png")
                        break
                    case "Rain":
                        setWeatherIcon("./images/rain.png")
                        break
                    case "Drizzle":
                        setWeatherIcon("./images/drizzle.png")
                        break
                    case "Snow":
                        setWeatherIcon("./images/snow.png")
                        break
                    case "Clouds":
                        setWeatherIcon("./images/clouds.png")
                        break
                    case "Mist":
                        setWeatherIcon("./images/mist.png")
                        break
                }

           }if(props.weather.cod=="404")
           {
                alert("Invalid City")
                
           }
       },[weatherData])

    return(
        <div className="weather">
        <img src={weatherIcon} className="weather-icon" alt="weather images"/>
        <h1 className="temp">{temp}°C</h1>
        <h2 className="city">{city}</h2>
        <div className="details">
            <div className="col">
                <img src="./images/humidity.png" alt="humidity"/>
                <div>
                    <p className="humidity">{humidity}%</p>
                    <p>Humidity</p>
                </div>
            </div>
            <div className="col">
                <img src="./images/wind.png" alt="wind"/>
                <div>
                    <p className="wind">{windSpeed} km/h</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>
    )
}