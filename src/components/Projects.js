import React from "react";

const Projects = () => {
  return (
    <div
      id="ProjectContainer"
      className="h-full bg-base-purple py-12 md:px-8 items-center justify-center"
    >
      <div className="flex flex-col gap-12 md:gap-8 lg:gap-16 md:flex-row items-center justify-center">
        <div className="flex flex-col rounded-2xl w-3/5 lg:w-1/5 bg-dark-purple items-center hover:scale-110 shadow-2xl hover:cursor-pointer">
          <a
            href="https://gabecloud94.github.io/Cloud-Guitars/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-t-2xl"
              src={require("../images/cloud-guitars.png")}
              alt="Cloud Guitars Website"
            />
            <h3 className="text-lt-gray font-bold text-center">
              <em>Cloud Guitars</em>
            </h3>
          </a>
          <div className=" text-lt-gray p-4 lg:p-2">
            <h3 className="font-bold text-lg underline">Technologies Used</h3>
            <ul className="p-2 list-disc">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Vanilla JavaScript</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl w-3/5 lg:w-1/5 bg-dark-purple items-center hover:scale-110 shadow-2xl hover:cursor-pointer">
          <a
            href="https://shareme-gcloud.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-t-2xl"
              src={require("../images/share-me.png")}
              alt="ShareMe Website"
            />
            <h3 className="text-lt-gray font-bold text-center">
              <em>ShareMe Website</em>
            </h3>
          </a>
          <div className="text-lt-gray p-4 lg:p-2">
            <h3 className="font-bold text-lg underline">Technologies Used</h3>
            <ul className="p-2 list-disc">
              <li>ReactJS</li>
              <li>React-Router</li>
              <li>Tailwind CSS</li>
              <li>Sanity</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl w-3/5 lg:w-1/5 bg-dark-purple items-center hover:scale-110 shadow-2xl hover:cursor-pointer">
          <a
            href="https://ecommerce-sanity-stripe-ruddy.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-t-2xl"
              src={require("../images/e-commerce.jpg")}
              alt="E-Commerce Website"
            />
            <h3 className="text-lt-gray font-bold text-center">
              <em>E-Commerce Website</em>
            </h3>
          </a>
          <div className="text-lt-gray p-4 lg:p-2">
            <h3 className="font-bold text-lg underline">Technologies Used</h3>
            <ul className="p-2 list-disc">
              <li>NextJS</li>
              <li>Tailwind CSS</li>
              <li>Sanity</li>
              <li>Stripe</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
