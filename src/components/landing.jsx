import React from 'react';
import { Link } from "react-router-dom";
import { Zoom, Fade } from 'react-reveal';
import Scale from "../img/scale.png"
import Table from '../img/table.png'
import Weather from "../img/weather.png"
import Polution from "../img/plution.png"

const LandingPage = () => {
    return (
        <div>
            <Fade>


                <div className="row d-md-none flex" >
                    <Link to="/stats">
                        <div className="box vrc">
                            <div className="boxImg">
                                <img src={Scale} alt="box" className="img-fluid" />
                                <p>
                                    آمار کشور ایران
                    </p>
                            </div>

                        </div>
                    </Link>
                    <Link to="worldTable">


                        <div className="box vstb ">
                            <div className="boxImg">
                                <img src={Table} alt="box" className="img-fluid" />
                                <p>
                                    جدول کشور ها
                    </p>
                            </div>
                        </div>
                    </Link>


                </div>
                <div className="row flex2 mapsec">
                    
                    <Link to="/virusMap">
                    <span className="badge badge-danger mapbadge">
                                    جدید
                                </span>
                        
                    <div className="know1">
                                
                        <h5>
                                   نقشه گستردگی ویروس
                                   
                        </h5>
                        
                        </div>
                    </Link>
                   
                </div>
                <div className="row d-md-none flex" >
                    <Link to="/weather">


                        <div className="box qualy">
                            <div className="boxImg">
                                <img src={Weather} alt="box" className="img-fluid" />
                                <p style={{
                                    color: "white"
                                }}>
                                    آب و هوا
                    </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/airquality">
                        <div className="box weather">
                            <div className="boxImg">
                                <img src={Polution} alt="box" className="img-fluid" />
                                <p>
                                    کیفیت هوا
                    </p>
                            </div>
                        </div>
                    </Link>


                </div>
                <div className="row flex1">
                    <Link to="/vaccine" onClick={() => {
                        window.scrollTo({top:0 , behavior:"smooth"})
                    }}>
                    <div className="know vaccsec">
                    
                        <h5>
                        از واکسن چه خبر؟!
                               
                        </h5>
                        </div>
                    </Link>
                   
                </div>
                <div className="row flex1">
                    <Link to="/virus" onClick={() => {
                        window.scrollTo({top:0 , behavior:"smooth"})
                    }}>
                    <div className="know">
            
                        <h5>
                                چیزهایی که باید بدانیم
                               
                        </h5>
                        </div>
                    </Link>
                   
                </div>
           
        
            </Fade>
            <Zoom>


                <div className="d-xs-none landing jumbotron rtl">
                    <h1 style={{
                        marginBottom: "4%"
                    }}>
                        آمار به روز مبتلایان به ویروس کرونا
                </h1>
                    <Link className="btn btn-info" to="/stats">نمایش آمار</Link>
                    <Link className="btn btn-success" to="/virus" style={{
                        marginRight: "2%",

                    }}>  
                    
                    چیز هایی که باید بدانیم
</Link>
                </div>
               
            </Zoom>


        </div>

    );
}

export default LandingPage;