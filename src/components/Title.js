import React from "react";

import { ReactTypical } from "@deadcoder0904/react-typical";

const Title = () => {
  return (
    <div
      alt="title background"
      id="TitleContainer"
      className="flex items-center justify-center bg-titlebg bg-cover bg-center h-screen bg-fixed"
    >
      <h1 className="text-lt-gray text-xl md:text-2xl lg:text-3xl">
        {" "}
        I am a
        <ReactTypical
          loop={Infinity}
          wrapper="b"
          steps={[
            " Web Developer",
            1500,
            " React Developer",
            1500,
            " React Enthusiast",
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
