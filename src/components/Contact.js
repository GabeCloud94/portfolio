import React from "react";

const Contact = () => {
  return (
    <div className="ContactContainer">
      <div className="LinkContainer">
        <a
          href="https://github.com/GabeCloud94"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="GitHubLink"
            src={require("../images/github_PNG80.png")}
            alt="GitHub Link"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/gabe-cloud-644066229/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="LinkedInLink"
            src={require("../images/linkedin_24651.png")}
            alt="LinkedIn Link"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
