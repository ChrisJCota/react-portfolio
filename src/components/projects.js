import React, { useState } from 'react';
import Bio from './Projects/Bio';
import Projects from './Projects/ProjectInfo';

function Project({ currentPage }) {
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <Bio />;
      case 'projects':
        return <Projects />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}

export default Project;
