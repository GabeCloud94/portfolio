import React from "react";

const Projects = () => {
  return (
    <div className="ProjectContainer">
      <div className="CardContainer">
        <div className="ProjectCard">
          <a className="CardLink" href="/">
            <img
              className="CardPic"
              src={require("../images/rps-app.png")}
              alt="Rock, Paper, Scissors App"
            />
            <h3 className="CardCaption">RPS App</h3>
          </a>
          <div className="TechContainer">
            <h3 className="TechUsed">Technologies Used</h3>
            <ul className="TechList">
              <li>HTML5</li>
              <li>SCSS/SASS</li>
              <li>Vanilla JavaScript</li>
            </ul>
          </div>
        </div>
        <div className="ProjectCard">
          <a className="CardLink" href="/">
            <img
              className="CardPic"
              src={require("../images/cloud-guitars.png")}
              alt="Cloud Guitars Website"
            />
            <h3 className="CardCaption">Cloud Guitars</h3>
          </a>
          <div className="TechContainer">
            <h3 className="TechUsed">Technologies Used</h3>
            <ul className="TechList">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Vanilla JavaScript</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className="ProjectCard">
          <a className="CardLink" href="/">
            <img
              className="CardPic"
              src={require("../images/tip-calc.png")}
              alt="JavaScript Tip Calculator"
            />
            <h3 className="CardCaption">JS Tip Calculator</h3>
          </a>
          <div className="TechContainer">
            <h3 className="TechUsed">Technologies Used</h3>
            <ul className="TechList">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Vanilla JavaScript</li>
            </ul>
          </div>
        </div>
        <div className="ProjectCard">
          <a className="CardLink" href="/">
            <img
              className="CardPic"
              src={require("../images/js-calc.png")}
              alt="JS Calculator"
            />
            <h3 className="CardCaption">Windows Calculator Replica</h3>
          </a>
          <div className="TechContainer">
            <h3 className="TechUsed">Technologies Used</h3>
            <ul className="TechList">
              <li>HTML5</li>
              <li>SCSS/SASS</li>
              <li>Vanilla JavaScript</li>
            </ul>
          </div>
        </div>
        <div className="ProjectCard">
          <a className="CardLink" href="/">
            <img
              className="CardPic"
              src={require("../images/omnifood.png")}
              alt="Omnifood Site"
            />
            <h3 className="CardCaption">Omnifood WebSite</h3>
          </a>
          <div className="TechContainer">
            <h3 className="TechUsed">Technologies Used</h3>
            <ul className="TechList">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Vanilla JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
