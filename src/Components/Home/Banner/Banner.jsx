import React from "react";
import banner from "../../../assets/image/books.jpg";
const Banner = () => {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className=" max-w-sm lg:max-w-lg  rounded-lg shadow-sm"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Hello, Welcomes here to lear something
              <span className="text-pink-600 font-semibold">
                new everyday !!!
              </span>
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              quas molestiae id excepturi rem eligendi magni praesentium
              impedit! Ipsum officiis pariatur, dolore laborum excepturi vero.
              Deleniti in officia voluptates eligendi.
            </p>
            <div className=" py-4">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
            </div>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
