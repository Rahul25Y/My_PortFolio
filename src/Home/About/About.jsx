import React from "react";
import "./About.css";
import Card from "./Card/Card";
import react from "../../assets/react.svg";
import bootstrap from "../../assets/Bootstrap.png";
import js from "../../assets/JS.png";


export default function About() {
  return (
    <div id="about">
        <h3 className="a-b">About</h3>

      {/* Left Section */}
      <div className="leftAbout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutDetails">
          <div className="personalInfo">
            <h2>Personal Info</h2>
            <ul>
              <li>
                <span>Name</span>: Rahul Yadav
              </li>
              <li>
                <span>Age</span>: 22
              </li>
              <li>
                <span>Gender</span>: Male
              </li>
              <li>
                <span>Language know</span>: Hindi, English
              </li>
            </ul>
          </div>
          <div className="Eduction">
            <h2>Education</h2>
            <ul>
              <li>
                <span>Degree</span>: BCA
              </li>
              <li>
                <span>Branch</span>: Computer Science
              </li>
              <li>
                <span>Location</span>: Indore
              </li>
            </ul>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <ul>
              <li>React.js Developer</li>
              <li>HTML, CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="rightAbout">
        <Card title={"React Developer"} image={react} />
        <Card title={"Bootstrap Developer"} image={bootstrap} />
        <Card title={"JavaScript Developer"} image={js} />
      </div>
    </div>
    
  );
}
