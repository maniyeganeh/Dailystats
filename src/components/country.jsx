import React from 'react';

const Country = ({country}) => {

    
    return ( 
        <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-7">

            <h1 className="cntr">
                کشور : <span>
                    ایران
            </span>
            
       
                
        
            </h1>
        </div>
  
        <div className="col-xs-6 col-sm-6 col-md-5 date">
            <h3>
                آخرین به روزرسانی : <span>{new Date(country.updated).toDateString()}</span>
            </h3>

        </div>
    </div>
     );
}
 
export default Country;