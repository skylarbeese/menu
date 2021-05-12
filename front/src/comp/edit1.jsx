import './Footer.css';
import Edit from './edit'
import Nav from './nav'
import Footer from './footer'
function Edit1(props) {
  return (
   <>
   <Nav />
   <Edit {...props}/>
   <Footer />
   </>
  );
}

export default Edit1;