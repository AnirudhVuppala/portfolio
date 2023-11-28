/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Project.css";
import { Row,Col } from "react-bootstrap";
function Eachproject(props) {
  return (
    <Row className="projrow">
      <Col xs={6} className="d-flex justify-content-center">
        <img
          src={props.imgSource}
          alt=""
          className="projImg rounded shadow-lg"
        />
      </Col>
      <Col xs={6} className="d-flex flex-column justify-content-center px-5">
        <h3 className="projectName">{props.projectName}</h3>
        <p className="projectPara">
          {props.projectDesc}
        </p>
        <a href={props.projectLink}>
          <button className="projectBtn">View Code</button>
        </a>
      </Col>
    </Row>
  );
}
export default Eachproject;
