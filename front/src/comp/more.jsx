import './More.css';
import Nav from './nav'
import {Link} from "react-router-dom"
import React, {useEffect, useState} from 'react'
import axios from 'axios'
function More(props) {

  const [mouse1, setMouse1] = useState(false)
  const [mouse2, setMouse2] = useState(false)
  const [mouse3, setMouse3] = useState(false)
  const [mouse4, setMouse4] = useState(false)
  const [menu, setMenu] = useState(false)

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
  console.log(des)
    useEffect(() => {
       try{
        axios.get(`/read/${props.match.params.id}`)
         .then(res => [setBuy(res.data.buy), setProp(res.data.prop),
          setFull(res.data.full),
          setCreatedAt(res.data.createdAt),
          setHalf(res.data.half),
          setBed(res.data.bed),
          setSq(res.data.sq),
          setPrice(res.data.price),
          setAdr(res.data.adr),
          setCity(res.data.city),
          setState(res.data.state),
          setZip(res.data.zip),
          setDes(res.data.des),
          setBase(res.data.base),
          setLoft(res.data.loft),
          setGar(res.data.gar),
          setPark(res.data.park),
          setGarS(res.data.garS)
      ])
    }
         catch(err) {
           console.log(err)
         }
       }, [])
       const Del = () => {
        axios.delete(`/del/${props.match.params.id}`)
         .then(res => console.log(res.data))
         
      }

      const mou1 = () => {
        setMouse1(!mouse1)
    }
    const mou2 = () => {
      setMouse2(!mouse2)
  }
  const mou3 = () => {
    setMouse3(!mouse3)
}
const mou4 = () => {
  setMouse4(!mouse4)
}
  return (
   <>
   <Nav />
   <div className="more-con">
     <div className="more">
      <div className="img-con">
        <div className="img-box"></div>
      </div>
 
      <div className="info-con-more">
        <div className="info-more">

           <div className="pr-st">
              <div className="loca">
                <div className="address">
                  <h1>{adr}</h1>
                 </div>

                 <div className="city-zip-sta">
                   <div className="city">
                     <h1>{city},</h1>
                   </div>
                   <div className="sta">
                     <h1>{state},</h1>
                   </div>
                   <div className="zip">
                     <h1>{zip}</h1>
                   </div>
                 </div>

               </div>
           
           </div>
           <div className="re">
           <div className="price">
               <h1>price: {price}</h1>
            </div>
           <div className="bath-bed">
               <div className="bath">
                 <h1>{full + half}</h1>
                 
                 <h1 className="bath-text">bathrooms</h1>
               </div>
               <div className="bed">
                 <h1>{bed}</h1>
                 <h1 className="bed-text">bedrooms</h1>
               </div>
              <div className="sqft">
                <h1>{sq}</h1>
                <h1 className="sqft-text">sqft</h1>
              </div>
          </div>
         </div>
       </div>
       </div>
 </div>
       <div className="int">
  {/*-------------------------------------------------------------------------------------*/}       
          <div className="details">
         
           <h1>Details</h1>
           <div className="underline"></div>
 {/*-------------------------------------------------------------------------------------*/}       

       
 {/*-------------------------------------------------------------------------------------*/}       
           <div className="inti">
               <h1>full description</h1>
               <h1 onClick={mou1}>close</h1>
          </div>
          <div className="underline"></div>
          {des === "" ?  <div className={`gr ${mouse1 ? "drop-hide" : "drop-show-more"}`}>
          <p>no description </p>
            
          </div> : <div className={`gr ${mouse1 ? "drop-hide" : "drop-show-more"}`}>
          <p>{des}</p>

</div>}
 {/*-------------------------------------------------------------------------------------*/}             
          



          <div className="inti">
               <h1>interior</h1>
               <h1 onClick={mou2}>close</h1>
          </div>
          <div className="underline"></div>
          <div className={` gr ${mouse2 ? "drop-hide" : "drop-show-more"}`}>
             <div className={`bath-con `}>
           
             <div className="full-bath-more more-t">
               <h1 className="full-bath-text tx">full bathrooms:</h1>
               <h1>{full}</h1>
               
             </div>

            

{half > 0 ? <>
             <div className="half-bath-more more-t">
               <h1 className="half-bath-text tx">half bathrooms:</h1>
               <h1>{half}</h1>
               
             </div>
             </>
: null}
             <div className="base-more more-t">
               <h1 className="basement-text tx">bathrooms total: </h1>
               <h1>{full + half}</h1>
               
             </div>

            
             



            <div className="full-bath-more more-t">
               <h1 className="full-bath-text tx">Loft:</h1>
               <h1>{loft}</h1>    
            </div> 
             </div> 

             <div className="bed-con">
             <div className="bed-more more-t">
             <h1 className="bedr-text tx">bedrooms: </h1>
               <h1>{bed}</h1>
               
             </div>

             <div className="base-more more-t">
               <h1 className="basement-text tx">basement: </h1>
               <h1>{base}</h1>
               
             </div> 

             <div className="base-more more-t">
               <h1 className="basement-text tx">sqft: </h1>
               <h1>{sq}</h1>
               
             </div>
           
             </div>
          </div>
           
  {/*-------------------------------------------------------------------------------------*/}                 

   {/*-------------------------------------------------------------------------------------*/}       
   <div className="inti">
               <h1>extrer</h1>
               <h1 onClick={mou4}>close</h1>
          </div>
          <div className="underline"></div>
             <div className={`gr ${mouse4 ? "drop-hide" : "drop-show-more"}`}>

             <div className={`bath-con `}>
           
           <div className="full-bath-more more-t">
             <h1 className="full-bath-text tx">parking:</h1>
             <h1>{park}</h1>
             
          </div>
        
           </div>

           <div className="bed-con">
          {park === "Garage" ? <div className="full-bath-more more-t">
             <h1 className="full-bath-text tx">garage space:</h1>
             <h1>{garS}</h1>
             
          </div> : null}
           
          </div>
          </div>
 {/*-------------------------------------------------------------------------------------*/} 

           <div className="inti">
               <h1>sell</h1>
               <h1 onClick={mou3}>close</h1>
          </div>
          <div className="underline"></div>
          <div className={`sell-con ${mouse3 ? "drop-hide" : "drop-sell"}`}>
            <div className="b tx">
            <h1>{buy}</h1>
            </div>
            <div className="p tx">
            <h1>{prop}</h1>
            </div>
          </div>
 {/*-------------------------------------------------------------------------------------*/}       
          </div>
          <div className="contact-form">
            <div className="form-img">
              <div className="img-form"></div>
            </div>
            <div className="grad"></div>
            <div className="c-form">
            <h1>Book a showing</h1>
            <form>
              <div className="label">
              <label>name</label>
              </div>
              <input type="text" />
              <div className="label">
              <label>email</label>
              </div>
              <input type="text" />
              <div className="label">
              <label>phone</label>
              </div>
              <input type="text" />
              <div className="btn-con">
                <button>send</button>
              </div>
            </form>
          </div>
          </div>
        </div>
       </div>
       
    <div className="btn">
        <div className="btn-con">
              <Link to="/"><button onClick={Del}>delete</button></Link>
              <Link to={`/comp/edit/${props.match.params.id}`}><button>edit</button></Link>
            </div> 
        </div>

   
   </>
  );
}

export default More;