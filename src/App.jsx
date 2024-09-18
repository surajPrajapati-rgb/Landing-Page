
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import NavbarComponent from './components/NavbarComponent';
import User from './components/User';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import FaqComponents from './components/FaqComponents';
import faqData from './components/faqData.json'
// import Contact from './components/contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
     <>
      <NavbarComponent/>
      <Header/> 
      <User/>
      <Projects/>
      <Testimonial/>
      <FaqComponents faqData={faqData}/>
      <Footer/>
      </>
  )
}

export default App;
