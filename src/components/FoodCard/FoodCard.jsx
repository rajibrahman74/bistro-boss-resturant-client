import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;

  const handleAddToCart = (item) => {
    console.log(item);
  };

  return (
    <div className="relative card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="food" />
      </figure>
      <span className="absolute top-5 right-5 text-white w-20 h-11 bg-[#111827] flex justify-center items-center">
        ${price}
      </span>
      <div className="card-body">
        <h2 className="text-center font-semibold text-[#151515] text-xl">
          {name}
        </h2>
        <p className="text-base text-start font-normal">{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn bg-[#E8E8E8] hover:bg-[#111827] text-[#BB8506] font-semibold border-0 rounded-lg border-b-[3px] border-[#BB8506]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
