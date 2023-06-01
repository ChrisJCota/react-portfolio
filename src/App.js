import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/navbar';
import Portfolio from './components/projects';
import Footer from './components/footer';




function App() {
  return (
    <div className="Portfolio">
      <Header />
      <Portfolio />
      <Footer />
      
    </div>
  );
}

export default App;
