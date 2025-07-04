import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../features/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const qty = 1;
  const { darkMode } = useSelector((state) => state.theme);

  const handleAddToCart = () => {
    dispatch(addProductToCart({ ...product, qty }));
  };

  return (
    <div
      className={`rounded-2xl shadow-md p-4 flex flex-col justify-between h-full transition duration-300 hover:shadow-xl hover:scale-105 border ${
        darkMode
          ? "bg-black text-yellow-300 border-yellow-400"
          : " text-orange-600 border-orange-600"
      }`}
    >
      <img
        className="w-full h-40 sm:h-48 object-cover rounded"
        src={product.image}
        alt={product.title}
      />

      <h2 className="text-md sm:text-lg font-semibold mt-2 mb-1">
        {product.title}
      </h2>

      <div className="flex justify-between items-center mb-4">
        <p
          className={`font-semibold text-lg ${
            darkMode ? "text-yellow-400" : "text-orange-600"
          }`}
        >
          ${product.price}
        </p>
      </div>

      <button
        className={`${darkMode ? "bg-yellow-500 hover:bg-yellow-600":"bg-orange-600 hover:bg-orange-700"} text-black font-semibold py-2 rounded-lg transition`}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;


