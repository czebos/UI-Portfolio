import React from 'react';
import Pdf from './../conrad_zborowski_resume.pdf' 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

const project1 = () => {
    return (
        <div>
            <Navbar className='NavBarYo' variant="dark">
                <div className='home-icon' href="#home">CZ</div>
                <Nav className="right">
                    <Link className='navbar-other' to="/">Projects</Link>
                    <Link className='navbar-other' to="/">Contact</Link>
                    <Nav.Link href={Pdf}>Resume</Nav.Link>
                </Nav>
            </Navbar>
                <div className='backbar'>
                    <Link to='/'><Button variant='light' className='back-button'> <ArrowLeft /> Back </Button></Link>
                </div>
            <div className='centered'>
                <div className='project center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext'>Super Smash Filter</div>
                        <div className='bottomtext'>Desiging and Implementing a React App</div>
                    </div>
                </div>
                <b>I created a React app that implements a list interface. I designed
                 the architecture and the implmented the details.</b>
                <br></br>
                <div> You can access the application <a href="https://radiant-brook-21957.herokuapp.com/">here.</a>
                The react app used bootstrap and a few other visual frameworks. The application took
                advantage of react state, componentes and props.<br></br> I created a way to filter the list, sort
                the list, and aggregate items from the list. The theme of the application was
                 creating a Super Smash Bros Team from a list of characters.
                </div>
                <br></br>
                <div> Interesting in learning more about the project? Contact me at <a href=" mailto: conrad_zborowski@brown.edu">Conrad_Zborowski@brown.edu</a>
                </div>
            </div>
        </div>
    );
}

export default project1;