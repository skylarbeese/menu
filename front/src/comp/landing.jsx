import './Landing.css';
import {Link} from "react-router-dom"
function Landing({titleArray}) {
 // const le = titleArray.length
 // console.log(le)
 const title = titleArray.filter(rent => {
  return rent.buy === 'Rent'
})
const titleBuy = titleArray.filter(buy => {
  return buy.buy === 'Buy'
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
    {titleArray.length > 1 ? <div className="con">
  
    <div className="info-con">
       <div className="info-box-con">
       <div className="image-box"></div>
         <div className="text-info">
           <h1>{titleArray[0].buy}</h1>
           <div className="underline"></div>
           <p>
           {titleArray[0].des}
           </p>
         </div>
         </div>
       </div>

       <div className="info-con">
       <div className="info-box-con">
       <div className="image-box"></div>
         <div className="text-info">
           <h1>{titleArray[1].buy}</h1>
           <div className="underline"></div>
           <p>
           {titleArray[1].des}
           </p>
         </div>
         </div>
       </div>

     </div> : 
     titleArray.length === 1 ?
     <div className="con">
     <div className="info-con">
       <div className="info-box-con">
       <div className="image-box"></div>
         <div className="text-info">
           <h1>{titleArray[0].buy}</h1>
           <div className="underline"></div>
           <p>
           {titleArray[0].des}
           </p>
         </div>
         </div>
         </div>
       </div> : <div className="con">
         <div className="listing-box">
           <h1>there are no current listings</h1>
          </div>
        </div>}

        <div className="text-link"><Link to="./comp/rent"><h1>see all rent listings</h1></Link></div>

        {title.length > 1 ? <div className="con">
  
  <div className="info-con">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
         <h1>{title[0].buy}</h1>
         <div className="underline"></div>
         <p>
         {title[0].des}
         </p>
       </div>
       </div>
     </div>

     <div className="info-con">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
         <h1>{title[1].buy}</h1>
         <div className="underline"></div>
         <p>
         {title[1].des}
         </p>
       </div>
       </div>
     </div>

   </div> : 
   title.length === 1 ?
   <div className="con">
   <div className="info-con">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
         <h1>{title[0].buy}</h1>
         <div className="underline"></div>
         <p>
         {title[0].des}
         </p>
       </div>
       </div>
       </div>
     </div> : <div className="con">
       <div className="listing-box">
         <h1>there are no current listings</h1>
        </div>
      </div>}


      <div className="text-link"><Link to="./comp/buy"><h1>see all buying listings</h1></Link></div>

        {titleBuy.length > 1 ? <div className="con">
  
  <div className="info-con">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
         <h1>{titleBuy[0].buy}</h1>
         <div className="underline"></div>
         <p>
         {titleBuy[0].des}
         </p>
       </div>
       </div>
     </div>

     <div className="info-con">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
         <h1>{titleBuy[1].buy}</h1>
         <div className="underline"></div>
         <p>
         {titleBuy[1].des}
         </p>
       </div>
       </div>
     </div>

   </div> : 
   titleBuy.length === 1 ?
   <div className="con">
   <div className="info-con">
     <div className="info-box-con">
     <div className="image-box"></div>
       <div className="text-info">
         <h1>{titleBuy[0].buy}</h1>
         <div className="underline"></div>
         <p>
         {titleBuy[0].des}
         </p>
       </div>
       </div>
       </div>
     </div> : <div className="con">
       <div className="listing-box">
         <h1>there are no current listings</h1>
        </div>
      </div>}

     
     </div>
     </div>

  );
}

export default Landing;