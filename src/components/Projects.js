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
            <h3 className="CardCaption">
              <em>RPS App</em>
            </h3>
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
            <h3 className="CardCaption">
              <em>Cloud Guitars</em>
            </h3>
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
            <h3 className="CardCaption">
              <em>JS Tip Calculator</em>
            </h3>
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
          <a className="CardLink" href="https://shareme-gcloud.netlify.app">
            <img
              className="CardPic"
              src={require("../images/share-me.png")}
              alt="ShareMe Website"
            />
            <h3 className="CardCaption">
              <em>ShareMe Website</em>
            </h3>
          </a>
          <div className="TechContainer">
            <h3 className="TechUsed">Technologies Used</h3>
            <ul className="TechList">
              <li>ReactJS</li>
              <li>React-Router</li>
              <li>Tailwind CSS</li>
              <li>Sanity</li>
            </ul>
          </div>
        </div>
        <div className="ProjectCard">
          <a className="CardLink" href="/">
            <img
              className="CardPic"
              src={require("../images/omnifood.png")}
              alt="Omnifood Website"
            />
            <h3 className="CardCaption">
              <em>Omnifood WebSite</em>
            </h3>
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
