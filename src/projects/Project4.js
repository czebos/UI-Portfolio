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
                <div className='project4 center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext'>Stratum.ai R&D</div>
                        <div className='bottomtext'>Iteratively improving a Startup's interface</div>
                    </div>
                </div>
                <b>I Alpha/Beta tested a cactus website, and did analysis on the results.</b>
                <br></br>
                <div> I made changes to a cacti purchasing website and had two versions.
                   Different users used different versions of the website. I tracked the
                    clicks and time spent on the site via logs. With the results I saw
                    if one version had more time spent or had more clicks, using
                    statistical analysis.

                </div>
                <br></br>
                <div> Interesting in learning more about the project? Contact me at <a href=" mailto: conrad_zborowski@brown.edu">Conrad_Zborowski@brown.edu</a>
                </div>
            </div>
        </div>
    );
}

export default project3;