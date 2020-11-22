import React from 'react';
import Pdf from './../conrad_zborowski_resume.pdf' 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

const project3 = () => {
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
                <div className='project3 center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext'>Stratum.ai R&D</div>
                        <div className='bottomtext'>Iteratively improving a Startup's interface</div>
                    </div>
                </div>
                <b>Using multiple levels of feedback, we redesigned the interface for a startup.</b>
                <br></br>
                <div> We created Hi-fi prototypes of the startup's website, and had multiple
                    users use the interface and critique what they liked about it and things
                    they thought we should change. We had random users and UI/UX designers
                    look at it, then we changed the interface based on the feedback.

                </div>
                <br></br>
                <div> Interesting in learning more about the project? Contact me at <a href=" mailto: conrad_zborowski@brown.edu">Conrad_Zborowski@brown.edu</a>
                </div>
            </div>
        </div>
    );
}

export default project3;