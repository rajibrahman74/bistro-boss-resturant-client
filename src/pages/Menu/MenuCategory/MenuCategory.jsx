import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="my-20">
      {title && <Cover coverImage={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-7 mx-auto mt-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link
        to={`/order/${title}`}
        className="flex justify-center items-center mt-12"
      >
        <button className="uppercase text-[#1F2937] font-semibold w-56 h-16 rounded-lg border-b-[3px] border-[#1F2937]">
          Order your favorite food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;