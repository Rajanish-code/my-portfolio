import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import Work from './component/Work';
import Footer from './component/Footer';
import Testimonial from './component/Testimonial';
 
function App() {
  return (
    <Router basename="/my-portfolio">
      <Header />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>
  )
}

export default App;
