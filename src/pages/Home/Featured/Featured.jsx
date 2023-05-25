import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./featred.css";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <section className="featred-item my-24 pt-20 text-white">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="md:flex items-center justify-center md:gap-x-[68px] mt-12 py-8 md:px-16 px-4 pb-28">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="text-white">
          <h2 className="uppercase text-2xl">March 20, 2023</h2>
          <h2 className="uppercase text-2xl">WHERE CAN I GET SOME?</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="w-[178px] h-16 rounded-lg uppercase mt-6 border-b-[3px] border-white">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
