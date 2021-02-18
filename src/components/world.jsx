import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Helmet from "react-helmet";
import { worldConfig } from '../api';
import { toast } from 'react-toastify';
import Globe from '../img/globe.png';
import CountUp from 'react-countup';
import SingleChart from './singleChart';
import Fade from "react-reveal/Fade";
import Load from "../img/30.gif"


const World = () => {
    const [world, setWorld] = useState([]);
    const [showItem , setShowItem] = useState("");
    const [loading , setLoading] = useState(false)
    useEffect(() => {

const fetchData = async() => {
    setLoading(true);
  try{
    const response = await axios(worldConfig);
    setWorld(response.data);
    setLoading(false)
    
  }catch(ex){
      console.log(ex);
      toast.error("مشکلی از سمت سرور رخ داده است." ,{
        position:"top-right"
    })
    setLoading(true)
  }
}
fetchData();
        // axios(worldConfig)

        //     .then(function (response) {

        //         if (response.status === 200) {
        //             setWorld(response.data);
        //             console.log(response.data);

        //         }


        //     })
        //     .catch(function (error) {
        //         if (error.response.status === 404) {
        //             console.log(error);

        //         }
        //     });




    }, []);
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
        <div>
            <Helmet>
                <title>
                ویروس کرونا | آمار جهان

                </title>
            </Helmet>
         <Fade duration={2000}>

         
            <div className="row worldStats">
                <div className="col-xs-6 col-sm-6 col-md-7">

                    <h1 className="cntr">
                        <span className="globe">
                            <img src={Globe} alt={"globe"} />
                        </span>
                    </h1>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-5 date" style={{
                    marginTop: "2%"
                }}>
                    <h3>
                        آخرین به روزرسانی : <span>{new Date(world.updated).toDateString()}</span>
                    </h3>

                </div>
    
            </div>
            </Fade>
            <div className="container conetext">
                <Fade duration={2000}>
                <div className="row rtl text-center">

                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="card newCase">
                            <div className="card-body">
                                <h4 className="card-title">
                                    تعداد مبتلایان جدید
                            </h4>
                                <h5 className="card-text">


                                    <CountUp key={world} start={0} end={world.todayCases} separator={","} />

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
                                    <CountUp key={world} start={0} end={world.todayDeaths} separator={","} />



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
                                    <CountUp key={world} start={0} end={world.todayRecovered} separator={","} />



                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade duration={2000}>
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
                                    <CountUp key={world} start={0} end={world.cases} separator={","} />




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
                                    <CountUp key={world} start={0} end={world.deaths} separator={","} />



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
                                    <CountUp key={world} start={0} end={world.recovered} separator={","} />




                                </h5>
                            </div>

                        </div>
                    </div>
                </div>
                </Fade>
                <div className="text-center">
                    <button className="btn btn-warning btn-lg" onClick={handleShowItem}>نمایش نمودار</button>
                    </div>
                {showItem ? <SingleChart worldRecover={world.recovered} worldDeaths={world.deaths} worldCase={world.cases} wordlDate= {world.updated} wordlCritical = {world.critical}
                    /> :null}
                    
            </div>


        </div>
    );
}

export default World;