import './Landing.css';
import './AllListings.css';
import {Link} from "react-router-dom"
function Landing({titleArray}) {
 
 const title = titleArray.filter(rent => {
  return rent.buy === 'Rent'
})
const titleBuy = titleArray.filter(buy => {
  return buy.buy === 'Sell'
})
  return (
   <div className="landing-con">
      <div className="landing-img">
        <div className="grad-img"></div>
        <div className="landing-text"> <h1>Se</h1> </div>
        <div className="banner-img"></div>
        

      </div>
      <div className="info-cont">
      <div className="info-head">
        <h1>header</h1>
        <div className="underline"></div>
           <p>
           Bacon ipsum dolor amet ham hock brisket ham tri-tip cupim. 
           Tri-tip strip steak pork belly prosciutto, filet mignon tongue ham 
           hock beef ribs ball tip. Bacon prosciutto kevin pork loin corned 
           beef turkey jowl filet mignon boudin biltong ball tip short loin. 
           Shank pancetta pig salami shoulder sirloin tongue turducken andouille. 
           Salami strip steak pork belly meatball pork chop ham rump. Shank pork 
           loin swine, salami pork chop spare ribs rump tri-tip landjaeger 
           buffalo cow alcatra andouille picanha.
           </p>
       </div>
      </div>
    <div className="info">
    <div className="text-link"><Link to="./comp/allListings"><h1>see all listings</h1></Link></div>
    {/*------------------------------------------------------------------------------------------------*/}
    {titleArray.length > 2 ? <div className="con-a">
  
    <Link to={{pathname: `/comp/more/${titleArray[0]._id}`}}><div className="info-con-c">
       <div className="info-box-con">
       <div className="image-box"></div>
       <div className="text-info">
         <div className="tit-in">
           <h1>{titleArray[0].prop} for {titleArray[0].buy}</h1>
           <h1 className="li-price">${titleArray[0].price}</h1>
           </div>
        </div>
           <div className="underline"></div>
           <div className="para-text">
             <h1>bed: {titleArray[0].bed}</h1>
             <h1>bath: {titleArray[0].full + titleArray[0].half}</h1>
             <h1>sqft: {titleArray[0].sq}</h1>
           </div>
           <div className="city-text">
            <div className="ci">
             <h1>{titleArray[0].city}</h1>
             <h1>{titleArray[0].state}</h1>
             <h1>{titleArray[0].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleArray[0].adr}</h1>
             
           </div>
          </div>
         </div>
         
       </div>
       </Link>  
       <Link to={{pathname: `/comp/more/${titleArray[1]._id}`}}>
       <div className="info-con-c">
       <div className="info-box-con">
       <div className="image-box"></div>
         <div className="text-info">
         <div className="tit-in">
           <h1>{titleArray[1].prop} for {titleArray[1].buy}</h1>
           <h1 className="li-price">${titleArray[1].price}</h1>
          </div>
          </div>
           <div className="underline"></div>
           <div className="para-text">
           <h1>bed: {titleArray[1].bed}</h1>
             <h1>bath: {titleArray[1].full + titleArray[1].half}</h1>
             <h1>sqft: {titleArray[1].sq}</h1>
           </div>
           <div className="city-text">
           <div className="ci">
             <h1>{titleArray[1].city}</h1>
             <h1>{titleArray[1].state}</h1>
             <h1>{titleArray[1].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleArray[1].adr}</h1>
            
           </div>
           </div>
         </div>
       </div>
       </Link>
       <Link to={{pathname: `/comp/more/${titleArray[2]._id}`}}>
       <div className="info-con-c">
       <div className="info-box-con">
       <div className="image-box"></div>
         <div className="text-info">
         <div className="tit-in">
           <h1>{titleArray[2].prop} for {titleArray[2].buy}</h1>
           <h1 className="li-price">${titleArray[2].price}</h1>
          </div>
          </div>
           <div className="underline"></div>
           <div className="para-text">
           <h1>bed: {titleArray[2].bed}</h1>
             <h1>bath: {titleArray[2].full + titleArray[2].half}</h1>
             <h1>sqft: {titleArray[2].sq}</h1>
           </div>
           <div className="city-text">
           <div className="ci">
             <h1>{titleArray[2].city}</h1>
             <h1>{titleArray[2].state}</h1>
             <h1>{titleArray[2].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleArray[2].adr}</h1>
           
           </div>
           </div>
         
         </div>
       </div>
       </Link>
     </div> : 
     titleArray.length === 2 ?
     <div className="con-a">
       <Link to={{pathname: `/comp/more/${titleArray[0]._id}`}}>
     <div className="info-con-c">
       <div className="info-box-con">
       <div className="image-box"></div>
         <div className="text-info">
         <div className="tit-in">
           <h1>{titleArray[0].prop} for {titleArray[0].buy}</h1>
           <h1 className="li-price">${titleArray[0].price}</h1>
          </div>
          </div>
           <div className="underline"></div>
           <div className="para-text">
           <h1>bed: {titleArray[0].bed}</h1>
             <h1>bath: {titleArray[0].full + titleArray[0].half}</h1>
             <h1>sqft: {titleArray[0].sq}</h1>
           </div>
           <div className="city-text">
           <div className="ci">
             <h1>{titleArray[0].city}</h1>
             <h1>{titleArray[0].state}</h1>
             <h1>{titleArray[0].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleArray[0].adr}</h1>
            
           </div>
           </div>
         </div>
         </div>
         </Link>
         <Link to={{pathname: `/comp/more/${titleArray[1]._id}`}}>
       <div className="info-con-c">
       <div className="info-box-con">
       <div className="image-box"></div>
         <div className="text-info">
         <div className="tit-in">
           <h1>{titleArray[1].prop} for {titleArray[1].buy}</h1>
           <h1 className="li-price">${titleArray[1].price}</h1>
          </div>
          </div>
           <div className="underline"></div>
           <div className="para-text">
           <h1>bed: {titleArray[1].bed}</h1>
             <h1>bath: {titleArray[1].full + titleArray[1].half}</h1>
             <h1>sqft: {titleArray[1].sq}</h1>
           </div>
           <div className="city-text">
           <div className="ci">
             <h1>{titleArray[1].city}</h1>
             <h1>{titleArray[1].state}</h1>
             <h1>{titleArray[1].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleArray[1].adr}</h1>
            
           </div>
           </div>
         </div>
       </div>
       </Link>
       </div>: 
       
       titleArray.length === 1 ?
       <div className="con-a">
         <Link to={{pathname: `/comp/more/${titleArray[0]._id}`}}>
       <div className="info-con-c">
         <div className="info-box-con">
         <div className="image-box"></div>
           <div className="text-info">
           <div className="tit-in">
             <h1>{titleArray[0].prop} for {titleArray[0].buy}</h1>
             <h1 className="li-price">${titleArray[0].price}</h1>
            </div>
            </div>
             <div className="underline"></div>
             <div className="para-text">
             <h1>bed: {titleArray[0].bed}</h1>
             <h1>bath: {titleArray[0].full + titleArray[0].half}</h1>
             <h1>sqft: {titleArray[0].sq}</h1>
             </div>
             <div className="city-text">
             <div className="ci">
             <h1>{titleArray[0].city}</h1>
             <h1>{titleArray[0].state}</h1>
             <h1>{titleArray[0].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleArray[0].adr}</h1>
         
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
    {/*----------------------------------------------------------------------------------------------------*/}
        <div className="text-link"><Link to="./comp/rent"><h1>see all rent listings</h1></Link></div>
      {/*----------------------------------------------------------------------------------------------------*/}
        {title.length > 2 ? <div className="con-a">
  <Link to={{pathname: `/comp/more/${title[0]._id}`}}>
  <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{title[0].prop} for {title[0].buy}</h1>
         <h1 className="li-price">${title[0].price}</h1>
        </div>
        </div>
         <div className="underline"></div>
         <div className="para-text">
         <h1>bed: {title[0].bed}</h1>
             <h1>bath: {title[0].full + title[0].half}</h1>
             <h1>sqft: {title[0].sq}</h1>
         </div>
         <div className="city-text">
         <div className="ci">
             <h1>{title[0].city}</h1>
             <h1>{title[0].state}</h1>
             <h1>{title[0].zip}</h1>
           </div>
           <div className="ci">
             <h1>{title[0].adr}</h1>
             
           </div>
           </div>
       </div>
     </div>
     </Link>
     <Link to={{pathname: `/comp/more/${title[1]._id}`}}>
     <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{title[1].prop} for {title[1].buy}</h1>
         <h1 className="li-price">${title[1].price}</h1>
        </div>
        </div>
         <div className="underline"></div>
         <div className="para-text">
         <h1>bed: {title[1].bed}</h1>
             <h1>bath: {title[1].full + title[1].half}</h1>
             <h1>sqft: {title[1].sq}</h1>
         </div>
         <div className="city-text">
         <div className="ci">   
             <h1>{title[1].city}</h1>
             <h1>{title[1].state}</h1>
             <h1>{title[1].zip}</h1>
           </div>
           <div className="ci">   
             <h1>{title[1].adr}</h1>
            
           </div>
           </div>
       </div>
     </div>
     </Link>
     <Link to={{pathname: `/comp/more/${title[2]._id}`}}>
     <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{title[2].prop} for {title[2].buy}</h1>
         <h1 className="li-price">${title[2].price}</h1>
      </div>
      </div>
         <div className="underline"></div>
         <div className="para-text">
         <h1>bed: {title[2].bed}</h1>
             <h1>bath: {title[2].full + title[2].half}</h1>
             <h1>sqft: {title[2].sq}</h1>
         </div>
         <div className="city-text">
         <div className="ci">
             <h1>{title[2].city}</h1>
             <h1>{title[2].state}</h1>
             <h1>{title[2].zip}</h1>
           </div>
           <div className="ci">
             <h1>{title[2].adr}</h1>
            
           </div>
           </div>
       </div>
       
     </div>
     </Link>
  

   </div> : 
   title.length === 2 ?

   <div className="con-a">
  <Link to={{pathname: `/comp/more/${title[0]._id}`}}>
  <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{title[0].prop} for {title[0].buy}</h1>
         <h1 className="li-price">${title[0].price}</h1>
        </div>
        </div>
         <div className="underline"></div>
         <div className="para-text">
         <h1>bed: {title[0].bed}</h1>
             <h1>bath: {title[0].full + title[0].half}</h1>
             <h1>sqft: {title[0].sq}</h1>
         </div>
         <div className="city-text">
         <div className="ci">
             <h1>{title[0].city}</h1>
             <h1>{title[0].state}</h1>
             <h1>{title[0].zip}</h1>
           </div>
           <div className="ci">
             <h1>{title[0].adr}</h1>
            
           </div>
           </div>
       </div>
    
     </div>
     </Link>
     <Link to={{pathname: `/comp/more/${title[1]._id}`}}>
     <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{title[1].prop} for {title[1].buy}</h1>
         <h1 className="li-price">${title[1].price}</h1>
        </div>
        </div>
         <div className="underline"></div>
         <div className="para-text">
         <h1>bed: {title[1].bed}</h1>
             <h1>bath: {title[1].full + title[1].half}</h1>
             <h1>sqft: {title[1].sq}</h1>
         </div>
         <div className="city-text">
         <div className="ci">
             <h1>{title[1].city}</h1>
             <h1>{title[1].state}</h1>
             <h1>{title[1].zip}</h1>
           </div>
           <div className="ci">
             <h1>{title[1].adr}</h1>
          
           </div>
       </div>
     </div>
     </div>
     </Link>
     </div>:

   title.length === 1 ?
   <div className="con-a">
     <Link to={{pathname: `/comp/more/${title[0]._id}`}}>
   <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{title[0].prop} for {title[0].buy}</h1>
         <h1 className="li-price">${title[0].price}</h1>
        </div>
        </div>
         <div className="underline"></div>
         <div className="para-text">
         <h1>bed: {title[0].bed}</h1>
             <h1>bath: {title[0].full + title[0].half}</h1>
             <h1>sqft: {title[0].sq}</h1>
         </div>
         <div className="city-text">
         <div className="ci">
             <h1>{title[0].city}</h1>
             <h1>{title[0].state}</h1>
             <h1>{title[0].zip}</h1>
           </div>
           <div className="ci">
             <h1>{title[0].adr}</h1>
             
           </div>
       </div>
      </div>
       </div>
       </Link>
     </div> : <div className="con">
       <div className="listing-box">
         <h1>there are no current listings</h1>
        </div>
      </div>}

  {/*----------------------------------------------------------------------------------------------------*/}
      <div className="text-link"><Link to="./comp/buy"><h1>see all buying listings</h1></Link></div>

        {titleBuy.length > 2 ? <div className="con-a">
    {/*----------------------------------------------------------------------------------------------------*/}
    <Link to={{pathname: `/comp/more/${titleBuy[0]._id}`}}>
  <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{titleBuy[0].prop} for {titleBuy[0].buy}</h1>
         <h1 className="li-price">${titleBuy[0].price}</h1>
       </div>
       </div>
         <div className="underline"></div>
         <div className="para-text">
         <h1>bed: {titleBuy[0].bed}</h1>
             <h1>bath: {titleBuy[0].full + titleBuy[0].half}</h1>
             <h1>sqft: {titleBuy[0].sq}</h1>
         </div>
         <div className="city-text">
         <div className="ci">
             <h1>{titleBuy[0].city}</h1>
             <h1>{titleBuy[0].state}</h1>
             <h1>{titleBuy[0].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleBuy[0].adr}</h1>
           
           </div>
           </div>
       </div>
     </div>
     </Link>
     <Link to={{pathname: `/comp/more/${titleBuy[1]._id}`}}>
     <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{titleBuy[1].prop} for {titleBuy[1].buy}</h1>
         <h1 className="li-price">${titleBuy[1].price}</h1>
       </div>
       </div>
         <div className="underline"></div>
         <div className="para-text">
         <h1>bed: {titleBuy[1].bed}</h1>
             <h1>bath: {titleBuy[1].full +titleBuy[1].half }</h1>
             <h1>sqft: {titleBuy[1].sq}</h1>
        </div>
        <div className="city-text">
        <div className="ci">
             <h1>{titleBuy[1].city}</h1>
             <h1>{titleBuy[1].state}</h1>
             <h1>{titleBuy[1].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleBuy[1].adr}</h1>
           
           </div>
           </div>
       </div>
     </div>
     </Link>
     <Link to={{pathname: `/comp/more/${titleBuy[2]._id}`}}>
     <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{titleBuy[2].prop} for {titleBuy[2].buy}</h1>
         <h1 className="li-price">${titleBuy[2].price}</h1>
       </div>
       </div>
         <div className="underline"></div>
         <div className="para-text">
         <h1>bed: {titleBuy[2].bed}</h1>
             <h1>bath: {titleBuy[2].full + titleBuy[2].half}</h1>
             <h1>sqft: {titleBuy[2].sq}</h1>
        </div>
        <div className="city-text">
        <div className="ci">
             <h1>{titleBuy[2].city}</h1>
             <h1>{titleBuy[2].state}</h1>
             <h1>{titleBuy[2].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleBuy[2].adr}</h1>
            
           </div>
           </div>
       </div>
     </div>
     </Link>
   </div> : 
   titleBuy.length === 2 ?
   <div className="con-a">
     <Link to={{pathname: `/comp/more/${titleBuy[0]._id}`}}>
   <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{titleBuy[0].prop} for {titleBuy[0].buy}</h1>
         <h1 className="li-price">${titleBuy[0].price}</h1>
        </div>
        </div>
         <div className="underline"></div>
         <div className="para-text">
         <h1>bed: {titleBuy[0].bed}</h1>
             <h1>bath: {titleBuy[0].full + titleBuy[0].half}</h1>
             <h1>sqft: {titleBuy[0].sq}</h1>
       
         </div>
         <div className="city-text">
         <div className="ci">
             <h1>{titleBuy[0].city}</h1>
             <h1>{titleBuy[0].state}</h1>
             <h1>{titleBuy[0].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleBuy[0].adr}</h1>
            
           </div>
           </div>
       </div>
     </div>
     </Link>
     <Link to={{pathname: `/comp/more/${titleBuy[1]._id}`}}>
     <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{titleBuy[1].prop} for {titleBuy[1].buy}</h1>
         <h1 className="li-price">${titleBuy[1].price}</h1>
        </div>
        </div>
         <div className="underline"></div>
         <div className="para-text">
         <h1>bed: {titleBuy[1].bed}</h1>
             <h1>bath: {titleBuy[1].full + titleBuy[1].half}</h1>
             <h1>sqft: {titleBuy[1].sq}</h1>
        </div>
        <div className="city-text">
        <div className="ci">
             <h1>{titleBuy[1].city}</h1>
             <h1>{titleBuy[1].state}</h1>
             <h1>{titleBuy[1].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleBuy[1].adr}</h1>
             
           </div>
           </div>
       </div>
      
     </div>
     </Link>

  </div> :
   titleBuy.length === 1 ?
   <div className="con-a">
  <Link to={{pathname: `/comp/more/${titleBuy[0]._id}`}}>
   <div className="info-con-c">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
       <div className="tit-in">
         <h1>{titleBuy[0].prop} for {titleBuy[0].buy}</h1>
         <h1 className="li-price">${titleBuy[0].price}</h1>
       </div>
       </div>
         <div className="underline"></div>
         <div className="para-text">
             <h1>bed: {titleBuy[0].bed}</h1>
             <h1>bath: {titleBuy[0].bath}</h1>
             <h1>sqft: {titleBuy[0].sq}</h1>
         </div>
         <div className="city-text">
         <div className="ci">
             <h1>{titleBuy[0].city}</h1>
             <h1>{titleBuy[0].state}</h1>
             <h1>{titleBuy[0].zip}</h1>
           </div>
           <div className="ci">
             <h1>{titleBuy[0].adr}</h1>
             
           </div>
           </div>
       </div>
     
       </div>
       </Link>
     </div> : <div className="con">
       <div className="listing-box">
         <h1>there are no current listings</h1>
        </div>
      </div>}

  {/*----------------------------------------------------------------------------------------------------*/}
     </div>
     </div>

  );
}

export default Landing;