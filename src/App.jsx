import React from 'react'
import "./App.css"


import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Fees from './Components/Fees/Fees'
import FAQ from './Components/FAQ/FAQ'
import Footer from './Components/FOOTER/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Contact from './Components/Contact/Contact';


const faqData = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.'
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions via Zoom.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice required.'
  }
];



const App = () => {
  return (

    <Routes>
      <Route path='/' element={
   <>
    <Hero/>
    <About/>
    <Services/>
    <Fees/>
    <FAQ faq = {faqData}/>
    <Footer/>
    </>
      }/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

 
  )
}

export default App