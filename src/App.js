import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import aperture from './img/aperture-2.jpg'
import openTicket from './img/open-ticket.jpg'
import portfolio from './img/portfolio-bg.jpg'
import headshot from './img/headshot.jpg'
import home from './ico/home.svg'
import person from './ico/person.svg'
import list from './ico/list.svg'
import email from './ico/email.svg'


class App extends React.Component {

  state = {
    name: '',
    email: '',
    message: ''
  }

  onNameChange(event) {
	   this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	   this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	   this.setState({message: event.target.value})
  }

  render() {
    return (
      <div>

        <div>
        <Navbar id="dark-navbar" fixed="top" bg="dark" variant="dark">
          <Nav className="ml-auto mr-auto">
            <Nav.Link className="text-white" href="#title-section"><img className="icon" src={home} alt="home" /></Nav.Link>
            <Nav.Link className="text-white" href="#about-section"><img className="icon" src={person} alt="person" /></Nav.Link>
            <Nav.Link className="text-white" href="#project-section"><img className="icon" src={list} alt="list" /></Nav.Link>
            <Nav.Link className="text-white" href="#contact-section"><img className="icon" src={email} alt="email" /></Nav.Link>
          </Nav>
        </Navbar>
        </div>

        <div id="title-section">
          <Container className="text-center" id="title-content">
            <h1 className="display-4">Joshua Cruse</h1>
            <hr id="title-hr" />
            <h1 className="display-4" id="tagline-text">Full Stack Developer</h1>
          </Container>
        </div>

        <div id="about-section">
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

        <div id="project-section">
          <Container className="text-center" id="project-content">
            <h1 className="display-4" id="project-headline">Projects</h1>
            <hr className="pb-3" id="project-hr" />
            <Row>
              <Col xs={12} sm={6} lg={4} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src={aperture} />
                  <hr className="mt-0 pt-0 mb-0 pb-0 card-hr" />
                  <Card.Body className="d-flex flex-column">
                    <h3>Aperture</h3>
                    <Card.Text>
                      Aperture is a place for photography enthusiasts to post their best photos.
                      Sign up to post your own photo and leave a five star rating on your favorite picture.
                    </Card.Text>
                    <Button className="mt-auto" href="https://github.com/jcruse123/aperture-photo" block size="sm" variant="primary">GitHub</Button>
                    <Button href="https://aperture-photo.herokuapp.com/photos" block size="sm" variant="success">Live Version</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} lg={4} className="mb-4">
                <Card className=" h-100">
                  <Card.Img variant="top" src={openTicket} />
                  <hr className="mt-0 pt-0 mb-0 pb-0 card-hr" />
                  <Card.Body className="d-flex flex-column">
                    <h3>Open Ticket</h3>
                    <Card.Text>
                      Open Ticket is an easy to use issue tracker powered by React.
                      Create a new ticket or track your progress on an existing ticket using journal entries.
                    </Card.Text>
                    <Button className="mt-auto" href="https://github.com/jcruse123/open-ticket" block size="sm" variant="primary">GitHub</Button>
                    <Button href="https://open-ticket.herokuapp.com" block size="sm" variant="success">Live Version</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} lg={4} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src={portfolio} />
                  <hr className="mt-0 pt-0 mb-0 pb-0 card-hr" />
                  <Card.Body className="d-flex flex-column">
                    <h3>Developer Portfolio</h3>
                    <Card.Text>
                      Custom built website to display my projects and allow anyone to easily send me a message.
                      No link provided - you're already here!
                    </Card.Text>
                    <Button className="mt-auto" href="https://github.com/jcruse123/portfolio-version-one" block size="sm" variant="primary">GitHub</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div id="contact-section">
          <Container className="text-center" id="contact-content">
            <h1 className="display-4" id="contact-headline">Contact</h1>
            <hr className="mb-5" id="about-hr"/>

            <Card className="pb-3 pt-3 mr-auto ml-auto" id="contact-card">
              <Container>
                <form className="" id="contact-form" action="https://formspree.io/jcruse123@gmail.com" method="POST">
              	<div className="form-group">
                  	<label htmlFor="name">Your Name</label>
                  	<input type="text" className="form-control text-center" name="name" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              	</div>
              	<div className="form-group">
                  	<label htmlFor="exampleInputEmail1">Your E-mail Address</label>
                  	<input type="email" className="form-control text-center" name="email" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              	</div>
              	<div className="form-group">
                  	<label htmlFor="message">Message</label>
                  	<textarea className="form-control" rows="5" name="message" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              	</div>
              	<button type="submit" className="btn btn-block btn-primary">Submit</button>
              	</form>
              </Container>
            </Card>

            <div className="mt-5">
              <p>jcruse123@gmail.com</p>
              <p>Denver, CO</p>
            </div>

          </Container>
        </div>

      </div>
    )
  }
}


export default App;
