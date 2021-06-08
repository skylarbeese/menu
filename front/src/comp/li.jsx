import {useWindowScroll} from 'react-use'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"

import './More.css';
function li(props) {
    React.useEffect(() => {
        const {y: pageYOffset } = useWindowScroll()
        if(pageYOffset > 470) {
          setShow(true)
        } else {
          setShow(false)
        }
      }, [pageYOffset])
      
  const [createdAt, setCreatedAt] = useState('')
  const [buy, setBuy] = useState('')
  const [prop, setProp] = useState('')
  const [park, setPark] = useState('')
  const [gar, setGar] = useState('')
  const [garS, setGarS] = useState(0)
  const [full, setFull] = useState(0)
  const [half, setHalf] = useState(0)
  const [bed, setBed] = useState(0)
  const [sq, setSq] = useState(0)
  const [price, setPrice] = useState(0)
  const [des, setDes] = useState('')
  const [adr, setAdr] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [base, setBase] = useState('')
  const [loft, setLoft] = useState('')
  const[show, setShow] = React.useState(false)
    return (
        <>
        <div className="mor">

{props.titleArray.length > 2 ? <div className={`con-a ${show ? 'header-show' : 'header-hide'}`}>

<Link to={{pathname: `/comp/more/${props.titleArray[0]._id}`}} ><div className="info-con-c">
<div className="info-box-con">
<div className="image-box"></div>
<div className="text-info">
<div className="tit-in">
 <h1>{props.titleArray[0].prop} for {props.titleArray[0].buy}</h1>
 <h1 className="li-price">${props.titleArray[0].price}</h1>
 </div>
</div>
 <div className="underline"></div>
 <div className="para-text">
   <h1>bed: {props.titleArray[0].bed}</h1>
   <h1>bath: {props.titleArray[0].full + props.titleArray[0].half}</h1>
   <h1>sqft: {props.titleArray[0].sq}</h1>
 </div>
 <div className="city-text">
  <div className="ci">
   <h1>{props.titleArray[0].city}</h1>
   <h1>{props.titleArray[0].state}</h1>
   <h1>{props.titleArray[0].zip}</h1>
 </div>
 <div className="ci date">
   <h1>{props.titleArray[0].adr}</h1>
   <h1 className="date-t">{new Date(props.titleArray[0].createdAt).toLocaleDateString()}</h1>
 </div>
</div>
</div>

</div>
</Link>  
<Link to={{pathname: `/comp/more/${props.titleArray[1]._id}`}}>
<div className="info-con-c">
<div className="info-box-con">
<div className="image-box"></div>
<div className="text-info">
<div className="tit-in">
 <h1>{props.titleArray[1].prop} for {props.titleArray[1].buy}</h1>
 <h1 className="li-price">${props.titleArray[1].price}</h1>
</div>
</div>
 <div className="underline"></div>
 <div className="para-text">
 <h1>bed: {props.titleArray[1].bed}</h1>
   <h1>bath: {props.titleArray[1].full + props.titleArray[1].half}</h1>
   <h1>sqft: {props.titleArray[1].sq}</h1>
 </div>
 <div className="city-text">
 <div className="ci">
   <h1>{props.titleArray[1].city}</h1>
   <h1>{props.titleArray[1].state}</h1>
   <h1>{props.titleArray[1].zip}</h1>
 </div>
 <div className="ci date">
   <h1>{props.titleArray[1].adr}</h1>
   <h1 className="date-t">{new Date(props.titleArray[1].createdAt).toLocaleDateString()}</h1>
 </div>
 </div>
</div>
</div>
</Link>
<Link to={{pathname: `/comp/more/${props.titleArray[2]._id}`}}>
<div className="info-con-c">
<div className="info-box-con">
<div className="image-box"></div>
<div className="text-info">
<div className="tit-in">
 <h1>{props.titleArray[2].prop} for {props.titleArray[2].buy}</h1>
 <h1 className="li-price">${props.titleArray[2].price}</h1>
</div>
</div>
 <div className="underline"></div>
 <div className="para-text">
 <h1>bed: {props.titleArray[2].bed}</h1>
   <h1>bath: {props.titleArray[2].full + props.titleArray[2].half}</h1>
   <h1>sqft: {props.titleArray[2].sq}</h1>
 </div>
 <div className="city-text">
 <div className="ci">
   <h1>{props.titleArray[2].city}</h1>
   <h1>{props.titleArray[2].state}</h1>
   <h1>{props.titleArray[2].zip}</h1>
 </div>
 <div className="ci date">
   <h1>{props.titleArray[2].adr}</h1>
   <h1 className="date-t">{new Date(props.titleArray[2].createdAt).toLocaleDateString()}</h1>
 </div>
 </div>

</div>
</div>
</Link>
</div> : 
props.titleArray.length === 2 ?
<div className={`con-a ${show ? 'header-show' : 'header-hide'}`}>
<Link to={{pathname: `/comp/more/${props.titleArray[0]._id}`}}>
<div className="info-con-c">
<div className="info-box-con">
<div className="image-box"></div>
<div className="text-info">
<div className="tit-in">
 <h1>{props.titleArray[0].prop} for {props.titleArray[0].buy}</h1>
 <h1 className="li-price">${props.titleArray[0].price}</h1>
</div>
</div>
 <div className="underline"></div>
 <div className="para-text">
 <h1>bed: {props.titleArray[0].bed}</h1>
   <h1>bath: {props.titleArray[0].full + props.titleArray[0].half}</h1>
   <h1>sqft: {props.titleArray[0].sq}</h1>
 </div>
 <div className="city-text">
 <div className="ci">
   <h1>{props.titleArray[0].city}</h1>
   <h1>{props.titleArray[0].state}</h1>
   <h1>{props.titleArray[0].zip}</h1>
 </div>
 <div className="ci date">
   <h1>{props.titleArray[0].adr}</h1>
   <h1 className="date-t">{new Date(props.titleArray[0].createdAt).toLocaleDateString()}</h1>
 </div>
 </div>
</div>
</div>
</Link>
<Link to={{pathname: `/comp/more/${props.titleArray[1]._id}`}}>
<div className="info-con-c">
<div className="info-box-con">
<div className="image-box"></div>
<div className="text-info">
<div className="tit-in">
 <h1>{props.titleArray[1].prop} for {props.titleArray[1].buy}</h1>
 <h1 className="li-price">${props.titleArray[1].price}</h1>
</div>
</div>
 <div className="underline"></div>
 <div className="para-text">
 <h1>bed: {props.titleArray[1].bed}</h1>
   <h1>bath: {props.titleArray[1].full + props.titleArray[1].half}</h1>
   <h1>sqft: {props.titleArray[1].sq}</h1>
 </div>
 <div className="city-text">
 <div className="ci">
   <h1>{props.titleArray[1].city}</h1>
   <h1>{props.titleArray[1].state}</h1>
   <h1>{props.titleArray[1].zip}</h1>
 </div>
 <div className="ci date">
   <h1>{props.titleArray[1].adr}</h1>
   <h1 className="date-t">{new Date(props.titleArray[1].createdAt).toLocaleDateString()}</h1>
 </div>
 </div>
</div>
</div>
</Link>
</div>: 

props.titleArray.length === 1 ?
<div className={`con-a ${show ? 'header-show' : 'header-hide'}`}>
<Link to={{pathname: `/comp/more/${props.titleArray[0]._id}`}}>
<div className="info-con-c">
<div className="info-box-con">
<div className="image-box"></div>
 <div className="text-info">
 <div className="tit-in">
   <h1>{props.titleArray[0].prop} for {props.titleArray[0].buy}</h1>
   <h1 className="li-price">${props.titleArray[0].price}</h1>
  </div>
  </div>
   <div className="underline"></div>
   <div className="para-text">
   <h1>bed: {props.titleArray[0].bed}</h1>
   <h1>bath: {props.titleArray[0].full + props.titleArray[0].half}</h1>
   <h1>sqft: {props.titleArray[0].sq}</h1>
   </div>
   <div className="city-text">
   <div className="ci">
   <h1>{props.titleArray[0].city}</h1>
   <h1>{props.titleArray[0].state}</h1>
   <h1>{props.titleArray[0].zip}</h1>
 </div>
 <div className="ci date">
   <h1>{props.titleArray[0].adr}</h1>
   
   <h1 className="date-t">{new Date(props.titleArray[0].createdAt).toLocaleDateString()}</h1>
 </div>
 </div>
 </div>
 </div>
 </Link>
 </div>

: <div className="con">
<div className="listing-box">
 <h1>there are no current listings</h1>
</div>
</div>}
</div>
        </>
    )
}

export default li;