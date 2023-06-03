import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refatch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refatch(); // cart to update the number of items in the carta
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Please login first",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login", { state: { from: location } });
    }
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
