/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="footerDiv">
                <div>
                    <Container className="py-5">
                        <Row className="m-0">
                            <Col xs={12} md={8}>
                                <h1 className="footerName">ANIRUDH VUPPALA</h1>
                                <p className="footerPara">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                            </Col>
                            <Col xs={12} md={4}>
                                <h1 className="footerName">SOCIAL</h1>
                                <a style={{ color: "white" }} href="https://github.com/AnirudhVuppala"><FaGithub className="mx-2 ms-0" fontSize={30} /></a>
                                <a style={{ color: "white" }} href="https://www.linkedin.com/in/anirudhvuppala/"><FaLinkedin className="mx-2" fontSize={30} /></a>
                                {/* <a style={{ color: "white" }} href=""><FaTwitter className="mx-2" fontSize={30} /></a> */}
                                <a style={{ color: "white" }} href=""><FaEnvelope className="mx-2" fontSize={30} /></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="d-flex justify-content-center">
                    <hr className="m-0 footerHr" />
                </div>
                <div>
                    <div className="py-4">
                        <p className="text-center footerPar py-3 m-0">© Anirudh Vuppala | All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;