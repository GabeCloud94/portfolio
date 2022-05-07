import React from "react";

const About = () => {
  return (
    <div
      id="AboutContainer"
      className="h-full bg-md-purple flex flex-col lg:flex-row justify-center items-center p-14 gap-8 lg:gap-32"
    >
      <img
        className="w-1/2 md:w-1/3 lg:w-1/4 rounded-full"
        src={require("../images/IMG_20190226_154828_058 (1).jpg")}
        alt="Gabe Cloud"
      />
      <div className="flex flex-col justify-center items-center gap-4 lg:w-1/3">
        <h2 className="text-xl text-lt-gray font-bold lg:text-2xl">
          A Little About Me...
        </h2>
        <p className="text-lg w-4/5 md:w-3/5 lg:w-full text-center text-lt-gray lg:leading-relaxed">
          My name is Gabe Cloud. I’m a Front-End Web developer who codes
          responsive web applications and websites. I believe that great layout
          and design are essential in creating an user friendly environment that
          is easily navigable and digestable. Such environments thrive from
          collaboration, which is why I’m excited to hear from you!
        </p>
      </div>
    </div>
  );
};

export default About;
