import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import More from './components/More'
import Home from './components/Home'
import Follow from './components/Follow'
import Experience from './components/Experience'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Product from './components/Product'
// import Welcome from './components/Welcome'




function App() {
  return (
    <div>
   <Navbar />
   <Routes>

       {/* <Route  path='/' element={<Welcome />} /> */}
      <Route  path='/' element={<Home />} />
      <Route  path='/about' element={<About/>} />
      {/* ************************************************** */}
      <Route  path='/follow' element={<Follow/>} />
      <Route  path='/product' element={<Product/>} />
      <Route  path='/experience' element={<Experience/>} />
      {/* ************************************************* */}
      <Route  path='/services' element={<Services/>} />
      <Route  path='/portfolio' element={<Portfolio/>} />
      <Route  path='/contact' element={<Contact/>} />
      <Route  path='/more' element={<More/>} />
      {/* <Route  path='/' element={<Welcome />} /> */}
      
      <Route  path='/signup' element={<Signup/>} />
      <Route  path='/signin' element={<Signin/>} />


      {/* ************************************************* */}
      <Route  path='/*' element={<NotFound/>} />
      
   </Routes>
   
   <Footer/>
   </div>
  )
}

export default App
