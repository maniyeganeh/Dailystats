import React from 'react';

const Progress = () => {
    return ( 
        <div className="prog">
             <div className="alert alert-info">
                <h5>
                    <span className="fa fa-info-circle" style={{
                        marginLeft:"1%"
                    }}></span>
                    در لیست زیر واکسن هایی که در حال گذراندن فاز سوم آزمایش هستند قرار داده شدند.
                </h5>
                </div>
               <ul>
                   <li>
                   <p>
                    رنگ <span style={{
                        background:"#c0392b",
                        padding:"0px 10px",
                        color:"white",
                        borderRadius:"12px",
                        boxShadow: "0px 0px 5px grey",
                    }}>
                        قرمز
                   
                 </span>
                 {" "}
                 مرحله پیش بالینی را نشان می دهد
                </p>
                   </li>
                   <li>
                   <p>
                    رنگ 
                    {" "}
                    <span style={{
                        background:"#f39c12",
                        padding:"0px 10px",
                        color:"white",
                        borderRadius:"12px",
                        boxShadow: "0px 0px 5px grey",
                    }}>
                        نارنجی
                   
                 </span>
            {" "}
                 فاز اول این واکسن را نشان می دهد
                </p>
                   </li>
                   <li>
                   <p>
                    رنگ 
                    {" "}
                    <span 
                    style={{
                        background:"#f1c40f",
                       padding:"0px 12px",
                        color:"white",
                        marginLeft:"1%",
                        textAlign:"center",
                        borderRadius:"12px",
                        boxShadow: "0px 0px 5px grey",
                    }}
                    >
                   
                        زرد
                        {" "}
                 </span>

                 فاز دوم این واکسن را نشان می دهد
                </p>
                   </li>
                   <li>
                   <p>
                    رنگ
                    {" "}
                     <span 
                     style={{
                        background:"#2980b9",
                        padding:"0px 12px",
                        color:"white",
                        marginLeft:"1%",
                        borderRadius:"12px",
                        boxShadow: "0px 0px 5px grey",
                    }}
                     >
                     
                        آبی
                        {" "}
                 </span>
                 فاز سوم این واکسن را نشان می دهد
                </p>
                   </li>
                   <li>
                   <p>
                    قسمت هاشور خورده مرحله در حال انجام را نشان می دهد
                </p>
                   </li>
               </ul>
              
           
            
             
              

                <h4>
                    واکسن شرکت فایزر-بایونتک
                </h4>
                <div className="progress">
                    <div className="progress-bar phase1" role="progressbar" style={{
                        width:"25%"
                    }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <div className="progress-bar phase2" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                     <div className="progress-bar phase4" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar progress-bar-striped phase3" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4>
                    واکسن دانشگاه آکسفورد-آسترازنکا
                </h4>
                <div className="progress">
                    <div className="progress-bar phase1" role="progressbar" style={{
                        width:"25%"
                    }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar phase2" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                     <div className="progress-bar phase4" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar progress-bar-striped phase3" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4>
                    واکسن شرکت سینوفارم-موسسه مطالعات بیولوژی ووهان
                </h4>
                <div className="progress">
                    <div className="progress-bar phase1" role="progressbar" style={{
                        width:"25%"
                    }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar phase2" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                     <div className="progress-bar phase4" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar progress-bar-striped phase3" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4>
                    واکسن شرکت مدرنا
                </h4>
                <div className="progress">
                    <div className="progress-bar phase1" role="progressbar" style={{
                        width:"25%"
                    }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar phase2" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                     <div className="progress-bar phase4" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar progress-bar-striped phase3" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4>
                    واکسن نواواکس
                </h4>
                <div className="progress">
                    <div className="progress-bar phase1" role="progressbar" style={{
                        width:"25%"
                    }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar phase2" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                     <div className="progress-bar phase4" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar progress-bar-striped phase3" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h4>
                    واکسن موسسه تحقیقاتی گامالیا 
                </h4>
                <div className="progress">
                    <div className="progress-bar phase1" role="progressbar" style={{
                        width:"25%"
                    }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar phase2" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                     <div className="progress-bar phase4" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar progress-bar-striped phase3" role="progressbar" style={{
                        width: "25%"
                    }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
        </div>
     );
}
 
export default Progress;