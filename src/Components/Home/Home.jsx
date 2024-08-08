import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import './Home.css';

function Home() {
    return (
        <section id="home">
            <div className="homeDiv d-flex justify-content-center align-items-center">
                <div className="backgroundImg"></div>
                <div className="text-center contentDiv">
                    <div>
                        <h1 className="nameHead namehead2">HEY, I'M</h1>
                        <h1 className="nameHead">
                        <Typewriter
                                words={["ANIRUDH VUPPALA", "FULL STACK-DEVELOPER"]}
                                loop
                                typeSpeed="90"
                                deleteSpeed="50"
                                delaySpeed={1000}
                            />
                            <Cursor />
                        </h1>
                    </div>
                    <div>
                        <p className="contentP">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                    </div>
                    <a href="#project"><button className="projBtn" >PROJECTS</button></a>
                    <div className="arrowSection">
                        <a href="#about"><span></span></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
