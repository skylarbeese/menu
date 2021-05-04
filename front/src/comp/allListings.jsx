import React, {useEffect, useState} from 'react'
import Footer from './footer'
import Nav from './nav'
import AllListings1 from './allListings1';
import Axios from 'axios'
function AllListings({titleArray}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [search, setSearch] = useState([])
  const [searchResult, setSearchResult] = useState([])
  React.useEffect(() => {  
    
 
    Axios.get('/read').then((res) => {setSearch(res.data)})

  }, []) 
   
  const searchHandler = (searchTerm) => {
   setSearchTerm(searchTerm)
   if(searchTerm !== "") {
     const list = search.filter((search) => {
     return  Object.values(search).join(" ").toLowerCase().includes(searchTerm.toLowerCase()) 

   
     
     })
     setSearchResult(list)
   } else {
    setSearchResult(search)
   }
  }
  return (
    <>
   <Nav />
   <AllListings1 titleArray={titleArray} searchHandler={searchHandler} searchTerm={searchTerm} 
       search={searchTerm.length < 1 ? search : searchResult}/>
   <Footer />
    </>
  );
}

export default AllListings;