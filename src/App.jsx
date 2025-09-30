import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Sustainability from './components/Sustainability';
import Technology from './components/Technology';
import Safety from './components/Safety';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Sustainability />
      <Technology />
      <Safety />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;