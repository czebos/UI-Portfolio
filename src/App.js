import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import CypherText from 'react-cypher-text-loop'
import { Cpu, ArrowDown } from 'react-bootstrap-icons';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Pdf from './conrad_zborowski_resume.pdf' 
import img from './Conrad2.png'

import { SocialIcon } from 'react-social-icons';



const texts = ["I'm Conrad Zborowski.", "I'm a UI/UX Developer."]


function App() {

  return (
      <div className="App">

          <header className="App-header">
          </header>

          <body>
              <Navbar className='NavBarYo' variant="dark">
                  <div className='home-icon'href="#home">CZ</div>
                  <Nav className="right">
                      <Nav.Link href="#projects">Projects</Nav.Link>
                      <Nav.Link href="#contact">Contact</Nav.Link>
                      <Nav.Link href={ Pdf}>Resume</Nav.Link>
                  </Nav>
              </Navbar>
              <CypherText className='movingtext' placeholders="_" delay={2000} textList={texts} />
              <Cpu className='cpu' />
              <p className="para">I am a Software Developer and UI/UX engineer based in Chicago.</p>
              <p className="smaller-para">UI/UX Projects</p>
              <a href='#projects'> <ArrowDown /> </a>
              <div id="projects" className="collection">
                  <div className='project'>
                      <div className='textContainer'>
                          <div className='toptext'>Super Smash Filter</div>
                          <div className='bottomtext'>Desiging and Implementing a React App</div>
                      </div>
                  </div>
                  <div className='project2'>
                      <div className='textContainer'>
                          <div className='toptext'>Mike's Calzones Updated</div>
                          <div className='bottomtext'>Prototyping and Redesigning a Website</div>
                      </div>
                  </div>
                  <div className='project3'>
                      <div className='textContainer'>
                          <div className='toptext'>Stratum.ai R&D</div>
                          <div className='bottomtext'>Iteratively improving a Startup's interface</div>
                      </div>
                  </div>
                  <div className='project4'>
                      <div className='textContainer'>
                          <div className='toptext'>Cacti Shopping Preference</div>
                          <div className='bottomtext'>A/B Testing on Cactus shopping</div>
                      </div>
                  </div>
              </div>
              <div id='contact'>
                  <div className="title-contact"> Lets get in Contact</div>
                  <div className="social-media">
                      <SocialIcon className='icon-so' url="https://facebook.com/conrad.zborowski" />
                      <SocialIcon className='icon-so' url="https://linkedin.com/in/conrad-zborowski/" />
                      <SocialIcon className='icon-so' url="https://github.com/czebos" />
                      <SocialIcon className='icon-so' url="https://instagram.com/conradzftw/i" />

                  </div>
                  <div className="contact-container">
                      <div className='wrapper1'> <img className='me-img' src={img} /> </div>
                      <div className='wrapper2'>
                          <b className='contact-title'>Intersted in Learning More?</b>
                          <div className='contact-para'>Feel free to shoot me an email at <a href=" mailto: conrad_zborowski@brown.edu">Conrad_Zborowski@brown.edu</a>.
                            I would love to talk to you about my portfolio, my CS goals, possible inquiries or even my favorite activies like
                              lifting and gaming.
                          </div>
                      </div>
                  </div>
              </div>

          </body>
           

    </div>
  );
}

export default App;
