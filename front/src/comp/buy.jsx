import Footer from './footer'
import Nav from './nav'
import Buy1 from './buy1'
import Axios from 'axios'
import React, {useEffect, useState} from 'react'
function Rent({titleArray}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [search, setSearch] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const title = search.filter(buy => {
    return buy.buy === 'Sell'
  })
  React.useEffect(() => {  
    
 
    Axios.get('/read').then((res) => {setSearch(res.data)})

  }, []) 
   
  const searchHandler = (searchTerm) => {
   setSearchTerm(searchTerm)
   if(searchTerm !== "") {
     const list = title.filter((search) => {
     return  Object.values(search).join(" ").toLowerCase().includes(searchTerm.toLowerCase()) 

   
     
     })
     setSearchResult(list)
   } else {
    setSearchResult(title)
   }
  }
  return (
    <>
    <Nav />
    <Buy1 titleArray={titleArray} searchHandler={searchHandler} searchTerm={searchTerm} 
       search={searchTerm.length < 1 ? title : searchResult}/>
    <Footer />
    </>
  );
}

export default Rent;