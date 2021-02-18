import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Default from './components/default';
import LandingPage from './components/landing';
import NavBar from './components/navbar';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import { CovidProvider } from './context/covidContext';
import Search from './components/search';
import World from "./components/world";
import { ToastContainer } from 'react-toastify';
import Virus from './components/virus';
import Footer from './components/Footer';
import About from './components/about';
import WorldTable from './components/WorldTable';
import Weather from './components/Weather';
import AirQuality from './components/AirQuality';
import ReactGa from "react-ga";
// import MapVirus from "./components/VirusMap";
import Vaccine from './components/Vaccine';
import Count from './components/Count';
import VirusMap from './components/VirusMap';




const App = () => {
  
  useEffect(() => {
  
   ReactGa.initialize("UA-152054343-2")
   ReactGa.pageview('/');
   
   
  
  }, [])
  const h = new Date();
  let darkmode = [];
  if(h.getHours() > 17 || h.getHours() < 8) darkmode.push("dark")
 
  return (
    <CovidProvider>
      <Helmet>
        <title>
          ویروس کرونا
        </title>
      </Helmet>
      <Header />
      <div className="container-fluid rtl">

        <div className="row">

          <div className="col-xs-2 col-sm-2 col-md-2 nvbar" style={{
            height:"auto",
            paddingBottom:"200px"
          }}>

            <NavBar />
          </div>
          <div className={`col-xs-10 col-sm-10 col-md-10 ${darkmode.join(' ')}`}>
        
            <Switch>
              <Route path="/stats" component={Default} />
              <Route path="/search" component={Search} />
              <Route path="/world" component={World} />
              <Route path="/virus" component={Virus} />
              <Route path="/about" component={About} />
              <Route path="/worldTable" component={WorldTable} />
              <Route path="/weather" component={Weather}/>
              <Route path="/airquality" component={AirQuality}/>
              <Route path="/virusMap" component={VirusMap}/>
              
              <Route path="/vaccine" component={Vaccine}/>
              <Route path="/count" component={Count}/>
              <Route path="/" exact component={LandingPage}/>
            </Switch>
          </div>
        </div>
     
 
        <Footer />
      </div>

      <ToastContainer />
    </CovidProvider>
  );
}

export default App;

