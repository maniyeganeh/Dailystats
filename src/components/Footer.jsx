import React from 'react';
import Home from "../img/home.png";
import {Link} from 'react-router-dom';

const Footer = () => {
const scrollToTop = () => {
  window.scrollTo({top:0 , behavior:"smooth"});
    
}


    return (    
        <div className="row bg-light ftt">
            <div className="col-xs-12 col-sm-12 col-md-6 foot">
                
                <h5>
                <span className="fa fa-copyright"></span>
                تمامی آمارها گرفته شده از<span className="api">NovelCOVID API</span> و تمامی اطلاعت از سایت رسمی سازمان بهداشت جهانی گرفته شده است.

                </h5>
                <Link to="/about" className="btn  btn-primary" onClick={scrollToTop}>درباره سازنده</Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 home">
                <div className="img">
                <img src={Home} alt={Home} className="img-fluid"/>

                </div>
            </div>

        </div>
     );
}
 
export default Footer;