import Home from './comp/home'
import About from './comp/about'
import Listing from './comp/listing'
import AllListings from './comp/allListings'
import Rent from './comp/rent'
import Axios from 'axios'
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  const [titleArray, setTitleArray] = React.useState([])
  React.useEffect(() => {
    Axios.get('/read').then((res) => { setTitleArray(res.data)})
   
  }, [])
  return (
    <Router>
    <Switch>
      
      <Route path="/" exact><Home titleArray={titleArray}/></Route>
      <Route path="/comp/about" component={About} exact/>
      
      <Route path="/comp/listing" exact><Listing /></Route>
      <Route path="/comp/allListings" exact><AllListings titleArray={titleArray}/></Route>
      <Route path="/comp/rent" exact><Rent titleArray={titleArray}/></Route>
    </Switch>
  </Router>
  );
}

export default App;
