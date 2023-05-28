import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ coverImage, title }) => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={coverImage}
        bgImageAlt="the menu  image"
        strength={-200}
      >
        Blur transition from min to max
        <div className="hero h-[600px]">
          <div className="hero-o bg-opacity-0"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold text-white uppercase">
                {title}
              </h1>
              <p className="mb-5 text-xl text-white">
                Would you like to try a dish?
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Cover;