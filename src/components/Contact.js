import React from "react";

const Contact = () => {
  return (
    <div
      id="ContactContainer"
      className="bg-dark-purple flex items-center justify-center p-4"
    >
      <div className="h-full flex items-center justify-center gap-8 md:gap-12 lg:gap-22">
        <a
          href="https://github.com/GabeCloud94"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/12"
        >
          <img
            className=""
            src={require("../images/github_PNG80.png")}
            alt="GitHub Link"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/gabe-cloud-644066229/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/12"
        >
          <img
            className=""
            src={require("../images/linkedin_24651.png")}
            alt="LinkedIn Link"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
