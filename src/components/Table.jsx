import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';

const Table = ({ results  }) => {

    const h = new Date();
    let bg = [];

    if (h.getHours() > 16 || h.getHours() < 8) {
        bg.push("table-dark")

    }
    // const getInfo = () => {
    //     const rowInfo = [...results];
    //     setInfo(rowInfo.find(country=>country.country))
    //     console.log(info);
      
    //     return(
    //         <div className="modal">
    //             <h1>
    //                 hello
    //             </h1>
    //         </div>
    //     )
        
    // }
   
   
    
    return (
        <div className="table-responsive rtl">
        

            <Fade>


                <table className={` table table-bordered  table-striped table-hover ${bg}`} style={{
                    transition: "linear 0.2s"
                }}>
                    <thead className={`thead-light`} >
                        <tr>
                  
                            <th scope="col" >
                                اسم کشور
                       </th>
                            <th scope="col">
                                تعداد مبتلایان جدید
                       </th>
                            <th scope="col">
                                آخرین آمار جانباختگان
                           </th>
                            <th scope="col">
                                بهبود یافتگان
                       </th>
                            <th scope="col">
                                تعداد کل مبتلایان
         
                       </th>
                            <th scope="col">
                                تعداد کل جانباختگان
                       </th>
                            <th scope="col">
                                بیماران در شرایط وخیم
                       </th>
                            <th scope="col">
                                روز
                       </th>
                            <th scope="col">
                                جمعیت کشور
                       </th>

                        </tr>
                    </thead>
                    <tbody className="td">

                        {results.map(result => (
                            <Fragment key={result.country}>
                                <tr> 
                               
                                    <td>
                                        {result.country}
                                    </td>
                                    <td>
                                        <CountUp key={result.country} separator={","} end={`${result.cases.new === null ? 0 :result.cases.new}`} duration={1} />
                                    </td>
                                    <td>
                                        {result.deaths.new === null ? 0 : result.deaths.new}
                                    </td>
                                    <td>
                                        <CountUp key={result.country} separator={","} end={`${result.cases.recovered}`} />
                                    </td>
                                    <td>
                                        <CountUp key={result.country} separator={","} end={`${result.cases.total}`} />

                                    </td>
                                    <td>
                                        <CountUp key={result.country} separator={","} end={`${result.deaths.total}`} />

                                    </td>
                                    <td>
                                        <CountUp key={result.country} separator={","} end={`${result.cases.critical}`} />

                                    </td>
                                    <td>
                                        {result.day}
                                    </td>
                                    <td>
                                        <CountUp key={result.country} separator={","} start={result.population} end={`${parseInt(result.population)}`} />

                                    </td>
                                </tr>

                            </Fragment>

                        ))}
                        {/* <tr> */}


                        {/* <td>
                            {result.country}
                        </td>
                        <td>
                           <CountUp key={result.country} separator={","} end= {result.cases.new} duration={1}/>
                        </td>
                        <td>
                            {result.deaths.new === null ? 0 : result.deaths.new}
                        </td>
                        <td>
                            <CountUp key={result.country} separator={","} end={result.cases.recovered}/>
                        </td>
                        <td>
                        <CountUp key={result.country} separator={","} end={result.cases.total}/>
                 
                        </td>
                        <td>
                        <CountUp key={result.country} separator={","} end={result.deaths.total}/>
                            
                        </td>
                        <td>
                            {result.day}
                        </td>
                        <td>
                        <CountUp key={result.country} separator={","} start={result.population} end={result.population}/>
                          
                        </td> */}
                        {/* </tr> */}
                    </tbody>
                </table>
            </Fade>
        </div>
    );
}

export default Table;