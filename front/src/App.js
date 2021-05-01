import Home from './comp/home'
import About from './comp/about'
import Listing from './comp/listing'
import AllListings from './comp/allListings'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/comp/about" component={About} exact/>
      <Route path="/comp/listing" component={Listing} exact/>
      <Route path="/comp/allListings" component={AllListings} exact/>
    </Switch>
  </Router>
  );
}

export default App;
