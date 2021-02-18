import React, { useState, useContext } from 'react';
import CountUp from "react-countup";
import axios from 'axios';
import {Fade} from "react-reveal";

import Load from "../img/30.gif"
import { CovidContext, CovidProvider } from '../context/covidContext';
const QualityTable = () => {
    const [query , setQuery] = useContext(CovidContext);
    const [results, setResults] = useState({})
    const [loading , setLoading] = useState(false)

    const inputChange = event => {
        setQuery(event.target.value);
     

    }


    const searchBtn = async (event) => {
        setLoading(true)
        event.preventDefault();
        try {
            const { data } = await axios(`https://api.waqi.info/feed/${query}/?token=bf318efffb5af672330ab722637df3b9f07ab4de`);
            setResults(data);
            setQuery("")
            setLoading(false)
           

        } catch (ex) {
            console.log(ex);
            

        }
      
        
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

    
        <div>
            <Fade>
                <form onSubmit={searchBtn}>
                <div className="input-group mb-3 srcql">
                <input type="text" className="form-control" placeholder="جستجو..." value={query} onChange={inputChange} 
                  style={{
                    background:"none",
                    border:"none",
                    borderBottom:"1px solid black",
                    borderRadius:"0px"
                }}
                />
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" onClick={searchBtn}><i className="fa fa-search"></i></button>
                </div>
            </div>
                </form>
           
            </Fade>
        
            {results.status === "ok" ?
            <Fade>

            
                <div className="row m-auto qualyBox">
                    <div className="col-xs-12 col-sm-12 col-md-6 m-auto text-center">
                        <h1>
                            {results.data.city.name}
                        </h1>
                       
                        <h5 className="card-title">
                       شاخص کیفیت هوا
            :<span>                    <CountUp key={results.name} start={0} end={results.data.aqi} separator={","} />
                            </span>
                        </h5>
                        <p className={(results.data.aqi > 0 && results.data.aqi < 50) ? "card-text bg-success qualiwt" : null}>
                            {(results.data.aqi > 0 && results.data.aqi < 50) ? " سالم" : null}

                        </p>
                        <p className={(results.data.aqi >= 50 && results.data.aqi < 101) ? "card-text moderate qualiwt" : null}>
                            {(results.data.aqi >= 50 && results.data.aqi < 101) ? "قابل قبول" : null}

                        </p>
                        <p className={(results.data.aqi > 100 && results.data.aqi < 150) ? "card-text  unhlt qualiwt" : null}>
                            {(results.data.aqi > 100 && results.data.aqi < 150) ? " ناسالم برای افراد حساس" : null}

                        </p>
                        <p className={(results.data.aqi > 150 && results.data.aqi < 200) ? "card-text  dng qualiwt" : null}>
                            {(results.data.aqi > 150 && results.data.aqi < 200) ? " ناسالم برای تمامی افراد " : null}

                        </p>
                        <p className={(results.data.aqi > 200 && results.data.aqi < 300) ? "card-text  dng qualiwt" : null}>
                            {(results.data.aqi > 200 && results.data.aqi < 300) ? " بسیار ناسالم " : null}

                        </p>
                        <p className={(results.data.aqi > 300 && results.data.aqi < 500) ? "card-text dng qualiwt " : null}>
                            {(results.data.aqi > 300 && results.data.aqi < 500) ? "    خطرناک " : null}

                        </p>

                        <h4>
                            آلاینده : {results.data.dominentpol}
                        </h4>
                    </div>
                </div>
                </Fade>
                : null}


        </div>
        </CovidProvider>
    );
}

export default QualityTable;