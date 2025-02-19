import React, {useState} from "react";
import DropdownTwo from "./DropdownTwo";

function Navbar() {

    const [show, setShow] = useState(false);
    

    return (
       <div className="main-navbar">
       <div className="menu-icon-separation">
       <div className="menu-icon">
       <h1 className="com-brand">Xplori<span className="brand-last-2text-color">go</span></h1>
       <span class="material-symbols-outlined material-symbols-outlined-menu" onClick={()=> setShow(!show)}>menu</span>
       </div>
       <div className={show === false ? "link-icon" : "link-icon-display"}>
       <DropdownTwo/>
       </div>
       </div>
       </div>
    );
};

export default Navbar;