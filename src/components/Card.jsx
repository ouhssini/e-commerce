import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { toast } from "react-toastify";

const Card = ({ product, setCart, cart }) => {
  const handleadd = (product) => {
    const prod = {
      product: product,
      quantity: 1,
    };
    if (cart.length === 0) {
      setCart([...cart, prod]);
    } else {
      let exist = false;
      cart.forEach((item) => {
        if (item.product.id === product.id) {
          item.quantity += 1;
          exist = true;
        }
      });
      if (!exist) {
        setCart([...cart, prod]);
      }
    }
    toast.success(`${product.title} added to cart!`);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden bg-slate-100 flex flex-col justify-between pb-3">
      <img
        className="mt-4 w-1/2 mx-auto flex-1 hover:scale-105 transition-transform duration-500 ease-in-out mix-blend-multiply"
        src={product.image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="flex items-center gap-1">
          {" "}
          <RiStarSFill className="text-yellow-500 text-xl" /> 
          <div className="text-sm">{product.rating.rate} (
            {product.rating.count}){" "}</div>
        </div>
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">
          {product.description.substring(0, 90)} ...
        </p>
      </div>
      <div className="flex items-center justify-center">
        <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ${product.price}
        </span>
        <button
          onClick={() => handleadd(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ajouter au cart
        </button>
      </div>
    </div>
  );
};

export default Card;
