import './listing.css';
import Axios from 'axios'
import { useState } from 'react';
function ListingPage(props) {
  const [buy, setBuy] = useState('')
  const [prop, setProp] = useState('')
  const [des, setDes] = useState('')
  const [adr, setAdr] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [base, setBase] = useState('')
  const [loft, setLoft] = useState('')
  const [park, setPark] = useState('')
  
  const [garS, setGarS] = useState(0)
  const [price, setPrice] = useState(0)
  const [full, setFull] = useState(0)
  const [half, setHalf] = useState(0)
  const [bed, setBed] = useState(0)
  const [sq, setSq] = useState(0)
  const [message, setMessage] = useState('')
  const add = (e) => {
    e.preventDefault()
  Axios.post('/',  {
    buy: buy, prop: prop, des: des, full: full,
    half: half, bed: bed, sq: sq, price: price,
    adr: adr, city: city, state: state, zip: zip, base: base, 
    loft: loft, park: park,  garS: garS

  })
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
        <form>
          <ladel>Rent/Own</ladel>
          
          <div className="radio-btn">
          <div className="radio"><input type="radio" name="prop-buy" value="Rent" className="" onChange={(e) => setBuy(e.target.value)} /> Renting</div>
          <div className="radio"><input type="radio" name="prop-buy" value="Buy" className="" onChange={(e) => setBuy(e.target.value)}/> Selling </div>
          </div>
          <ladel>Property type</ladel>

          <div className="radio-btn">
          <div className="radio"><input type="radio" name="house" value="House" className="House" onChange={(e) => setProp(e.target.value)}/> House </div>
          <div className="radio"><input type="radio" name="house" value="Town House" className="Town House" onChange={(e) => setProp(e.target.value)}/> Town House </div>
          <div className="radio"><input type="radio" name="house" value="Apertment" className="Apartment" onChange={(e) => setProp(e.target.value)}/> Apartment </div>
          </div>
          <ladel>basement</ladel>
          <div className="radio-btn">
          <div className="radio"><input type="radio" name="base" value="finished" className="House" onChange={(e) => setBase(e.target.value)}/> finished basement </div>
          <div className="radio"><input type="radio" name="base" value="unfinished" className="Town House" onChange={(e) => setBase(e.target.value)}/> unfinished basement </div>
          
          </div>

          <ladel>loft/attic</ladel>
          <div className="radio-btn">
          <div className="radio"><input type="radio" name="loft" value="yes" className="House" onChange={(e) => setLoft(e.target.value)}/> yes </div>
          <div className="radio"><input type="radio" name="loft" value="no" className="Town House" onChange={(e) => setLoft(e.target.value)}/> no </div>
          
          </div>

          <ladel>parking</ladel>
          <div className="radio-btn">
          <div className="radio"><input type="radio" name="park" value="Garage" className="House" onChange={(e) => setPark(e.target.value)}/> Garage </div>
          <div className="radio"><input type="radio" name="park" value="Parking lot" className="Town House" onChange={(e) => setPark(e.target.value)}/> Parking lot </div>
          
          </div>
          
          <label>Garage space*</label>
             <input name="bathrooms" type="number" placeholder="price" className="text-in" onChange={(e) => setGarS(e.target.value)} required/>
          <label>Price*</label>
             <input name="bathrooms" type="text" placeholder="price" className="text-in" onChange={(e) => setPrice(e.target.value)} required/>
           <label>Full Bathrooms*</label>
             <input name="bathrooms" type="number" placeholder="Full Bathrooms" className="text-in" onChange={(e) => setFull(e.target.value)} required/>
             <label>Half Bathrooms*</label>
             <input name="bathrooms" type="number" placeholder="Half Bathrooms" className="text-in" onChange={(e) => setHalf(e.target.value)} required/>
             <label>Bedrooms*</label>
             <input name="bathrooms" type="number" placeholder="Bedrooms" className="text-in" onChange={(e) => setBed(e.target.value)} required/>
             <label>Sqft*</label>
             <input name="bathrooms" type="number" placeholder="Sqft" className="text-in" onChange={(e) => setSq(e.target.value)} required/>

             <label>Address*</label>
             <input name="bathrooms" type="text" placeholder="Address" className="text-in" onChange={(e) => setAdr(e.target.value)} required/>
             <label>City*</label>
             <input name="bathrooms" type="text" placeholder="City" className="text-in" onChange={(e) => setCity(e.target.value)} required/>
             <label>State*</label>
             <input name="bathrooms" type="text" placeholder="State" className="text-in" onChange={(e) => setState(e.target.value)} required/>
             <label>Zip Code*</label>
             <input name="bathrooms" type="text" placeholder="Zip code" className="text-in" onChange={(e) => setZip(e.target.value)} required/>

          <ladel>Description</ladel>

          <textarea name="des" id="" cols="30" rows="10" className="" onChange={(e) => setDes(e.target.value)}></textarea>
          <button className="btn" onClick={add}>submit</button>
       </form>
        </div>
       
    </div>
    </>
  );
}

export default ListingPage;