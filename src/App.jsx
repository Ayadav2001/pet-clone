import React from 'react'
<<<<<<< HEAD
import About from './Pages/About'
import BlogSection from './Pages/Blog'
=======
import Navbar from './Components/Navbar'
import PricingCards from './Pages/PriceCard'
import {Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer'
import ContactForm from './Pages/ContactForm'
>>>>>>> 19b90342d4de3c8f6cc286a8ccb29840c15738a5

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <About/>
      <BlogSection/>
=======
    
    <Navbar/> 
    <Routes>
      <Route path="/priceCard" element={<PricingCards/>}/>
      {/* <Route path="/About" element={< About/>}/>
      <Route path="/Service" element={<Service/>}/> */}
      <Route path="/ContactForm" element={<ContactForm />}/>
      {/* <Route path="/Prices" element={<Prices />}/> */}
      {/* <Route path="/TestimonialSlider" element={<TestimonialSlider />}/>
      <Route path="/Features" element={<Features />}/>
      <Route path="/FreeQuates" element={<FreeQuates />}/>
      <Route path="/Blog" element={<Blog />}/> */}
    </Routes>

  
    
    <Footer/> 
>>>>>>> 19b90342d4de3c8f6cc286a8ccb29840c15738a5
    </>
  )
}

export default App
