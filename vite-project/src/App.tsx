import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portafolio from './components/Portafolio'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Portafolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;