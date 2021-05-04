import './Home.css';
import Footer from './footer'
import Nav from './nav'
import Landing from './landing'
function Home({titleArray}) {
  return (
    <>
    <Nav />
    <Landing titleArray={titleArray}/>
    <Footer />
    </>
  );
}

export default Home;