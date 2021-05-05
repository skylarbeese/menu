import './Buy.css';
import React, {useEffect, useState} from 'react'
function Buy1() {
  return (
    <div className="All-con">
    <div className="landing-img">
      <div className="grad-img"></div>
      <div className="landing-text"> 
      <h1>Search for a location for buy</h1> 
      <form action="" className="form-sea">
      <i class="fa fa-search" aria-hidden="true"></i>

              <input  name="find" type="text" placeholder="address, state, city, zip code"  className="" 
              ref={inputEl} onChange={searchTerm}/>
       </form>
      </div>
      <div className="banner-img"></div>
      
    
 

    </div>
  
    </div>
  );
}

export default Buy1;