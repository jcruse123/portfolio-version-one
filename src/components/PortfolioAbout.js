import React from 'react';
import Container from 'react-bootstrap/Container';
import headshot from '../img/headshot.jpg'


const PortfolioAbout = () => {
  return (
    <div id="about-section" data-aos="fade-in">
      <Container className="text-center" id="about-content">
        <div>
          <img id="headshot" src={headshot} alt="headshot" />
        </div>
        <h1 className="display-4" id="about-headline">About Me</h1>
        <hr id="about-hr"/>
        <p>
          I build full stack web applications using effective, minimalist designs.
          Take a look at my <a href="#project-section">projects</a> to learn more.
          Feel free to <a href="#contact-section">contact</a> me at any time.
        </p>
      </Container>
    </div>
  )
}


export default PortfolioAbout;
