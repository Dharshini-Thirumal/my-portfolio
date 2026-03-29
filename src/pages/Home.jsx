import React from "react";
import "./Home.css";
import helloImage from "../assets/helloHomePage.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-split">
        <div className="intro-text">
          <h1 className="home-heading">Hello!</h1>
          <h1 className="home-heading">I'm Dharshini Thirumal</h1>
          <h2 className="home-subheading">
            I'm a{" "}
            <span className="typewriter-text">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Iced Cappuccino Lover",
                  "Serial Crocheter",
                  "Learner & Explorer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className="home-subtext">
            I like building things with code, breaking them, fixing them, and playing around with them until I feel like “oh wait, that’s actually not that bad.”
          </p>

          {/* BUTTONS */}
          <div className="home-buttons">
            <a href="/my-portfolio/Resume.pdf" download className="home-btn">
              Download Resume
            </a>
            <Link to="/contact" className="home-btn">
              Contact Me
            </Link>
          </div>
        </div>

        <img
          src={helloImage}
          alt="Hi from Dharshini"
          className="hi-image"
        />
      </div>
    </div>
  );
}

export default Home;
