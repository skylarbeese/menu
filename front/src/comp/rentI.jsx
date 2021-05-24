import React, {useEffect, useState} from 'react'
import './Rent.css';
import {Link} from "react-router-dom"
function RentI({titleArray, search, data, searchTerm}) {
  return (
    <>
   
    {search.length > 0 ? <div className="abo">{search.map((ti, index) => {

return (<>
<Link to={{pathname: `/comp/more/${ti._id}`}}>
  <div className="info-con">

 <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{ti.prop} for {ti.buy}</h1>
         <h1 className="li-price">{ti.price}</h1>
       </div>
       </div>
         <div className="underline"></div>
         <div className="para-text">
             <h1>bed: {ti.bed}</h1>
             <h1>bath: {ti.bath}</h1>
             <h1>sqft: {ti.sq}</h1>
         </div>
         <div className="city-text">
         <div className="ci">
             <h1>{ti.city}</h1>
             <h1>{ti.state}</h1>
             <h1>{ti.zip}</h1>
           </div>
           <div className="ci">
             <h1>{ti.adr}</h1>
             
           </div>
           </div>
       </div>
</div></Link></>) 
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