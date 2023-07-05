import React from 'react';
import Nav from 'react-bootstrap/Nav';

import Image from 'react-bootstrap/Image';
import profilePhoto from '../assets/photos/profilePhoto.JPG'

function Bio() {
  return (
    <Nav className="nav column nav-2 justify-content-center">
      <h2 className="display-3 nav-header">Welcome to my Portfolio!</h2>
      <div className="row">
        <div className="col col-2">
          <Image src={profilePhoto} className="img-thumbnail" alt="Profile Picture" />
        </div>
        <p className="bio col-10 fs-6">My name is Chris Cota, and I'm a 26-year-old Web Developer from Boston, MA. <br /><br />I started my web development journey a couple of years back after spending many years as a sales consultant.
          In the last year, I have taken up numerous projects. In December 2022 I began a full-stack web development bootcamp at the University of New Hampshire that I later completed in June of 2023. <br /><br />
          My passions are food, Boston sports, watching movies, playing video games, and checking out local restaurants and breweries. </p>
          
      </div>
    </Nav>
  );
}

export default Bio;
