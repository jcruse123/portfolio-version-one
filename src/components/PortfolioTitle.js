import React from 'react';
import { Parallax } from 'react-parallax'
import Container from 'react-bootstrap/Container'


const PortfolioTitle = () => {
  return (
    <div style={{backgroundColor: 'black'}} data-aos="fade-in">
      <Parallax
        className="title-bg"
        bgImage={require('../img/bg.jpg')}
        bgImageAlt={'laptop'}
        strength={500}
        bgImageStyle={{width: '1080px', height: 'auto'}}
      >
        <div id="title-section">
          <Container className="text-center" id="title-content">
            <h1 className="display-4">Joshua Cruse</h1>
            <hr id="title-hr" />
            <h1 className="display-4" id="tagline-text">Full Stack Developer</h1>
          </Container>
        </div>
      </Parallax>
    </div>
  )
}


export default PortfolioTitle;
