import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import home from '../ico/home.svg'
import person from '../ico/person.svg'
import list from '../ico/list.svg'
import email from '../ico/email.svg'


const PortfolioNavbar = () => {
  // Generate navbar fixed at top of screen
  return (
    <div>
    <Navbar id="dark-navbar" fixed="top" bg="dark" variant="dark" data-aos="fade-in">
      <Nav className="ml-auto mr-auto">
        <Nav.Link className="text-white" href="#title-section"><img className="icon" src={home} alt="home" /></Nav.Link>
        <Nav.Link className="text-white" href="#about-section"><img className="icon" src={person} alt="person" /></Nav.Link>
        <Nav.Link className="text-white" href="#project-section"><img className="icon" src={list} alt="list" /></Nav.Link>
        <Nav.Link className="text-white" href="#contact-section"><img className="icon" src={email} alt="email" /></Nav.Link>
      </Nav>
    </Navbar>
    </div>
  )
}


export default PortfolioNavbar
