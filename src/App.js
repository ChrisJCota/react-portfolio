import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/navbar';
import Project from './components/projects';
// import Footer from './components/footer';




function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="Portfolio">
      <Header handlePageChange={handlePageChange} />
      <Project currentPage={currentPage} />
      {/* <Footer /> */}

    </div>
  );
}

export default App;
