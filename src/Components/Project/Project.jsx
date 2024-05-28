/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Project.css';
import EachProject from "./EachProject";
import { Container } from "react-bootstrap";

function Project() {
    return (
        <section id="project">
            <div className="ProjectDiv">
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="m-0 projHead">PROJECTS</h1>
                        <hr className="Hr" />
                    </div>
                    <div>
                        <p className="paraTag">Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
                    </div>
                </div>
                <Container className="pt-5">
                    <EachProject projectImg={"./PortFolio.jpeg"} projectName={"Portfolio"} projectDesc={"Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally"} projectLink={"#"} />
                    <EachProject projectName={"E-Assets"} projectImg={`./eassets.jpeg`} projectLink={"https://github.com/AnirudhVuppala/E-Assets.git"} projectDesc={"The E-Assets website is a modern web application designed to efficiently manage and track assets for organizations. It provides a comprehensive platform for businesses, institutions, or individuals to monitor their assets, whether they are physical assets like equipment and machinery or digital assets like licenses and software."}/>
                    <EachProject projectName={"Colorization Transformer"} projectImg={`./coltran.jpg`} projectLink={"https://github.com/AnirudhVuppala/Colorization-Transformer"} projectDesc={"Colorization-Transformer, utilizing PyTorch and a custom dataset, employs transformer-based networks to automatically colorize grayscale images accurately. It revolutionizes photo restoration and visuals."}/>
                </Container>
            </div>
        </section>
    );
}

export default Project;