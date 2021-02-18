import React , {useState} from 'react';
import CountUp from 'react-countup';
import Fade from 'react-reveal';
import CountryChart from "./countryChart";
const Result = ({results}) => {
    const [showStats, setShowStats] = useState(false);
    const handleShowStats = () => {
        setShowStats(!showStats)
    }
    return (
    <div>
    <div className="container">
        <h1 className="cntr">
            کشور : <span className="eng font" style={{
                fontFamily:"Roboto Slab",
                marginRight:"2%",
                textDecoration:"underline"
            }}>
                {results.country}
            </span>

        </h1>
        <Fade bottom>
            <div className="row rtl text-center">

                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className={results.todayCases > 3000 ? "card newCase1" : "card newCase"}>
                        <div className="card-body">
                            <h4 className="card-title">
                                <span className={results.todayCases > 3000 ? "fa fa-exclamation-triangle" : null} style={{
                                    marginLeft: "2%"
                                }} />

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
        </div>
        {showStats ? <CountryChart resultsCases={results.cases} resultsRecover={results.recovered} resultsDeaths={results.deaths} resultsCrit={results.critical}/>
:null}
        </div>
        );
}
 
export default Result;