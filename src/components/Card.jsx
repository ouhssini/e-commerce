import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { Star } from 'lucide-react'


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
    <div
      key={product.id}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover grayscale hover:grayscale-0 cursor-pointer transition-all ease-in-out duration-500"
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400" size={16} />
          <span className="ml-1 text-sm text-gray-600">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description.substring(0,90)}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          <button onClick={()=>handleadd(product)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Ajouter au cart
          </button>
        </div>
      </div>
    </div>

  );
};

export default Card;
