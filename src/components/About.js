import React from "react";

const About = () => {
  return (
    <div className="AboutContainer">
      <div className="AboutWords">
        <h2 className="AboutTitle">A Little About Me...</h2>
        <p className="AboutText">
          My name is Gabe Cloud. I’m a Front-End Web developer who codes
          responsive web applications and websites. I believe that great layout
          and design are essential in creating an user friendly environment that
          is easily navigable and digestable. Such environments thrive from
          collaboration, which is why I’m excited to hear from you!
        </p>
      </div>
      <img
        className="PersonalPhoto"
        src={require("../images/IMG_20190226_154828_058 (1).jpg")}
        alt="Gabe Cloud"
      />
    </div>
  );
};

export default About;
