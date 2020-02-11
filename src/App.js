import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import aperture from './img/aperture-2.jpg'
import openTicket from './img/open-ticket.jpg'


class App extends React.Component {
  render() {
    return (
      <div>

        <div id="title-section">
          <Container className="text-center" id="title-content">
            <h1 className="display-4">Joshua Cruse</h1>
            <hr id="title-hr" />
            <h1 className="display-4" id="tagline-text">Fullstack Developer</h1>
          </Container>
        </div>

        <div id="about-section">
          <Container className="text-center" id="about-content">
            <h1 className="display-4" id="about-headline">About Me</h1>
            <hr id="about-hr"/>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </Container>
        </div>

        <div id="project-section">
          <Container className="text-center" id="project-content">
            <h1 className="display-4" id="project-headline">Projects</h1>
            <hr className="pb-3" id="project-hr" />
            <Row>
              <Col xs={12} sm={6} lg={6}>
                <Card className="mb-3">
                  <Card.Img variant="top" src={aperture} />
                  <hr className="mt-0 pt-0 mb-0 pb-0 card-hr" />
                  <Card.Body>
                    <h3>Aperture</h3>
                    <Card.Text>
                      Aperture is a place for photography enthusiasts to post their photos. Sign up to post your own photo and leave a five star rating on your favorite picture.
                    </Card.Text>
                    <Button href="https://github.com/jcruse123/aperture-photo" block size="sm" variant="primary">GitHub</Button>
                    <Button href="https://aperture-photo.herokuapp.com/photos" block size="sm" variant="success">Live Version</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} lg={6}>
                <Card className="mb-3">
                  <Card.Img variant="top" src={openTicket} />
                  <hr className="mt-0 pt-0 mb-0 pb-0 card-hr" />
                  <Card.Body>
                    <h3>Open Ticket</h3>
                    <Card.Text>
                      Open Ticket is an easy to use issue tracker powered by React. Create a new ticket or track your progress on an existing ticket with journal entries.
                    </Card.Text>
                    <Button href="https://github.com/jcruse123/open-ticket" block size="sm" variant="primary">GitHub</Button>
                    <Button href="https://open-ticket.herokuapp.com" block size="sm" variant="success">Live Version</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div id="contact-section">
          <Container className="text-center" id="contact-content">
            <h1 className="display-4" id="contact-headline">Contact Me</h1>
            <hr id="about-hr"/>
            <p>Contact Form goes here.</p>
            <p>jcruse123@gmail.com</p>
            <p>Denver, CO</p>
          </Container>
        </div>

      </div>
    )
  }
}


export default App;
