import React from 'react';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
      <div>

    
        <ul className="nav flex-column rtl nvb " style={{
          paddingTop:"10%"
        }}>
        <li className="nav-item" style={{
          marginBottom:"4%"
        }}>
          <NavLink className="nav-link " activeStyle={{
            background:"#34495e",
            color:"white",
            borderRadius:"10px"
          }} exact to="/" style={{
            color:"#273c75"
          }}> صفحه اصلی</NavLink>
        </li>
        <li className="nav-item" style={{
          marginBottom:"4%"
        }}>
          <NavLink className="nav-link" to="/search"  activeStyle={{
            background:"#34495e",
            color:"white",
            borderRadius:"10px"
          }} exact  style={{
            color:"#273c75"
          }}>جستجوی کشور ها</NavLink>
       
        </li>
        <li className="nav-item" style={{
          marginBottom:"4%"
        }}>
          <NavLink className="nav-link" to="/stats"  activeStyle={{
            background:"#34495e",
            color:"white",
            borderRadius:"10px"
          }} exact  style={{
            color:"#273c75"
          }}>
            آمار کشور ایران
          </NavLink>
        </li>
        <li className="nav-item" style={{
          marginBottom:"3%"
        }}>
        <NavLink className="nav-link" to="/world"  activeStyle={{
            background:"#34495e",
            color:"white",
            borderRadius:"10px"
          }} exact  style={{
            color:"#273c75"
          }}>آمار جهان</NavLink>
        </li>
        <li className="nav-item" style={{
          marginBottom:"3%"
        }}>
        <NavLink className="nav-link" to="/worldTable"  activeStyle={{
            background:"#34495e",
            color:"white",
            borderRadius:"10px"
          }} exact  style={{
            color:"#273c75"
          }}>جدول کشور ها</NavLink>
        </li>
        <li className="nav-item" style={{
          marginBottom:"4%"
        }}>
              <li className="nav-item" style={{
          marginBottom:"3%"
        }}>
        <NavLink className="nav-link" to="/weather"  activeStyle={{
            background:"#34495e",
            color:"white",
            borderRadius:"10px"
          }} exact  style={{
            color:"#273c75"
          }}>  آب و هوا</NavLink>
        </li>
        <li className="nav-item" style={{
          marginBottom:"3%"
        }}>
        <NavLink className="nav-link" to="/airquality"  activeStyle={{
            background:"#34495e",
            color:"white",
            borderRadius:"10px"
          }} exact  style={{
            color:"#273c75"
          }}>  کیفیت هوا</NavLink>
        </li>
        <li className="nav-item" style={{
          marginBottom:"3%"
        }}>
        <NavLink className="nav-link" to="/vaccine"  activeStyle={{
            background:"#34495e",
            color:"white",
            borderRadius:"10px"
          }} exact  style={{
            color:"#273c75"
          }}>  
           از واکسن چه خبر؟!
          </NavLink>
        </li>
        <li className="nav-item mapli" style={{
          marginBottom:"3%"
        }}>
        <NavLink className="nav-link" to="/virusMap"  activeStyle={{
            background:"#34495e",
            color:"white",
            borderRadius:"10px"
          }} exact  style={{
            color:"#273c75"
          }}>                                     
          
         نقشه گستردگی ویروس 
         <span className="badge badge-danger mapbadge1">
           جدید
         </span>
          </NavLink>
        </li>
   
          <NavLink className="nav-link" to="/virus"  activeStyle={{
            background:"#34495e",
            color:"white",
            borderRadius:"10px"
          }} exact  style={{
            color:"#273c75"
          }}>
            چیز هایی که باید بدانیم
          </NavLink>
        </li>
        
       
      </ul>
      </div>
    );
}

export default NavBar;