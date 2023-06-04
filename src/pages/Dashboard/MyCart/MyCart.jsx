import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="my-24">
      <Helmet>
        <title>My cart | Bistro - resturan</title>
      </Helmet>
      <div className="uppercase flex items-center justify-evenly font-semibold">
        <h2 className="text-2xl">Total Order: {cart.length}</h2>
        <h2 className="text-2xl">Total Price: ${total}</h2>
        <button className="btn border-0 text-white bg-[#D1A054]">Pay</button>
      </div>
      <div className="overflow-x-auto flex justify-center items-center mt-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Itemm Name</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-wide bg:hover-none text-red-600 text-xl">
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
