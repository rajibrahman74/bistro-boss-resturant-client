import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="text-center font-semibold text-[#151515] text-xl">
          {name}
        </h2>
        <p className="text-base text-start font-normal">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn bg-[#E8E8E8] hover:bg-[#111827] text-[#BB8506] font-semibold border-0 rounded-lg border-b-[3px] border-[#BB8506]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
