import './AllListings.css';
import React, {useEffect, useState} from 'react'
function AllInfo({titleArray, search, data, searchTerm}) {
 const e =  search.length
 console.log(e)
  return (
    <>
    {search.length > 0 ? <div> {search.map((ti, index) => {

return (<>
  <div className="info-con">

<div className="info-box-con">
  <div className="image-box"></div>
  <div className="text-info">
 
    <h1>{ti.buy}</h1>
    <div className="underline"></div>
    <p>
    {ti.des}
    </p>
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

export default AllInfo;