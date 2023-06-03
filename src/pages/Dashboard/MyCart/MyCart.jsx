import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div>
      <Helmet>
        <title>My cart | Bistro - resturan</title>
      </Helmet>
      <div className="uppercase flex items-center justify-evenly">
        <h2 className="text-2xl">Total Order: {cart.length}</h2>
        <h2 className="text-2xl">Total Price: ${total}</h2>
        <button className="btn border-0 text-white bg-[#D1A054]">Pay</button>
      </div>
    </div>
  );
};

export default MyCart;
