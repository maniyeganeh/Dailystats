import React, {useState} from 'react';
import {Fade} from 'react-reveal';
const Locate = ({ locate }) => {
    const [showDetail, setShowDetail] = useState(false)

    const showItem = () => {
        setShowDetail(!showDetail)
    }
    return (

        <div >
            {(typeof locate.main != "undefined") ?
                <div className="locateBox">
                    <>
                   
                        <h1>
                            {locate.name} -
                            <span className='reg'>
                                {locate.sys.country}
                            </span>


                        </h1>
                        <div className={((Math.round(locate.main.temp) > 28 ? "weather-box warm" : "weather-box temp"))}>
                    {Math.round(locate.main.temp)}°c <span className={((Math.round(locate.main.temp > 17) ? "fa fa-thermometer-full" : "fa fa-thermometer-empty"))}></span>
                </div>
                <div className="weather1">
                    {/* {weather.weather[0].main} <span className={((weather.weather[0].main === "Rain" || weather.weather[0].main === "Clouds") ? "fa fa-cloud" : "fa fa-sun-o")


                    }></span> */}
                    {locate.weather[0].main}
                    <br/>
                    <div className="imgDisc">
                    <img src={`https://openweathermap.org/img/wn/${locate.weather[0].icon}@2x.png`} alt={locate.weather[0].description}/>

                    </div>
                    

                </div>
                <button type="button" className={showDetail ? "dtl btn btn-lg btn-default" : "dtl btn btn-lg btn-dark"} onClick={showItem} >نمایش بیشتر <span className={showDetail ? "fa fa-chevron-up" : "fa fa-chevron-down"}></span></button>
                {showDetail ?
                    <Fade>
                    <div className="detail">
                    <div className="weather-disc">
                        Weather Discription : {locate.weather[0].description}
                    </div>
                    <div className="feels wind-speed">
                        Feels Like : {Math.round(locate.main.feels_like)}°c
                            </div>
                    <div className="wind-speed">
                        Wind Speed : {locate.wind.speed}Km
                        </div>
                    <div className="humidity wind-speed">
                        Humidity: {locate.main.humidity}%
                        </div>

                </div>
    
                </Fade>  : null}
                    
                    </>
                        



                </div>

                : null}
        </div>
    );
}

export default Locate;