import React from 'react'
import Navbar from './Components/Navbar'
import PricingCards from './Pages/PriceCard'
import {Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer'
import ContactForm from './Pages/ContactForm'

const App = () => {
  return (
    <>
    
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
    </>
  )
}

export default App
