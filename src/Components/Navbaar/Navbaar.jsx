/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './Navbaar.css';

function Navbaar() {
    const handleNavClick = (sectionId) => {
        const section = document.querySelector(sectionId);
        let offset // Adjust the offset as needed
        if(sectionId === "#about") {
            offset = -75;
        } else {
            offset = -90;
        }
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };
    return (

        <Navbar fixed="top" className="navv d-flex justify-content-center shadow-lg rounded">
            <div className="mx-5 align-items-center d-flex my-2 flex-fill justify-content-between">
                <Navbar.Brand className="brand" href="#home">
                    <img src="./002.jpg" alt="my" className="myimg" />
                    ANIRUDH VUPPALA
                </Navbar.Brand>
                <Nav>
                    <Nav.Link className="mx-3" onClick={() => handleNavClick("#about")}>// ABOUT</Nav.Link>
                    <Nav.Link className="mx-3" onClick={() => handleNavClick("#project")}>// PROJECTS</Nav.Link>
                    <Nav.Link className="mx-3" onClick={() => handleNavClick("#contactme")}>// CONTACT</Nav.Link>
                    <Nav.Link className="mx-3" href="https://docs.google.com/document/d/1nLBnTH0GDtkw6unl9yNswulZZtscHItE/edit?usp=sharing&ouid=103573858439537478775&rtpof=true&sd=true">// RESUME</Nav.Link>
                </Nav>
            </div>
        </Navbar>

    );
}
export default Navbaar;