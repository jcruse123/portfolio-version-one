import React from 'react';
import { Parallax } from 'react-parallax'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Project from './Project'
import randomWeather from '../img/projects/random-weather.jpg'
import randomWeatherDetail from '../img/projects/random-weather-detail.jpg'
import randomWeatherCode from '../img/projects/random-weather-code.jpg'
import nasaImage from '../img/projects/nasa-image.jpg'
import nasaImageDetail from '../img/projects/nasa-image-detail.jpg'
import nasaImageCode from '../img/projects/nasa-image-code.jpg'
import aperture from '../img/projects/aperture.jpg'
import apertureDetail from '../img/projects/aperture-detail.jpg'
import apertureCode from '../img/projects/aperture-code.jpg'
import openTicket from '../img/projects/open-ticket.jpg'
import openTicketDetail from '../img/projects/open-ticket-detail.jpg'
import openTicketCode from '../img/projects/open-ticket-code.jpg'
import portfolio from '../img/projects/portfolio.jpg'
import portfolioDetail from '../img/projects/portfolio-detail.jpg'
import portfolioCode from '../img/projects/portfolio-code.jpg'


const PortfolioProjects = () => {
  // Show row of Project components
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

              <Project
                image = {randomWeather}
                imageDetail = {randomWeatherDetail}
                imageCode = {randomWeatherCode}
                title = "Random Weather"
                description = "This application displays a number of locations along with weather data from those locations. Click on a map marker to display detailed weather information."
                github = "https://github.com/jcruse123/random-weather/"
                link = "https://random-weather.herokuapp.com/"
                modal = "This application consists of two parts. It uses a back end server built using Node.js and Express that makes use of two external APIs to get weather data about a specific number of random locations in the world. This data is then used by the front end to display the data on an interactive map. The front end is built using React and Mapbox."
                modalTwo= "The objective for this project is to gain experience integrating data from external APIs into an interactive front end."
              />

              <Project
                image = {nasaImage}
                imageDetail = {nasaImageDetail}
                imageCode = {nasaImageCode}
                title = "NASA Image Library"
                description = "NASA Image Library uses an API to view images in a collection provided by NASA. Click on an image to learn more about space exploration."
                github = "https://github.com/jcruse123/nasa-image/"
                link = "https://jcruse123.github.io/nasa-image/"
                modal = "This is a front end application made using React and Node.js. On the first page, a list of the most popular images from NASA's image library is displayed using an API endpoint. The search function uses a different endpoint that returns search results when provided with search terms."
                modalTwo = "The objective for this project is to gain experience integrating data from external APIs into an interactive front end."
              />

              <Project
                image = {openTicket}
                imageDetail = {openTicketDetail}
                imageCode = {openTicketCode}
                title = "Open Ticket"
                description = "Open Ticket is an easy to use issue tracker powered by React. Create a new ticket or track your progress on an existing ticket using journal entries."
                github = "https://github.com/jcruse123/open-ticket/"
                link = "https://open-ticket-complete.herokuapp.com"
                modal = "Open Ticket is an easy to use issue tracker powered by React. Create a new ticket or track your progress on an existing ticket using journal entries."
                modalTwo = ""
              />

              <Project
                image = {aperture}
                imageDetail = {apertureDetail}
                imageCode = {apertureCode}
                title = "Aperture"
                description = "Aperture is a place for photography enthusiasts to post their best photos. Sign up to post your own photo and leave a five star rating on your favorite picture."
                github = "https://github.com/jcruse123/aperture-photo"
                link = "https://aperture-photo.herokuapp.com/photos/"
                modal = "Aperture is a place for photography enthusiasts to post their best photos. Sign up to post your own photo and leave a five star rating on your favorite picture."
                modalTwo = ""
              />

              <Project
                image = {portfolio}
                imageDetail = {portfolioDetail}
                imageCode = {portfolioCode}
                title = "Developer Portfolio"
                description = "Custom web page to display my projects and allow anyone to easily send me a message."
                github = "https://github.com/jcruse123/portfolio-version-one/"
                link = "https://www.joshuacruse.us/"
                modal = "Custom web page to display my projects and allow anyone to easily send me a message."
                modalTwo = ""
              />

            </Row>
          </Container>
        </div>
      </Parallax>
    </div>
  )
}


export default PortfolioProjects;
