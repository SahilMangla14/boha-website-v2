import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-scroll'
import { IIT_ROPAR } from '../assets';
import { Boha_logo } from '../assets';

const Topbar = () => {
    return (
        <div>
            <Navbar expand="lg" className="w-full bg-[rgb(25,25,25,0.8)] fixed-top">
                <Container className='flex ju'>
                    <div className='flex items-center justify-center'>
                        <img src={Boha_logo } alt="" className='rounded-full h-[50px] w-[50px] mr-4' />
                        <Navbar.Brand href="/" className='text-white'>
                            <div>
                                Board Of Hostel Affairs
                            </div>
                            <div>
                                IIT ROPAR
                            </div>
                        </Navbar.Brand>
                    </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto flex items-center justify-center hover:cursor-pointer">
                            <Link to="home" spy={true} smooth={true} offset={0} duration={500}><span className='text-white mr-4 hover:cursor-pointer'>Home</span></Link>
                            <Link to="about" spy={true} smooth={true} offset={0} duration={500}><span className='text-white mr-4 hover:cursor-pointer'>About</span></Link>
                            <Link to="message" spy={true} smooth={true} offset={0} duration={500}><span className='text-white mr-4 hover:cursor-pointer'>Message</span></Link>
                            <Link to="hostel" spy={true} smooth={true} offset={0} duration={500}><span className='text-white mr-4 hover:cursor-pointer'>Facilities</span></Link>
                            <Link to="events" spy={true} smooth={true} offset={0} duration={500}><span className='text-white mr-4 hover:cursor-pointer'>Events</span></Link>
                            <Link to="gallery" spy={true} smooth={true} offset={0} duration={500}><span className='text-white mr-4 hover:cursor-pointer'>Gallery</span></Link>
                                {/* About */}
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='text-white'>
                                    <NavDropdown.Item href="#action/3.1" className='text-white'>Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className='text-white'>
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className='text-white'>Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" className='text-white'>
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                        </Navbar.Collapse>
                    </div>

                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar
