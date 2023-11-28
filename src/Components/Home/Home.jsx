import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import "./Home.css";
import { Link } from "react-scroll";

function Home() {
  return (
    <section id="home">
      <div className="homeDiv d-flex justify-content-center align-items-center">
        <div className="backgroundImg"></div>
        <div className="text-center contentDiv">
          <div className="">
            <h1 className="nameHead" style={{ fontSize: "3rem" }}>
              HEY, I'M
            </h1>
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
            <p className="contentP">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <button className="projBtn">
            <Link to="project" smooth={true} duration={500} offset={-90}>
              PROJECTS
            </Link>
          </button>
          <section id="section06" class="demo">
          <Link to="about" smooth={true} duration={500} offset={-90} className="link">
            
              <span></span>
            
        </Link>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Home;
