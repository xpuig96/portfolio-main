import React, { useState } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { TranslationProvider } from './components/TranslationContext';


const App = () => {
  return (
    <TranslationProvider>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </TranslationProvider>
  );
};

export default App;