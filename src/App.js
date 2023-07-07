import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/navbar';
import Project from './components/projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';




function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="Portfolio">
      <div className="content">
        <Header handlePageChange={handlePageChange} />
        <Project currentPage={currentPage} />
      </div>
      <div className="footer">
      {<Footer handlePageChange={handlePageChange}/>}
      </div>
    </div>
  );
}

export default App;
