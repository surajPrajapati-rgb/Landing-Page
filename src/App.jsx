
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import NavbarComponent from './components/navbar/NavbarComponent';
import User from './components/User';
import Projects from './components/Projects';
import Testimonial from './components/testimonial/Testimonial';
import FaqComponents from './components/FAQ/FaqComponents';
// import Contact from './components/contact/Contact';
import Footer from './components/Footer';


const faqData = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for a website depends on its complexity. Simple designs usually take a few weeks, while more complex ones can take several months."
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on the scope of work, the complexity of the design, and additional features. Contact us for a detailed quote."
  },
  {
    question: "What services do you offer exactly?",
    answer:
      "We offer a range of services including website design, development, SEO optimization, and more. Tailored to your needs!"
  },
  {
    question: "What if I have the website designed but need development only?",
    answer:
      "No problem! We can work with your design and focus solely on development."
  },
  {
    question: "Can you create custom illustrations, icons, or mockups for me?",
    answer:
      "Yes, we can design custom illustrations, icons, and mockups that align with your branding and website goals."
  }
];

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
