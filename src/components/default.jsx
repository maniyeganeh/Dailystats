import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Helmet from "react-helmet";
import CountUp from "react-countup";
import { CovidContext, CovidProvider } from "../context/covidContext";
import Country from './country';
import { config } from '../api';
import DefaultChart from './defaultChart';
import { Fade, Flip } from 'react-reveal';
import { toast } from 'react-toastify';
import Load from "../img/30.gif"
const Default = () => {
    const [country, setCountry] = useContext(CovidContext);
    const [showItem, setShowItem] = useState(false);
    const [loading , setLoading] = useState(false)


    useEffect(() => {


        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios(config);
                setCountry(response.data);
                setLoading(false);
            }catch(ex){
                console.log(ex);
                toast.error("مشکلی از سمت سرور رخ داده است." ,{
                    position:"top-right"
                })
                setLoading(true);
                
            }
            
        }
        fetchData();

        // axios(config)

        //     .then(function (response) {

        //         if (response.status === 200) {
        //             setCountry(response.data);
        //             console.log(response.data);





        //         }


        //     })
        //     .catch(function (error) {
        //         if (error.response.status === 404) {
        //             console.log(error);

        //         }
        //     });


        toast.dark("بخش نمودار به روز شد",{
            position:"top-right"
        })

    }, [setCountry]);
    const handleShowItem = () => {
        setShowItem(!showItem)
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
                    ویروس کرونا | آمار کشور ایران
    
                </title>
            </Helmet>
            <Fade top >
                <div className="container defaultct" style={{
                    marginTop: "3%"
                }}>
                    <Country country={country} />
                </div>
            </Fade>


            <div className="container conetext">
                <Flip top>
                    <div className="row rtl text-center">

                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className={(country.todayCases > 3000) ? "card newCase1" : "card newCase"}>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <span className={country.todayCases > 3000 ? "fa fa-exclamation-triangle" : null} style={{
                                            marginLeft: "3%"
                                        }}></span>
                                        تعداد مبتلایان جدید
                            </h4>
                                    <h5 className="card-text">

                                        <CountUp key={country} start={0} end={typeof todayCases != undefined ? country.todayCases : null} duration={2.5} separator={","} />

                                    </h5>
                                </div>
                            </div>
                        </div>




                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className={country.todayDeaths > 100 ? "card newDeath1" : "card newDeath"}>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        آخرین آمار جانباختگان

                            </h4>
                                    <h5 className="card-text">
                                        <CountUp key={country} start={0} end={country.todayDeaths} duration={2.5} separator={","} />





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
                                        <CountUp key={country} start={0} end={country.todayRecovered} duration={2.5} separator={","} />





                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Flip>
                <Flip bottom>


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
                                        <CountUp key={country} start={0} end={country.cases} duration={2.5} separator={","} />





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
                                        <CountUp key={country} start={0} end={country.deaths} duration={2.5} separator={","} />




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
                                        <CountUp key={country} start={0} end={country.recovered} duration={2.5} separator={","} />





                                    </h5>
                                </div>

                            </div>
                        </div>

                    </div>
                </Flip>
                <div className="text-center">
                    <button className="btn btn-warning btn-lg" onClick={handleShowItem}>نمایش نمودار</button>
                </div>
                {showItem ? <DefaultChart
                  
                /> : null}

            </div>





        </CovidProvider>
    );
}

export default Default;