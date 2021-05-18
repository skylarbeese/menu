import './listing.css';
import './Login.css';
import Axios from 'axios'
import { useState, useEffect } from 'react';

function Log1(props) {
  const [email, setEmail] = useState('')
 
  const [pass, setPass] = useState('')

  //const [mess, setMessage] = useState('')
  const [tokenData, setTokenData] = useState({
    token: undefined,
    user: undefined
  })
  useEffect(() => {
   const logged = async () => {
    let token = localStorage.getItem("auth-token")
    if(token === null) {
      localStorage.setItem("auth-token", "")
      token = ""
    }
    const tokenRes = await Axios.post('/ls', null, {headers: {"x-auth-token": token}})
    if(tokenRes.data) {
      const userRes = await Axios.get('/', {
      headers: {"x-auth-token": token},
    })
    setTokenData({
      token,
      user: userRes.data,

    })
    }
   }
   logged()
  }, [])
  const add = async (e) => {
    e.preventDefault()
 const lo = await Axios.post('/login',  {
    email: email, pass: pass
 
  })
 
 
  setTokenData({token: lo.data.token, user: lo.data.user})
  localStorage.setItem("auth-token", lo.data.token)
}

  return (
   <>
   {tokenData.user ?  <><h1>hello</h1></> : <><div className="listing-con">
    <div className="landing-img">
        <div className="grad-img"></div>
        <div className="landing-text"> <h1>text</h1> </div>
        <div className="banner-img"></div>
        

      </div>
      </div>
      <div className="form">
      {/*<h1 className="mess-con">{mess}</h1> */}
        <form>
        <label>email*</label>
             <input name="email" type="text" placeholder="email" className="text-in" onChange={(e) => setEmail(e.target.value)} />
            
             <label>password*</label>
             <input name="pass" type="text" placeholder="password" className="text-in" onChange={(e) => setPass(e.target.value)} />
            
             <button className="btn" onClick={add}>submit</button>
        </form>
      </div></>}
   </>
  );
}

export default Log1;