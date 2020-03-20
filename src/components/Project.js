import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'


class Project extends React.Component {
  state = {
    projectImage: '',
    projectImageDetail: '',
    projectImageCode: '',
    projectTitle: '',
    projectDescription: '',
    projectGitHub: '',
    projectLink: '',
    modalDescription: '',
    modalDescriptionTwo: ''
  }

  componentDidMount() {
    this.setState ({
      projectImage: this.props.image,
      projectImageDetail: this.props.imageDetail,
      projectImageCode: this.props.imageCode,
      projectTitle: this.props.title,
      projectDescription: this.props.description,
      projectGithub: this.props.github,
      projectLink: this.props.link,
      modalDescription: this.props.modal,
      modalDescriptionTwo: this.props.modalTwo,
      modalOpen: false
    })
  }

  modalShow = e => {
    this.setState ({
      modalOpen: true
    })
  }

  modalHide = e => {
    this.setState ({
      modalOpen: false
    })
  }

  render () {
    return (
      <Col xs={12} sm={6} lg={4} className="mb-4">

      <>
        <Modal
          show={this.state.modalOpen}
          onHide={this.modalHide}
          dialogClassName="project-modal"
          aria-labelledby="project-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="project-modal-title">
              {this.state.projectTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>

              <Col md={6} sm={12}>
                <Carousel className="project-carousel">

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={this.state.projectImage}
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={this.state.projectImageDetail}
                      alt="Second slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={this.state.projectImageCode}
                      alt="Third slide"
                    />
                  </Carousel.Item>

                </Carousel>
                <hr />
              </Col>

              <Col md={6} sm={12} className="d-flex flex-column">
                <p>
                  {this.state.modalDescription}
                </p>
                <p>
                  {this.state.modalDescriptionTwo}
                </p>
                <Button className="mt-auto" href={this.state.projectLink} block size="sm" variant="success">Live Version</Button>
                <Button href={this.state.projectGithub} block size="sm" variant="primary">GitHub</Button>
                <hr className="w-100" />
              </Col>

            </Row>
          </Modal.Body>
        </Modal>
      </>

        <Card className="h-100" data-aos="fade-in">
          <Card.Img variant="top" src={this.state.projectImage} />
          <hr className="mt-0 pt-0 mb-0 pb-0 card-hr" />
          <Card.Body className="d-flex flex-column">
            <h3>{this.state.projectTitle}</h3>
            <hr className="project-title-hr mb-2 mt-1"/>
            <Card.Text>
              {this.state.projectDescription}
            </Card.Text>
            <Button className="mt-auto" onClick={this.modalShow} block size="sm" variant="primary">View Project</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}


export default Project
