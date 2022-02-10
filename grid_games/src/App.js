// import outrun from './images/outrun2.jpeg';
import event from './images/event.jpeg'
import logo from './images/Logo.png';
import mtgLogo from './images/mtglogo.png';
import yugiohLogo from './images/yugiohlogo.png';
import pokemonLogo from './images/pokemonlogo.png';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.css';

class Navbarr extends React.Component {

  render() {
    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home"><img
            src={logo}
            width="60"
            height="100%"
            className='d-inline-block align-top'
            alt='logo'
          ></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Events">Events</Nav.Link>
              <Nav.Link href="#AboutUs">About Us</Nav.Link>
              <Nav.Link href="#ContactUs">Contact Us</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="https://www.facebook.com/GridGamesCT"><FontAwesomeIcon icon={faFacebook} size='2x'/></Nav.Link>
              <Nav.Link href="https://www.instagram.com/thegridgames/"><FontAwesomeIcon icon={faInstagram} size='2x'/></Nav.Link>
              <Nav.Link href="https://twitter.com/TheGridGames/"><FontAwesomeIcon icon={faTwitter} size='2x'/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div id='Home'>
        {/* <img src={outrun} alt="background" className='background'></img> */}
        <img src={logo} alt="Home Logo" className="homeLogo"></img>
      </div>
    )
  }
}

class Events extends React.Component {

  render() {
    return (
      <div id='Events' className='GridBG'>
        <div className='TitleCont'>
          <h2 className='Title'>Events</h2>
        </div>
        <div className="SectionCont">
          <Row>
            <Col sm={12} md={4} className='EventCard'>
              <img src={mtgLogo} alt='Magic the Gathering Logo' className='Logo' />
              <ul className='EventList'>
                <li><span className="date">Fridays 6pm</span> - <span className='Money'>$5</span> FNM Standard</li>
                <li><span className="date">Saturdays 2pm</span> - <span className='Money'>$15</span> Booster Draft</li>
                <li><span className="date">Saturdays 3pm</span> - Commander</li>
                <li><span className="date">Sundays 1pm</span> - <span className='Money'>$5</span> Modern</li>
              </ul>
            </Col>
            <Col sm={12} md={4} className='EventCard'>
              <img src={yugiohLogo} alt='Yugioh Logo' className='Logo' />
              <ul className='EventList'>
                <li><span className="date">Mondays 6:30pm</span> - <span className='Money'>$5</span> Advanced (Includes OTS Booster)</li>
                <li><span className="date">Fridays 6:30pm</span> - <span className='Money'>$5</span> Advanced (Includes OTS Booster)</li>
                <li><span className="date">Saturdays 1pm</span> - <span className='Money'>$5</span> Advanced (Includes OTS Booster)</li>
              </ul>
            </Col>
            <Col sm={12} md={4} className='EventCard Pokemon'>
              <img src={pokemonLogo} alt='Pokemon Logo' className='Logo' />
              <ul className='EventList'>
                <li><span className="date">Sundays 1pm</span> - <span className='Money'>$5</span> Standard</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

class AboutUs extends React.Component {

  render() {
    return (
      <div id='AboutUs'>
        <div className='TitleCont'>
          <h2 className='Title'>About Us</h2>
        </div>
        <div className='SectionCont GridBG'>
          <Row>
            <Col md={6} className='EventCard'>
              <img src={event} alt='A Magic the Gathering tournament' className='EventPhoto'></img>
            </Col>
            <Col md={6} className='EventCard'>
              <p className='AboutUsText'>For the past 28 years The Grid Games has served the Connecticut gaming community. We hold daily gaming tournaments and carry a full line of CCG's, Board Games, Video Games,  RPG's and gaming accessories.</p>
              <br /><div className='TitleCont'>
                <h2 className='Title'>Hours:</h2></div>
              <ul className='EventList'>
                <li>MON 12-9</li>
                <li>TUE-THU 12-6</li>
                <li>FRI 12-9</li>
                <li>SAT 12-6</li>
                <li>SUN 12-5</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

class ContactUs extends React.Component {
  
  render() {
    var mapStyle = {
    border:"0"}
    return (
      <div id="ContactUs">
        <div className='TitleCont'>
          <h2 className='Title'>Contact Us</h2>
        </div>
        <div className='SectionCont GridBG'>
          <Row>
            <Col md={6} sm={12} className='EventCard'>
              <p className='AboutUsText'>52 Purnell Place
                <br />
                Manchester, Ct. 06040
                <br />
                860-645-9006
                <br />
                The_Grid@yahoo.com</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.679127144995!2d-72.52255938456229!3d41.7705754792309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e659df7cf9ab09%3A0x8c80af51d55c79b0!2sThe%20Grid%20Games!5e0!3m2!1sen!2sus!4v1644251012385!5m2!1sen!2sus" 
                  title='map'
                  width="max-content" 
                  height="350px" 
                  style={mapStyle}
                  allowfullscreen="" 
                  loading="lazy"></iframe>
                  <div width="100%" />
            </Col>
            <Col md={6} sm={12} className='EventCard '>
              <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="FormControlFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="Kevin"/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="FormControlLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Flynn"/>
                  </Form.Group>
                </Col>
              </Row>
                <Form.Group className="mb-3" controlId="FormControlEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="KFlynn@Encom.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormControlTextarea">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder='The Grid...' />
                </Form.Group>
                <Button type="submit" >Submit</Button>
              </Form>
              <div width="100% "/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Home />
      <Events />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
