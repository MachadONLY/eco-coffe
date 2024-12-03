import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Artists from './components/Artists';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Artists />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;