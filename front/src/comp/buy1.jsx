import './Buy.css';
import React, {useEffect, useState} from 'react'
import BuyI from './buyI'
function Buy1(props) {
    const inputEl = React.useRef()
    const [data, setData] = useState("")
  
    const searchTerm = () => {
      props.searchHandler(inputEl.current.value)
    }
  return (
    <>
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

{props.searchTerm.length > 1 ? <div className="loc"><div className="locc"><h1 className="sear">({props.search.length}) listings found for properties in location: </h1><h1 className="locat">{props.searchTerm}</h1></div></div>
: <div className="loc"></div>}

{props.search.length > 0 ? ( <BuyI titleArray={props.titleArray}  searchTerm={props.searchTerm} search={props.search} data={data}/> )
 : <div><div className="no-sear"><h1>there are no results for {props.searchTerm.length === 0 ? <>properteys for sell</> : <>{props.searchTerm}</>}, try another location</h1></div></div>} 
 </>
  );
}

export default Buy1;