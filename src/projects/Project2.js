import React from 'react';
import Pdf from './../conrad_zborowski_resume.pdf' 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

const project2 = () => {
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
                <div className='project2 center margin-none no-hover'>
                    <div className='textContainer'>
                        <div className='toptext'>Mike's Calzones Updated</div>
                        <div className='bottomtext'>Prototyping and Redesigning a Website</div>
                    </div>
                </div>
                <b>I redesigned a local restaurant's website, and I wrote
                    Lo-fi and Hi-fi prototypes for the interface.</b>
                <br></br>
                <div> I started by creating a lo-fi prototype for the mobile, web and
                    tablet view of the website. After I created a lo-fi, I created
                    the hi-fi version of it next. Finally, I actually created the application
                    using HTML/CSS and React for some of responsive parts of the app.

                </div>
                <br></br>
                <div> Interesting in learning more about the project? Contact me at <a href=" mailto: conrad_zborowski@brown.edu">Conrad_Zborowski@brown.edu</a>
                </div>
            </div>
        </div>
    );
}

export default project2;