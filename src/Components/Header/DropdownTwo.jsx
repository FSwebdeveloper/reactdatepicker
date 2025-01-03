import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
}

const DropdownTwo = () => {
  const [dropDown, setDropDown] = useState(true);
  const[link, setLink] = useState(false);
    
  return (
    <div>
      <ul>
        <li> <NavLink className={(e)=> {return e.isActive? "red" : "menu-text-icon"}} to="/" onClick={refreshPage}>Home</NavLink></li>
        <li className="menu-text-icon"><NavLink className={(e)=> {return e.isActive? "red" : "menu-text-icon"}} to="/about">About</NavLink></li>
        <li className="menu-text-icon"><NavLink className={(e)=> {return e.isActive? "red" : "menu-text-icon"}} to="/service">Service</NavLink></li>
        <li className="menu-text-icon" onClick={()=> setDropDown(!dropDown)}>Destination 
    
        {dropDown === false ? <i class="fa-solid fa-caret-up drop-down-symbol"> </i> : <i class="fa-solid fa-caret-down drop-down-symbol"></i>}
        <ul> 
                <li className={dropDown === true ? "drop-down" : "dropdown-display"}><NavLink to="/andamantour">Andaman Tour</NavLink></li>
                <li className={dropDown === true ? "drop-down" : "dropdown-display"}><NavLink to="/sundarbantour">Sundarban Tour</NavLink></li>
                <li className={dropDown === true ? "drop-down" : "dropdown-display"}><NavLink to="/kashmirtour"  onClick={()=> setLink(!link)}>Kashmir Tour</NavLink>
                    
                    {/* {link === false ? <i class="fa-solid fa-caret-up drop-down-symbol"> </i> : <i class="fa-solid fa-caret-down drop-down-symbol"></i>} */}
                    {/* <ul class="second-ul">
                        <li className={link === false ? "drop-down" : "dropdown-display"}><NavLink to="/">Dropdown Menu</NavLink></li>
                        <li><a href="/">Dropdown Menu</a></li>
                        <li><a href="/">Dropdown Menu</a></li>
                        <li><a href="/">Dropdown Menu</a></li>
                        <li><a href="/">Dropdown Menu</a></li>
                        <li><a href="/">Dropdown Menu</a></li>
                    </ul> */}
                    
                </li>
                <li className={dropDown === true ? "drop-down" : "dropdown-display"}><NavLink to="/">Dropdown Menu</NavLink></li>
                <li className={dropDown === true ? "drop-down" : "dropdown-display"}><NavLink to="/">Dropdown Menu</NavLink></li>
                <li className={dropDown === true ? "drop-down" : "dropdown-display"}><NavLink to="/">Dropdown Menu</NavLink></li>
        </ul>
        
        </li>
        <li class="menu-text-icon"><NavLink className={(e)=> {return e.isActive? "red" : "menu-text-icon"}} to="/tourpage">Tour Package</NavLink></li>
        <li class="menu-text-icon"><NavLink className={(e)=> {return e.isActive? "red" : "menu-text-icon"}} to="/contact">Contact</NavLink></li>
    
    </ul>
    </div>
  )
}

export default DropdownTwo
