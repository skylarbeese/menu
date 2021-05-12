
import Footer from './footer'
import Nav from './nav'
import ListingPage from './listingPage'
function Listing(props) {
  return (
    <>
    <Nav />
    <ListingPage props={props}/>
    <Footer />
    </>
  );
}

export default Listing;