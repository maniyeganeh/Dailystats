import React from 'react';
import {Bounce} from 'react-reveal';
const About = () => {
    return (
        <div className="container-fluid text-center aboutMe">
            <div className="container">

            <Bounce top>

          
            <div className="abtt">
                <h1>
                    درباره سازنده
                </h1>
                <hr/>
                <h3>
                    سلام من ٫ <span>
                    مانی یگانه </span>  این وب اپلیکیشن رو برای دسترسی سریع به اطلاعات مربوط به این ویروس ساختم و اطلاعات رو جمع کردم.
                </h3>
                <h4>
                    اگه پیشنهادی داشتین ایمیل و شبکه های اجتماعی من این زیر در دسترس است.
                </h4>
                <hr/>
                <div className="icon">
                <a href="https://maniyeganeh.github.io/" rel="noopener noreferrer" className="btn btn-dark" target="_blank" style={{
                        marginLeft:"3%",
                        fontSize:"25px",
                       
                        padding:"5px 15px"
                    }}>
                        <i className="fa fa-github"></i>
                    </a>
                    <a href="mailto:yeganehmani@gmail.com" rel="noopener noreferrer" className="btn btn-dark" target="_blank" style={{
                        marginLeft:"3%",
                        backgroundColor:"#0c2452",
                        fontSize:"25px",
                       
                        padding:"5px 15px"
                    }}>
                        <i className="fa fa-envelope"></i>
                    </a>
                    <a href="https://www.instagram.com/maniyeganeh/" rel="noopener noreferrer" className="btn btn-dark" target="_blank" style={{
                        marginLeft:"3%",
                        backgroundColor:" #273c75",
                        fontSize:"25px",
                        
                        padding:"5px 15px"
                    }}>
                        <i className="fa fa-instagram" ></i>
                    </a>
                </div>
               
            </div>
            {/* <div className="card about">
                <h5 className="card-header">درباره سازنده</h5>
            
                <div className="card-body">
                    <h5 className="card-title mani" style={{
                        marginBottom:"10%"
                    }}>سازنده :<span>مانی یگانه</span></h5>
                 
                    <a href="https://maniyeganeh.github.io/" rel="noopener noreferrer" className="btn btn-dark" target="_blank" style={{
                        marginLeft:"3%"
                    }}>
                        <i className="fa fa-github"></i>
                    </a>
                    <a href="mailto:yeganehmani@gmail.com" rel="noopener noreferrer" className="btn btn-dark" target="_blank" style={{
                        marginLeft:"3%",
                        backgroundColor:"#0c2452"
                    }}>
                        <i className="fa fa-envelope"></i>
                    </a>
                    <a href="https://www.instagram.com/maniyeganeh/" rel="noopener noreferrer" className="btn btn-dark" target="_blank" style={{
                        marginLeft:"3%",
                        backgroundColor:" #405DE6"
                    }}>
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>
            </div> */}
              </Bounce>
        </div>
        </div>
    );
}

export default About;