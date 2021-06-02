import './listing.css';
import Axios from 'axios'
import { useState } from 'react';
function ListingPage(props) {
  

 


  const [buy, setBuy] = useState([])
  const [prop, setProp] = useState([])
  const [des, setDes] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [adr, setAdr] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [img, setImg] = useState('')
  const [base, setBase] = useState([])
  const [loft, setLoft] = useState([])
  const [park, setPark] = useState([])
  const [sqm, setSqM] = useState([])
  const [year, setYear] = useState(0)
  const [lot, setLot] = useState(0)
  const [garS, setGarS] = useState(0)
  const [price, setPrice] = useState(0)
  const [full, setFull] = useState(0)
  const [half, setHalf] = useState(0)
  const [bed, setBed] = useState(0)
  const [sq, setSq] = useState(0)
  const [message, setMessage] = useState('')
  const onChangeImg = (e) => {
    setImg(e.target.file)
    
  }
  const add = (e) => {
  /*  const formData = new FormData();
    formData.append("buy", buy)
    formData.append("prop", prop)
    formData.append("des", des)
    formData.append("full", full)
    formData.append("half", half)
    formData.append("buy", buy)

    formData.append("bed", bed)
    formData.append("sq", sq)
    formData.append("price", price)
    formData.append("adr", adr)
    formData.append("city", city)
    formData.append("state", state)
    formData.append("zip", zip)
    formData.append("base", base)
    formData.append("loft", loft)
    formData.append("park", park)
    formData.append("garS", garS)
    formData.append("lot", lot)
    formData.append("sqm", sqm)
    formData.append("year", year)
    formData.append("createdAt", createdAt)
    formData.append("img", img) */
    e.preventDefault()
  Axios.post('/',  {
    buy: buy, prop: prop, des: des, full: full,
    half: half, bed: bed, sq: sq, price: price,
    adr: adr, city: city, state: state, zip: zip, base: base, 
    loft: loft, park: park,  garS: garS, lot: lot, sqm: sqm, year: year,
    createdAt: createdAt

  } )
  .then(res => setMessage(res.data))
}

  return (
    <>
    <div className="listing-con">
    <div className="landing-img">
        <div className="grad-img"></div>
        <div className="landing-text"> <h1>text</h1> </div>
        <div className="banner-img"></div>
        

      </div>
        <div className="form">
         <h1 className="mess-con">{message}</h1>
        <form  >
          <div className="gen">
            <div className="sect">
            <h1>General info</h1>
            <div className="gen-info">

            <div className="prop-rent">
              <div className="in-con pr">
               <label>Property type</label>
              <select name="prop"  onChange={(e) => setProp(e.target.value)} single>
              <option >-- choose an option --</option>
                  <option value="House" >House</option>
                  <option value="Town home" >Town home</option>
                  <option value="Apartment ">Apartment </option>
               </select> 
           {/*    <input name="prop" value="House" type="radio" placeholder="Sqft"
                className="text-in" onChange={(e) => setProp(e.target.value)} required/> House
               <input name="prop" value="Town home" type="radio" placeholder="Sqft"
                className="text-in" onChange={(e) => setProp(e.target.value)} required/> Town home
               <input name="prop" value="Apartment" type="radio" placeholder="Sqft"
                className="text-in" onChange={(e) => setProp(e.target.value)} required/> Apartment */}
             {/*  <input name="bathrooms" type="number" placeholder="Sqft"
                className="text-in" onChange={(e) => setProp(e.target.value)} required/> */}
              </div>

              
              <div className="in-con ren">
              <label>Rent/Own</label>
              <select name="buy" value={buy} onChange={(e) => setBuy(e.target.value)} single>
              <option >-- choose an option --</option>
                  <option value="Sell" >Sell</option>
                  <option value="Rent" >Rent</option>
              </select> 
           { /*  <input name="buy" type="radio" placeholder="Sqft"
                className="text-in" value="Sell" onChange={(e) => setBuy(e.target.value)} required/> Sell
                <input name="buy" type="radio" placeholder="Sqft"
                className="text-in" value="Rent" onChange={(e) => setBuy(e.target.value)} required/> Rent */}
             {/*  <input name="bathrooms" type="text" placeholder="Sqft"
                className="text-in" onChange={(e) => setBuy(e.target.value)} required/> */}
              </div>
             </div>
             <div className="prop-rent">
              
             <div className="in-con">
             
              <div className="sq">
              <label>Sqft*</label>
                <input name="bathrooms" type="number" placeholder="Sqft"
                className="text-in" onChange={(e) => setSq(e.target.value)} required/>
              </div>
              <div className="a">
             <select name="sqft"  onChange={(e) => setSqM(e.target.value)} single>
             <option >-- choose an option --</option>
                  <option value="sqm" >sqm</option>
                  <option value="sqft" >sqft</option>
              </select> 
            {/*  <input name="sqm" type="radio" placeholder="Sqft"
                className="text-in" value="sqm" onChange={(e) => setSqM(e.target.value)} required/> sqm
                 <input name="sqm" type="radio" placeholder="Sqft"
                className="text-in" value="sqft" onChange={(e) => setSqM(e.target.value)} required/> sqft */} 
              {/*  <input name="bathrooms" type="text" placeholder="Sqft"
                className="text-in" onChange={(e) => setSqM(e.target.value)} required/> */}
             </div>
            </div>
           
             



             
              <div className="in-con">
              <label>lot size*</label>
                <input name="bathrooms" type="number" placeholder="Sqft"
                className="text-in" onChange={(e) => setLot(e.target.value)} required/>
              </div>
             </div>
              <div className="in-con-c">
               <label>Description</label>
               <textarea name="des" id="" cols="30" rows="10" className="" 
               onChange={(e) => setDes(e.target.value)}></textarea>
               </div>

               <div className="prop-rent">
                <div className="in-con">
                 <label>Price*</label>
                    <input name="bathrooms" type="text" placeholder="price" className="text-in"
                     onChange={(e) => setPrice(e.target.value)} required/>
                </div>
                <div className="in-con">
                 <label>year built*</label>
                    <input name="bathrooms" type="text" placeholder="price" className="text-in"
                     onChange={(e) => setYear(e.target.value)} required/>
                </div>
            </div>
            </div>
            </div>
            <div className="sect">
            <h1>Location</h1>
            <div className="gen-info">
            <div className="in-con-c">
            <label>City*</label>
             <input name="bathrooms" type="text" placeholder="City" className="text-in" onChange={(e) => setCity(e.target.value)} required/>
            </div>
            <div className="prop-rent rooms">
            <div className="in-con">
            <label>Zip Code*</label>
             <input name="bathrooms" type="text" placeholder="Zip code" className="text-in" onChange={(e) => setZip(e.target.value)} required/>
            </div>
            <div className="in-con">
            <label>State*</label>
             <input name="bathrooms" type="text" placeholder="State" className="text-in" onChange={(e) => setState(e.target.value)} required/>
            </div>
            <div className="in-con">
            <label>Address*</label>
             <input name="bathrooms" type="text" placeholder="Address" className="text-in" onChange={(e) => setAdr(e.target.value)} required/>
            </div>
           
            </div>
            </div>
            </div>
            <div className="sect">
            <h1>space</h1>
            <div className="gen-info">
            <div className="prop-rent rooms">
            <div className="in-con ce">
               <label>Full Bathrooms*</label>
                 <input name="bathrooms" type="number" placeholder="Full Bathrooms" className="text-in"
                 onChange={(e) => setFull(e.target.value)} required/>
            </div>
            <div className="in-con ce">
            <label>Half Bathrooms*</label>
               <input name="bathrooms" type="number" placeholder="Half Bathrooms" className="text-in" 
               onChange={(e) => setHalf(e.target.value)} required/>
            </div>
           
            
              <div className="in-con ce">
              <label>Bedrooms*</label>
                   <input name="bathrooms" type="number" placeholder="Bedrooms" className="text-in" 
                   onChange={(e) => setBed(e.target.value)} required/>
              </div>
           </div>
            <div className="prop-rent">
               <div className="in-con">
                 <label>basement</label>
                <select name="buy"  onChange={(e) => setBase(e.target.value)} single>
                <option >-- choose an option --</option>
                   <option value="finished" >finished</option>
                   <option value="unfinished" >unfinished</option>
                 </select> 
              {/*   <input name="base" type="radio" placeholder="finished"
                className="text-in" value="finished" onChange={(e) => setBase(e.target.value)} required/> finished
                 <input name="base" value="unfinished" type="radio" placeholder="unfinished"
                className="text-in" onChange={(e) => setBase(e.target.value)} required/> unfinished */}
                  {/*<input name="bathrooms" type="text" placeholder="Sqft"
                className="text-in" onChange={(e) => setBase(e.target.value)} required/> */}
               </div>

               <div className="in-con">
               <label>loft/attic</label>
              <select name="buy"  onChange={(e) => setLoft(e.target.value)} single>
              <option >-- choose an option --</option>
                   <option value="yes" >yes</option>
                   <option value="no" >no</option>
              </select> 
                { /*  <input name="loft" type="radio" placeholder="Sqft"
                    className="text-in" value="yes" onChange={(e) => setLoft(e.target.value)} required/> yes
                     <input name="loft" type="radio" placeholder="Sqft"
                    className="text-in" value="no" onChange={(e) => setLoft(e.target.value)} required/> no */}
                  {/* <input name="bathrooms" type="text" placeholder="Sqft"
                    className="text-in" onChange={(e) => setLoft(e.target.value)} required/> */}
               </div>
              </div>
              <div className="prop-rent">
               <div className="in-con">
               <label>parking</label>
                <select name="buy"  onChange={(e) => setPark(e.target.value)} single>
                   <option >-- choose an option --</option>
                   <option value="Parking lot" >Parking lot</option>
                   <option value="Garage" >Garage</option>
                 </select> 
               { /*   <input name="park" type="radio" placeholder="Sqft"
                  className="text-in" value="Parking lot" onChange={(e) => setPark(e.target.value)} required/> Parking lot
                    <input name="park" type="radio" placeholder="Sqft"
                  className="text-in" value="Garage" onChange={(e) => setPark(e.target.value)} required/> Garage */}
                  {/* <input name="bathrooms" type="text" placeholder="Sqft"
                  className="text-in" onChange={(e) => setPark(e.target.value)} required/> */}
               </div>
               
               <div className="in-con">
               <label>Garage space*</label>
                <input name="bathrooms" type="number" placeholder="price" className="text-in" 
                onChange={(e) => setGarS(e.target.value)} required/>
               </div>

            </div>
            </div>
            </div>
          </div>
      
         
          
     

        

          
         
        
          
           

          <div className="bt">
          <button className="btn-sub" onClick={add}>submit</button>
          </div>
       </form>
        </div>
       
    </div>
    </>
  );
}

export default ListingPage;