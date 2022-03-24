import React from "react";
import { useRef,useState, useEffect } from "react";
import MenuIcon from "../img/MenuIcon.svg"
import CloseIcon from "../img/closeIc.svg"
import { BodyHeader, NavContainer } from "../styles/Home";
import { Link } from "react-router-dom";


function NavBar() {
 
    const [isOpen, setOpen] = useState(false)


  

    return(
     <NavContainer>
    <BodyHeader>
    <h1>Xurshid</h1>
    <div className={`nav-items ${isOpen && "open"}`}>
        <Link to ="/">Asosiy</Link>
        <Link to ="/videos">Videolar</Link>
        <Link to ="/about">Ko'proq Ma'lumot</Link>
    </div>
        
    <button className={`btn  ${isOpen && "open"}`} onClick={()=>setOpen(!isOpen)}>
         <img src={isOpen ? CloseIcon: MenuIcon}  />
         </button> 
         </BodyHeader>     


        
    </NavContainer>
    );
}

export default NavBar;