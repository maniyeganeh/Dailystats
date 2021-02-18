import React, { useState, useEffect, useContext } from 'react';
import Helmet from 'react-helmet';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Slide} from 'react-reveal';
import { CovidContext, CovidProvider } from '../context/covidContext';
import Result from './result';


const Search = () => {
    const [results, setResults] = useContext(CovidContext);
    const [query , setQuery] = useState("");
    const [showItem, setShowItem] = useState(false);
  
    const [status , setStatus] = useState()
    useEffect(() => {
        toast.dark("به دلیل اسفاده از پایگاه داده انگلیسی لطفا اسامی کشور ها را به انگلیسی وارد کنید.", {
            position: "top-center"
        })
    }, [])
    const searchButton = () => {
        if (query !== "" && query !== " ") {
            const config = {
                method: 'get',
                url: `https://corona.lmao.ninja/v2/countries/${query}?yesterday&strict&query `,
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    setStatus(response.status);
                    setResults(response.data);
                    setQuery("")

                })
                .catch(function (error) {
                    console.log(error);
                    toast.error("لطفا اسامی کشورها را به انگلیسی وارد کنید.", {
                        position: "bottom-right"
                    })
                });
            setShowItem(!showItem)
        }

    }
  
   
    const searchPress = (e) => {
        if(e.key === "Enter"){
            if (query !== "" && query !== " ") {
                const config = {
                    method: 'get',
                    url: `https://corona.lmao.ninja/v2/countries/${query}?yesterday&strict&query `,
                    headers: {}
                };
    
                axios(config)
                    .then(function (response) {
                        setStatus(response.status);
                        setResults(response.data);
                      
                        
                        setQuery("")
    
                    })
                    .catch(function (error) {
                        console.log(error);
                        toast.error("لطفا اسامی کشورها را به انگلیسی وارد کنید.", {
                            position: "bottom-right"
                        })
                    });
                setShowItem(!showItem)
            }
            
        }
    }
    return (
        <CovidProvider>

       
        <div>
            <Helmet>
                <title>
                ویروس کرونا | جستجوی کشورها

                </title>
            </Helmet>
            <Slide left>

         
            <div className="col-xs-12 col-sm-12 col-md-10 m-auto">


                <div className="input-group mb-10 srch " >
                    <input type="text" className="form-control w-5" placeholder="جستجوی کشورها" value={query}
                        onChange={event => {
                            setQuery(event.target.value)
                            
                            
                        }}
                        onKeyPress={searchPress}
                        style={{
                            background:"none",
                            border:"none",
                            borderBottom:"1px solid black",
                            borderRadius:"0px"
                        }}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-success" type="submit" onClick={searchButton} onKeyPress={searchButton}>برو</button>
                    </div>
                </div>
            </div>
            </Slide>
            {status===200 ? <Result key={results.country} results={results}/> :null}
           
            {/* {showItem ? <div className="container">
                <h1 className="cntr">
                    کشور : <span className="eng">
                        {results.country}
                    </span>

                </h1>
                <Fade bottom>
                <div className="row rtl text-center">

                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className={results.todayCases > 3000 ? "card newCase1" : "card newCase"}>
                            <div className="card-body">
                                <h4 className="card-title">
                                <span className={ results.todayCases > 3000 ? "fa fa-exclamation-triangle" : null }style={{
                                    marginLeft:"2%"}}/>

                                    تعداد مبتلایان جدید
                            </h4>
                                <h5 className="card-text">
                                    <CountUp key={results} start={0} end={results.todayCases} duration={2.5} separator={","} />

                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card newDeath">
                            <div className="card-body">
                                <h4 className="card-title">
                                    آخرین آمار جانباختگان

                            </h4>
                                <h5 className="card-text">
                                    <CountUp key={results} start={0} end={results.todayDeaths} duration={2.5} separator={","} />


                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card newRecover">
                            <div className="card-body">
                                <h4 className="card-title">
                                    بهبود یافتگان
                            </h4>
                                <h5 className="card-text">
                                    <CountUp key={results} start={0} end={results.todayRecovered} duration={2.5} separator={","} />


                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade top>

              
                <div className="row rtl text-center" style={{
                    marginTop: "3%"
                }}>

                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card newCase">
                            <div className="card-body">
                                <h4 className="card-title">
                                    تعداد کل مبتلایان
                            </h4>
                                <h5 className="card-text">
                                    <CountUp key={results} start={0} end={results.cases} duration={2.5} separator={","} />


                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card newDeath">
                            <div className="card-body">
                                <h4 className="card-title">
                                    تعداد کل جانباختگان

                            </h4>
                                <h5 className="card-text">
                                    <CountUp key={results} start={0} end={results.deaths} duration={2.5} separator={","} />


                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card newRecover">
                            <div className="card-body">
                                <h4 className="card-title">
                                    تعداد کل بهبود یافتگان
                            </h4>
                                <h5 className="card-text">
                                    <CountUp key={results} start={0} end={results.recovered} duration={2.5} separator={","} />


                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
                <h6 className="text-center up">
                    {new Date(results.updated).toDateString()}
                </h6>
                <div className="text-center">
                    <button className="btn btn-warning btn-lg" onClick={handleShowStats}>نمایش نمودار</button>
                    </div>
                {showStats ? <CountryChart resultsCases={results.cases} resultsRecover={results.recovered} resultsDeaths={results.deaths} resultsCrit={results.critical} />
:null}

            </div> : null}
            */}
         
        </div>
        </CovidProvider>


    );
}

export default Search;