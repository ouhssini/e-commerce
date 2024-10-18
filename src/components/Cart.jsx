import React, { useMemo } from "react";

const Cart = ({ products }) => {
  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.product.price * product.quantity;
    }, 0);
  }, [products]);

  return (
    <>
      <div className="absolute  w-1/3 right-10 top-12 rounded-lg shadow-2xl bg-gray-50 transition-all ease-in-out duration-200 z-50 px-10 py-5 gap-5 flex flex-col items-start justify-start">
        <h1 className="text-3xl  text-center font-bold">Cart ({total.toFixed(2)} $)</h1>
        <div className="flex flex-col items-start gap-5 justify-center">
          {products.map((product) => (
            <>
              <div
                key={product.product.id}
                className="flex items-center justify-center gap-4"
              >
                <img
                  src={product.product.image}
                  alt={product.product.title}
                  className="w-20 h-20 mix-blend-multiply"
                />
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-xl font-bold">{product.product.title}</h2>
                  <p className="text-gray-500">Quantity: {product.quantity}</p>
                </div>
              </div>
              <hr className="w-full border border-gray-300" />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
