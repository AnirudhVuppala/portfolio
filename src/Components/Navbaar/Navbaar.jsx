/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './Navbaar.css';

function Navbaar() {
    return (
        <Navbar fixed="top" expand="lg" className="navv shadow-lg px-3 py-3">
            <Navbar.Brand className="brand ms-lg-4" href="#home">
                    <img src="./002.jpg" alt="my" className="myimg" />
                    ANIRUDH VUPPALA
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
                <Nav className="ms-lg-auto">
                    <Nav.Link className="mx-3 text-start" href="#about">// ABOUT</Nav.Link>
                    <Nav.Link className="mx-3 text-start" href="#project">// PROJECTS</Nav.Link>
                    <Nav.Link className="mx-3 text-start" href="#contact">// CONTACT</Nav.Link>
                    <Nav.Link className="mx-3 text-start" href="https://docs.google.com/document/d/19p-A0tpgMlVyMb4LBEe9RX5RwdrJdAWqn44JFllEKjc/edit?usp=sharing">// RESUME</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbaar;
