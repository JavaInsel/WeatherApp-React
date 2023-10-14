// const clientLocalTime = new Date()
// const splittedLocalTime = (clientLocalTime.toString()).split(" ")
// const currentHourArray = splittedLocalTime[4].split(":")
// const currentHour = +(currentHourArray[0]) //+ is used to parse string to number

import React from "react"
import Weather from "./Weather"
import Error from "./Error"
const apiKey = "f7ffa778a53e9b302477b2aca06c6283"
const apiURL = "https://api.openweathermap.org/data/2.5/weather"

export default function Search(){
    const [city,SetCity] = React.useState("Jakarta")
    const [isClicked,setIsClicked] = React.useState(false)
    const [weatherData,setWeatherData] = React.useState({})
    const [displayOption,setDisplayOption] = React.useState("none")
    //console.log(city)

    function changeHandler(event){
        SetCity(event.target.value)
    }

    React.useEffect(()=>{
        //console.log(displayOption)
        fetch(apiURL + `?q=${city}&appid=${apiKey}&units=metric`)
            .then(response=>response.json())
            .then(data=>setWeatherData(data))
            .catch(error=>console.log(error))
    },[isClicked])

    

    function eventHandler(event){
        const {type,key} = event
        if(type == "keydown" && key=="Enter")
        {
            setIsClicked(prev=>!prev)
            
        }else if(type=="click"){
            setIsClicked(prev=>!prev)
        }
    }
    
    return(
        <div className="card">
            <div className="search">
                <input onKeyDown={eventHandler} 
                      type="text" 
                      id="search-text" 
                      placeholder="Enter Place"
                      onChange={changeHandler}
                      value={city}
                />
                <button onClick={eventHandler} value={city}><img src="./images/search.png" alt="search"/></button>
            </div>
            <Weather weather={weatherData}/>
            <Error display={displayOption}/>
        </div>
        
    
    )
}