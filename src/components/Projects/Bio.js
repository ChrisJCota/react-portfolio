import React from 'react';

function Bio(){
return(
<Nav className="nav column nav-2 justify-content-center">
   <h2 className="display-3 nav-header">Welcome to my Portfolio!</h2>
   <div className="row">
    <div className="col col-2 "><img src="docs/assets/images/profile-photo.JPG" class="img-thumbnail" alt="..."></div>
    <p className="bio col-10 fs-6">My name is Chris Cota and I'm a  26 year old Web Developer from Boston, MA. <br> <br> I started my web development journey a couple years back after spending many years as sales consultant. 
  In the last year I have taken up numerous projects and  in Devember 2022 began a full stack web development bootcamp at the University of New Hampshire that will be completed in June 2023. <br> <br>
  Below are the projects that I have embarked upon in the last year. Some are fully deployed projects while others are done from the command line.</p>
  </Nav>
);
}

export default Bio;
