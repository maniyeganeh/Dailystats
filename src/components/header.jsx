import React from 'react';
import { Link } from 'react-router-dom';

import AppDrawer from './AppDrawer';

const Header = () => {


  
    return (
        <div className="bg-light">

            <div className="row cov">
                <div className="col-md-10 bg-light text-center rtl mask">
                    <h1>
                        #ماسک_بزنیم
                   </h1>
                </div>
                <div className="col-md-2 rtl">
                    <div className="navbar navbar-light bg-light rtl">
                        <Link className="navbar-brand" to="/">
                            <img src={"../img/logo.png"} alt={"logo"} className="img-responsive" style={{
                                width: "85px",
                                height: "85px"
                            }} />
                        </Link>
                    </div>
                </div>
            </div>
        
             
                        <AppDrawer/>

              {/* <nav className="barr navbar bg-light navbar-light rtl">

                <Link className="navbar-brand" to="/">
                    <img src={"../img/logo.png"} alt={"logo"} className="img-responsive" style={{
                        width: "65px",
                        height: "65px"
                    }} />
                </Link>


                <button className="navbar-toggler" type="button" onClick={handleShowBar}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <CSSTransition 
                in={showBar}
                classNames="alert"
                timeout={2500}
                unmountOnExit
                onExited={false}
                onExit={()=> setShowBar(false)}
                >
                    <div className={!showBar ? "collapse navbar-collapse my-node-enter " : null} id="collapsibleNavbar">

                        <ul className="navbar-nav my-node-enter-active ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">صفحه اصلی</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">جستجو</Link>
                            </li>
                          
                            <li className="nav-item">
                                <Link className="nav-link" to="/world">آمار جهان</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/stats">آمار کشور ایران</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/worldTable"> جدول کشور ها</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/weather">   آب و هوا</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/airquality">   کیفیت هوا</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/virus">چیز هایی که باید بدانیم </Link>
                            </li>


                        </ul>


                    </div>
                </CSSTransition> 

            </nav>   */}
        </div>
    )
}
export default Header;