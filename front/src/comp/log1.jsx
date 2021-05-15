import './listing.css';
import './Login.css';
import Axios from 'axios'
import { useState } from 'react';

function Log1(props) {
  const [email, setEmail] = useState('')
 
  const [pass, setPass] = useState('')

  const [mess, setMessage] = useState('')
  const add = (e) => {
    e.preventDefault()
  Axios.post('/log',  {
    email: email, pass: pass
 
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
      </div>
      <div className="form">
      <h1 className="mess-con">{mess}</h1>
        <form>
        <label>email*</label>
             <input name="email" type="text" placeholder="email" className="text-in" onChange={(e) => setEmail(e.target.value)} />
            
             <label>password*</label>
             <input name="pass" type="text" placeholder="password" className="text-in" onChange={(e) => setPass(e.target.value)} />
            
             <button className="btn" onClick={add}>submit</button>
        </form>
      </div>
   </>
  );
}

export default Log1;