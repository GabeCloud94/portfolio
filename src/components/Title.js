import React from "react";

import { ReactTypical } from "@deadcoder0904/react-typical";

const Title = () => {
  return (
    <div className="TitleContainer">
      <h1 className="TitleText">
        {" "}
        I am a
        <ReactTypical
          loop={Infinity}
          wrapper="b"
          steps={[
            " Web Developer",
            1500,
            " Web Designer",
            1500,
            " Technology Enthusiast",
            1500,
            " Clean Code Ninja",
            1500,
          ]}
        />
      </h1>
    </div>
  );
};

export default Title;
