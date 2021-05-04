import './listing.css';
import Axios from 'axios'
import { useState } from 'react';
function ListingPage() {
  const [buy, setBuy] = useState('')
  const [prop, setProp] = useState('')
  const [des, setDes] = useState('')
  const [message, setMessage] = useState('')
  const add = (e) => {
    e.preventDefault()
  Axios.post('/',  {
    buy: buy, prop: prop, des: des
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
          <div className="radio"><input type="radio" name="prop-buy" value="Buy" className="" onChange={(e) => setBuy(e.target.value)}/> Saling </div>
          </div>
          <ladel>Property type</ladel>

          <div className="radio-btn">
          <div className="radio"><input type="radio" name="" value="prop-type" className="" onChange={(e) => setProp(e.target.value)}/> House </div>
          <div className="radio"><input type="radio" name="" value="prop-type" className="" onChange={(e) => setProp(e.target.value)}/> Apertment </div>
          </div>
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