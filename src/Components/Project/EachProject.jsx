/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col } from 'react-bootstrap';
import './Project.css';

function EachProject(props) {
    return (
        <Row className="projectRow">
            <Col xs={12} md={6} className="d-flex justify-content-center">
                <img src={props.projectImg} alt="" className="projImg rounded shadow-lg" />
            </Col>
            <Col xs={12} md={6} className="d-flex flex-column justify-content-center px-lg-5 projDescTest">
                <h3 className="projectName">{props.projectName}</h3>
                <p className="projectPara">{props.projectDesc}</p>
                <a href={props.projectLink}><button className="projectBtn">View Code</button></a>
            </Col>
        </Row>
    );
}

export default EachProject;