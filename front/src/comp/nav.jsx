import './Nav.css';
import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react'
function Nav() {
    const [wid, setWid] = useState(false)
    const [mouse1, setMouse1] = useState(false)
    const [mouse2, setMouse2] = useState(false)
    const [menu, setMenu] = useState(false)
    const hand = () => {
        if(window.innerWidth > 800) {
          setWid(true)
        } else {
          setWid(false)
        }
      }
      const mou1 = () => {
          setMouse1(!mouse1)
      }
      const mou2 = () => {
        setMouse2(!mouse2)
    }
    const menuHandler = () => {
      setMenu(!menu)
  }
      window.addEventListener("resize", hand);
      useEffect(() => {
         hand()
     }, []);  
  return (
   <>
   <div className="nav-div">
     
     {wid ? (
      <div className="nav-con">
     <nav>
     
      <div className="navbar">
          <Link to="/">Home</Link>


        <div className="dropdown">
         {/* onMouseOver={mou1} */}
         <Link to="" >About</Link>
         <i class="fas fa-angle-down"></i>
         <div className={`dropdown-content ${mouse1 ? 'drop-show' : 'drop-hide'}`}>
            <Link to="/comp/about" >About</Link>
            <Link to="/comp/allListings">see all listings</Link>
           <Link to="">Rent</Link>
           <Link to="">Buy</Link>
         </div> 
         
        </div>
        <div className="dropdown">
        {/*onClick={mou2} */}
          <Link to="" >drop</Link>

          <div className={`dropdown-content ${mouse2 ? 'drop-show' : 'drop-hide'}`}>
            <Link to="/comp/listing">Listing</Link>
            <Link to="">Home</Link>
            <Link to="">Home</Link>
          </div> 

       </div>
        <Link to="">home</Link>

      </div>  
       </nav>
       </div>) : 

       (<div className="nav-con">
         <div className="logo">
           <h1>Logo</h1>
         </div>
         <div className="bur-con">
           
         <div className={`bur`} onClick={menuHandler}>
         
        <div className="burger">
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
            </div> 
         </div>
     
     <div className={`navbar ${menu ? 'nav-show' : 'nav-hide'}`}>
         <Link to="">Home</Link>


       <div className="dropdown">
          
        <Link onClick={mou1}>About</Link>
        <i class="fas fa-angle-down"></i>
        <div className={`dropdown-content ${mouse1 ? 'drop-show' : 'drop-hide'}`}>
        <Link to="/comp/about" >About</Link>
        <Link to="/comp/allListings">see all listings</Link>
        <Link to="">Rent</Link>
        <Link to="">Buy</Link>
        </div> 
        
       </div>
       <div className="dropdown">
       
         <Link to="" onClick={mou2}>Drop</Link>

         <div className={`dropdown-content ${mouse2 ? 'drop-show' : 'drop-hide'}`}>
         <Link to="/comp/listing">Listing</Link>
           <Link to="">Home</Link>
           <Link to="">Home</Link>
         </div> 

      </div>
       <Link to="">Home</Link>

     </div>  
     
         </div>
         </div>
         )}
         </div>
</>
 
  );
}

export default Nav;