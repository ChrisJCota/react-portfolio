import React, { useState } from 'react';
import Bio from './components/Projects/Bio';
import Projects from './components/Projects/ProjectInfo';

function Project({ currentPage }) {
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <Bio />;
      case 'contact':
        return <Projects />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}

export default Portfolio;
