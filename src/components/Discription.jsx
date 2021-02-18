import React, { useState } from 'react';

const Discription = ({ weather }) => {
    const [showDetail, setShowDetail] = useState(false)

    const showItem = () => {
        setShowDetail(!showDetail)
    }




    return (
        <div className="container text-center weatherBox">

            <h1>
                {weather.name} 
                <sup>
                {weather.sys.country}
                </sup>


            </h1>
           
       


                <div className={((Math.round(weather.main.temp) > 28 ? "weather-box warm" : "weather-box temp"))}>
                    {Math.round(weather.main.temp)}°c <span className={((Math.round(weather.main.temp > 17) ? "fa fa-thermometer-full" : "fa fa-thermometer-empty"))}></span>
                </div>
                <div className="weather1">
                    {/* {weather.weather[0].main} <span className={((weather.weather[0].main === "Rain" || weather.weather[0].main === "Clouds") ? "fa fa-cloud" : "fa fa-sun-o")


                    }></span> */}
                    {weather.weather[0].main}
                    <br/>
                    <div className="imgDisc">
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>

                    </div>

                </div>
                <button type="button" className={showDetail ? "dtl btn btn-lg btn-default" : "dtl btn btn-lg btn-dark"} onClick={showItem} >نمایش بیشتر <span className={showDetail ? "fa fa-chevron-up" : "fa fa-chevron-down"}></span></button>
                {showDetail ? <div className="detail">
                    <div className="weather-disc">
                        Weather Discription : {weather.weather[0].description}
                    </div>
                    <div className="feels wind-speed">
                        Feels Like : {Math.round(weather.main.feels_like)}°c
                            </div>
                    <div className="wind-speed">
                        Wind Speed : {weather.wind.speed}Km
                        </div>
                    <div className="humidity wind-speed">
                        Humidity: {weather.main.humidity}%
                        </div>

                </div>
    
                    : null}


        </div>
            );
      }
       
export default Discription;