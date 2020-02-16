import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import headshot from '../img/headshot.jpg'
import mongo from '../img/logo/mongo-db.png'
import express from '../img/logo/express.png'
import react from '../img/logo/react.png'
import node from '../img/logo/node-js.png'


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
        <Row className="about-logos-row pt-4">
          <Col sm={12} className="mt-3">
            <img className="about-logos" src={node} alt="mongo db" />
          </Col>
          <Col sm={12} className="mt-3">
            <img className="about-logos" src={react} alt="mongo db" />
          </Col>
          <Col sm={12} className="mt-3">
            <img className="about-logos" src={express} alt="mongo db" />
          </Col>
          <Col sm={12} className="mt-3">
            <img className="about-logos" src={mongo} alt="mongo db" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default PortfolioAbout;
