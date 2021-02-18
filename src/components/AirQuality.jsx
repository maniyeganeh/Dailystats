import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import Helmet from "react-helmet";
import Load from "../img/30.gif"
import {Fade} from 'react-reveal';
import CountUp from 'react-countup';
import QualityTable from './QualityTable';
import { CovidContext, CovidProvider } from '../context/covidContext';

const AirQuality = () => {
   const [quality , setQuality] = useContext(CovidContext);
    const[showSearch , setShowSearch] = useState(false)
    const [loading , setLoading] = useState(false)
    const [lat , setLat] = useState();
    const [lon , setLon] = useState();
    useEffect(()=>{
       
        
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition((position) =>  {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                setLat(position.coords.latitude)
                setLon(position.coords.longitude)
               
              });
              
        } 
    
          
       
    const fetchData = async() => {
        setLoading(true)
        try{
            const {data} = await axios(`https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=eccf06f3-7a02-4984-b9f5-cc50e281f064`);
            setQuality(data.data.current.pollution);
            setLoading(false)
   
            
        }catch(err){
            console.log(err);
            setLoading(false);

        }
    }     
    fetchData()

  

    },[lon , lat , setQuality])
   
 
    const showSearchBtn = () => {
        setShowSearch(!showSearch);
        window.scrollTo({top:0 , behavior:"smooth"});
    }
    
    
    if(loading){
        return(
            <div className="text-center load">

       
            <h2 className="loading">
                لطفا منتظر بمانید...!
            </h2>
        
            <img src={Load} alt={"Load"}/>
            </div>
        )
    }
 
    
    return (
        <CovidProvider>
            <Helmet>
                <title>
                ویروس کرونا | کیفیت هوا
                </title>
            </Helmet>
    
        <div>
           {showSearch ? null :  <Fade duration={1000}>
            <div className="card text-center cardAir" style={{
                marginTop:"8%",
                marginBottom:"4%"
            }}>
                <div className="card-header">
                   شاخص کیفیت هوای نزدیک ترین ایستگاه ٫ هم اکنون
  </div>
                <div className="card-body">
                    <h5 className="card-title">
                    <CountUp key={quality.state} start={0} end={quality.aqicn} separator={","} />

                    </h5>
                    <p className={(quality.aqicn > 0 && quality.aqicn < 50) ? "card-text bg-success qualiwt" : null}>
                       {(quality.aqicn > 0 && quality.aqicn < 50) ? " سالم" : null}            

                    </p>
                    <p className={(quality.aqicn >= 50 && quality.aqicn < 101) ? "card-text moderate qualiwt" : null}>
                       {(quality.aqicn >= 50 && quality.aqicn < 101) ? "قابل قبول" : null}            

                    </p>
                    <p className={(quality.aqicn > 100 && quality.aqicn < 150) ? "card-text  unhlt qualiwt" : null}>
                       {(quality.aqicn > 100 && quality.aqicn < 150) ? " ناسالم برای افراد حساس" : null}            

                    </p>
                    <p className={(quality.aqicn > 150 && quality.aqicn < 200) ? "card-text  dng qualiwt" : null}>
                       {(quality.aqicn > 150 && quality.aqicn < 200) ? " ناسالم برای تمامی افراد " : null}            

                    </p>
                    <p className={(quality.aqicn > 200 && quality.aqicn < 300) ? "card-text  dng qualiwt" : null}>
                       {(quality.aqicn > 200 && quality.aqicn < 300) ? " بسیار ناسالم " : null}            

                    </p>
                    <p className={(quality.aqicn > 300 && quality.aqicn < 500) ? "card-text dng qualiwt " : null}>
                       {(quality.aqicn > 300 && quality.aqicn < 500) ? "    خطرناک " : null}            

                    </p>
                    
                </div>
                <div className="card-footer text-muted">
                   <span style={{
                       fontFamily:"IranYekanBold"
                   }}>
                   {" "} آخرین به روز رسانی : {" "}
                   </span>
                   {" "}
                    {new Date(quality.ts).toLocaleTimeString()}
                    {" "}
  </div>
  
            </div>
            </Fade>}
            <div className="text-center">
            <button type="button" className={showSearch ? "btn btn-lg btn-info srcbtn qualitysrc" : "btn btn-lg btn-info srcbtn"} onClick={showSearchBtn}>جستجو شهر ها</button>

            </div>
           {showSearch ? <QualityTable/> : null}
           <div className="text-center">
           <button type="button" className={showSearch ? "btn btn-secondary " : "btn btn-lg btn-secondary qualitysrc"} onClick={()=>{
               setShowSearch(false)
           }}>بازگشت</button>

           </div>
        </div>
        </CovidProvider>
        // <div>
        //    <div className="jumbotron qualy1">
        //        <div className="txt">
        //        <h1>
        //        <span role="img" aria-label="quality" style={{
        //            marginLeft:"2%"
        //        }}>
        //             🚧
        //         </span>
        //         در حال ساخت و سازیم
        //         <span role="img" aria-label="quality" style={{
        //             marginRight:"2%"
        //         }}>
        //             🚧
        //         </span>
        //        </h1>
        //        <h3>
        //            به زودی در دسترس قرار خواهد گرفت
        //        </h3>
        //        </div>

        //        </div> 
        // </div>
    );
}

export default AirQuality;