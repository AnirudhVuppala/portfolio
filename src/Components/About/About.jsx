import React from "react";
import './About.css';
import { Row, Col, Container } from 'react-bootstrap';

function About() {

    const skills = ["HTML", "CSS", "Javascript", "ExpressJs", "SQL Basics", "MongoDB", "Java", "C/C++", "Python", "NodeJs", "Git"];

    return (
        <section id="about">
            <div className="AboutDiv">
                <div className="childDiv d-flex justify-content-center flex-column">
                    <div className="text-center">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h1 className="aboutHead m-0">ABOUT ME</h1>
                            <hr className="Hr" />
                        </div>
                        <p className="paraTag">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                    </div>
                    <Container className="px-lg-5 my-lg-5 somePara">
                        <Row>
                            <Col xs={12} md={6}>
                                <div>
                                    <h3 className="aboutHead">Get to know me!</h3>
                                    <p>I'm a Frontend Web Developer building the <strong>Front-end of Websites</strong> and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.</p>
                                    <p>I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
                                    <p>I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.</p>
                                </div>
                                <div className="my-5">
                                    <button className="contactBtn">CONTACT</button>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div>
                                    <div>
                                        <h3 className="aboutHead">Skills</h3>
                                    </div>
                                    <div className="d-flex flex-wrap">
                                        {skills.map((item) => {
                                            return <p className="skillP p-3 py-2 me-3 mb-3">{item}</p>
                                        })}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default About;