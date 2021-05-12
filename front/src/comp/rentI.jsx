import React, {useEffect, useState} from 'react'
import './Rent.css';
import {Link} from "react-router-dom"
function RentI({titleArray, search, data, searchTerm}) {
  return (
    <>
   
    {search.length > 0 ? <div className="abo">{search.map((ti, index) => {

return (<>
  <div className="info-con">

<div className="info-box-con">
  <div className="image-box"></div>
  <div className="text-info">
 
    <h1><Link to={{pathname: `/comp/more/${ti._id}`}}>{ti.buy}</Link></h1>
    <div className="underline"></div>
    <div className="para-text">
    <p>
    {ti.des}
    </p>
    </div>
  </div>
 
</div> 
</div></>) 
})}</div>
: <div className="con">
<div className="listing-box">
  <h1>there are no current listings</h1>
 </div>
</div>}
    </>
  
  );
}

export default RentI;