import React from 'react'
import './WeatherApp.css'

import Search from '../assets/search.png'
import Clear from '../assets/clear.png'
import Cloud from '../assets/cloud.png'
import Drizzle from '../assets/drizzle.png'
import Humidity from '../assets/humidity.png'
import Rain from '../assets/rain.png'
import Wind from '../assets/wind.png'
import Snow from '../assets/snow.png'
import { useState } from 'react'





export const WeatherApp = () => {

    const [Wicon, setWicon] = useState(Cloud);

    let api_key ="4851a5e4b0150130257611c0c5ecf053";
    const search = async () =>{
         const element= document.getElementsByClassName("cityInput")
            if(element[0].value===""){
                return 0;
            }

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`;

            let response = await fetch(url)
            let data = await response.json(); 
            const humidity = document.getElementsByClassName("humidity-percent")
            const wind = document.getElementsByClassName("wind-rate")
            const temprature = document.getElementsByClassName("weather-temp")
            const location = document.getElementsByClassName("weather-location")

            const humidityMath = data.main.temp;
            let humidityFlor = Math.round(humidityMath);

            humidity[0].innerHTML = data.main.humidity +" %";
            wind[0].innerHTML = data.wind.speed+" km";
            temprature[0].innerHTML = humidityFlor+" °c";
            location[0].innerHTML = data.name;
            
            
           

            if(data.weather[0].icon == "01d" || data.weather[0].icon == "01n"){
                Wicon = setWicon(Clear)
            }else if(data.weather[0].icon == "02d" || data.weather[0].icon == ("02n")){
                Wicon = setWicon(Cloud)
            }else if(data.weather[0].icon == "03d" || data.weather[0].icon == "03n"){
                Wicon = setWicon(Drizzle)
            }else if(data.weather[0].icon == "04d" || data.weather[0].icon == "04n"){
                Wicon = setWicon(Drizzle)
            }else if(data.weather[0].icon == "09d" || data.weather[0].icon == "09n"){
                Wicon = setWicon(Rain)
            }else if(data.weather[0].icon == "10d" || data.weather[0].icon == "10n"){
                Wicon = setWicon(Rain)
            }else if(data.weather[0].icon == "13d" || data.weather[0].icon == "13n"){
                Wicon = setWicon(Snow)
            }


            
    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search'/>
        <div className="SearchIcon" onClick={search()}>
            <img src={Search} alt="" />
        </div>
        </div>
        <div className="wheather-image">
            <img className="imgS" src={Wicon} alt="" />
        </div>
        <div className="weather-temp"> 24c </div>
        <div className="weather-location">bali</div>
        <div className="data-container">
            <div className="element">
                <img src={Humidity} alt="" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={Wind} alt="" />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}
