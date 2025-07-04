import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  displayProducts,
  setSearch,
  setCategory,
} from "../features/productSlice";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const { filtered, loading, search, category } = useSelector(
    (state) => state.products
  );
  const { darkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(displayProducts());
  }, [dispatch]);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleCategory = (e) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <div
      className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 transition duration-300 bg-black">
      <div
        className={`p-6 rounded-lg shadow-lg max-w-7xl mx-auto transition-all duration-300 ${
          darkMode ? "bg-black bg-opacity-90" : ""
        }`}
      >
       
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 p-6">
          <select
            value={category}
            onChange={handleCategory}
            className={`px-4 py-2 rounded border focus:outline-none ${
              darkMode
                ? "border-yellow-400 bg-black text-yellow-300"
                : "border-orange-600  text-orange-600"
            }`}
          >
            <option value="All">All</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetarian">Non-Vegetarian</option>
            <option value="chinese">Chinese</option>
          </select>

          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-yellow-400" : "text-orange-600"
            }`}
          >
            🍔 Order Now
          </h2>

          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search products..."
            className={`px-4 py-2 rounded w-full sm:w-64 focus:outline-none border ${
              darkMode
                ? "border-yellow-400 bg-black text-yellow-300 placeholder-yellow-500"
                : "border-orange-600  text-orange-600 placeholder-orange-600"
            }`}
          />
        </div>

       
        {loading ? (
          <div
            className={`text-xl font-semibold text-center ${
              darkMode ? "text-yellow-300" : "text-orange-700"
            }`}
          >
            ...loading
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;


