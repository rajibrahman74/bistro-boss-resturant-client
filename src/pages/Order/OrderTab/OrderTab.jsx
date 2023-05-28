import React from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ iitems }) => {
  return (
    <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {iitems.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;