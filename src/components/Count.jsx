import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Count = () => {
    const [count , setCount] = useState(0)
    const handleCount = () => {
        setCount(count + 1)
        toast.success("Count Up :)" , {
            position:"top-right"
        })
    }
    const handleCountDown = () => {
        setCount(count - 1)
        toast.error("Count Down :( ", {
            position:'top-left'
        })
    }
    const style = {
        marginLeft:"2%",
        marginTop:"3%",
        color:"White",
        fontSize:"30px",
    
    }
    return (  
        <div className="col-xs-12 col-sm-12 col-md-12" style={{
            marginTop:"10%",
            backgroundColor:"#40739e",
            color:"whitesmoke",
            padding:"30px 20px",
            textAlign:"center",
            fontFamily:"Oswald",
            
        }}>
            <h1>
                Number : <span>
                    {count}
                </span>
            </h1>
            <button className="btn btn-outline-light" onClick={handleCount} style={style}> + </button>
            <button className="btn btn-outline-dark" onClick={handleCountDown} style={style}> - </button>
        </div>
    );
}
 
export default Count;