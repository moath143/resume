import React from 'react'
import Slider from '../../Components/Slider';
import About from '../../Components/About';
import Services from '../../Components/Services';
import SomeFacts from '../../Components/SomeFacts';
import Portfolio from '../../Components/Portfolio';
import Testimonials from '../../Components/Testimonials';
import Blog from '../../Components/Blog';
import Contact from '../../Components/Contact';


import './home.css'



const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <SomeFacts />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />

    </>
  );
}

export default Home