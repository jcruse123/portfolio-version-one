import React from 'react';
import { Parallax } from 'react-parallax'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import aperture from '../img/aperture.jpg'
import openTicket from '../img/open-ticket.jpg'
import portfolio from '../img/portfolio-bg.jpg'


const PortfolioProjects = () => {
  // Show projects as Bootstrap Cards in grid system
  return (
    <div style={{backgroundColor: 'black'}}>
      <Parallax
        className="project-bg"
        bgImage={require('../img/projects-bg.jpg')}
        bgImageAlt={'laptop'}
        strength={900}
        bgImageStyle={{width: '1080px', height: 'auto', backgroundPosition: 'center center'}}
      >
        <div id="project-section" data-aos="fade-in">
          <Container className="text-center" id="project-content">
            <h1 className="display-4" id="project-headline">Projects</h1>
            <hr className="pb-3" id="project-hr" />
            <Row>

              <Col xs={12} sm={6} lg={4} className="mb-4">
                <Card className="h-100" data-aos="fade-in">
                  <Card.Img variant="top" src={aperture} />
                  <hr className="mt-0 pt-0 mb-0 pb-0 card-hr" />
                  <Card.Body className="d-flex flex-column">
                    <h3>Aperture</h3>
                    <Card.Text>
                      Aperture is a place for photography enthusiasts to post their best photos.
                      Sign up to post your own photo and leave a five star rating on your favorite picture.
                    </Card.Text>
                    <Button className="mt-auto" href="https://aperture-photo.herokuapp.com/photos" block size="sm" variant="success">Live Version</Button>
                    <Button href="https://github.com/jcruse123/aperture-photo" block size="sm" variant="primary">GitHub</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} lg={4} className="mb-4">
                <Card className=" h-100" data-aos="fade-in">
                  <Card.Img variant="top" src={openTicket} />
                  <hr className="mt-0 pt-0 mb-0 pb-0 card-hr" />
                  <Card.Body className="d-flex flex-column">
                    <h3>Open Ticket</h3>
                    <Card.Text>
                      Open Ticket is an easy to use issue tracker powered by React.
                      Create a new ticket or track your progress on an existing ticket using journal entries.
                    </Card.Text>
                    <Button className="mt-auto" href="https://open-ticket-complete.herokuapp.com/" block size="sm" variant="success">Live Version</Button>
                    <Button href="https://github.com/jcruse123/open-ticket-complete" block size="sm" variant="primary">GitHub</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} lg={4} className="mb-4">
                <Card className="h-100" data-aos="fade-in">
                  <Card.Img variant="top" src={portfolio} />
                  <hr className="mt-0 pt-0 mb-0 pb-0 card-hr" />
                  <Card.Body className="d-flex flex-column">
                    <h3>Developer Portfolio</h3>
                    <Card.Text>
                      Custom built website to display my projects and allow anyone to easily send me a message.
                      No link provided - you're already here!
                    </Card.Text>
                    <Button className="mt-auto" href="https://github.com/jcruse123/portfolio" block size="sm" variant="primary">GitHub</Button>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Container>
        </div>
      </Parallax>
    </div>
  )
}


export default PortfolioProjects;
