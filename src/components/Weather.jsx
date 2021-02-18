import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Helmet from "react-helmet";
import { Slide, Fade } from 'react-reveal';
import { toast } from "react-toastify";
import Discription from './Discription';
import Load from "../img/30.gif"
import Locate from './Locate';




const whApi = {
    key: "5f46978a2651a041fc2c0c4b7356ef56",
    url: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {
    const [weather, setWeather] = useState({});
    const [locate, setLocate] = useState({});
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false)
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [search, setSearch] = useState(false)
    const [locationWh , setLocationWh] = useState(false)

    useEffect(() => {
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition((position) =>  {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                setLat(position.coords.latitude)
                setLon(position.coords.longitude)
               
              });
              
        }  else {
            console.log("Not Available");
        }
        
        



    }, [])



    const location = async () => {

        console.log(lon);
        setLocationWh(!locationWh)

        try {
            setLoading(true)
            const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=5f46978a2651a041fc2c0c4b7356ef56`)
            setLocate(data)


            setLoading(false)

        } catch (err) {
            console.log(err);
            setLoading(false)
            toast.error("مشکلی از سمت سرور پیش آمده است",{
                position:"top-right"
            })

        }












    }



    const searchWeather = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const { data } = await axios.get(`${whApi.url}weather?q=${query}&units=metric&APPID=${whApi.key}`);
            setWeather(data);



            setQuery("")
            setLoading(false)


        } catch (err) {
            console.log(err);
            setLoading(false);
            toast.error("اسم شهر اشتباه است", {
                position: "top-right"
            })
        }


    }



    const inputChaneg = (event) => {
        setQuery(event.target.value)
    }

    if (loading) {
        return (
            <div className="text-center load">


                <h2 className="loading">
                    لطفا منتظر بمانید...!
            </h2>

                <img src={Load} alt={"Load"} />
            </div>
        )
    }
    const handleShow = () => {
        setSearch(!search)
        setLocationWh(!locationWh)
        window.scrollTo({bottom : 0 , behavior:"smooth"})
    }

    return (
        <div>

            <Helmet>
                <title>
                    ویروس کرونا |  آب و هوا

            </title>

            </Helmet>
            <div className="row weather-row">
            {!search ?
                       
                       <div className="weather-boxs">
                       <button onClick={handleShow}>
                       جستجوی شهر مورد نظر
               </button>
                       </div>
                    
                :null}
    
                  
     
                {!locationWh ?
                <div className="weather-boxs">
                        <>
                <button className="btn btn-info" onClick={location}>مشاهده آب و هوای موقعیت شما</button>
                    
                </>
                </div>
                  : null}
                  {locationWh ? 
                  <Fade bottom>
                             <Locate locate={locate} weather={weather} />
                  </Fade>
                  :null}
                
            </div>
         
           
                
              
            {search ? <div className="weatherField" >
                <div className="row">

                    <Slide left>
                        <div className="col-xs-12 col-sm-12 col-md-10 m-auto">
                            <form onSubmit={searchWeather}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="جستجوی شهر" value={query} onChange={inputChaneg}
                                        style={{
                                            background: "none",

                                        }}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-success srcw" type="button" id="button-addon2" onClick={searchWeather}>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </Slide>
                </div>

                {(typeof weather.main != "undefined") ?
                    <div>



                        <Discription weather={weather} />

                    </div>

                    : null}


            </div> : null}

        </div>


    );
}

export default Weather;
