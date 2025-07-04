import React from "react";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="w-full h-[25rem] bg-cover bg-center flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className=" bg-opacity-60 text-orange-400 max-w-3xl rounded-lg p-6 sm:p-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-3">Are You Hungry?</h1>
          <p className="text-2xl sm:text-3xl mb-4">Order your favorite meal now</p>
          <p className="text-base sm:text-lg leading-relaxed">
            Explore our menu filled with mouthwatering meals made with fresh
            ingredients. Whether you're craving a quick bite or a full feast,
            we've got something for every taste. Order now and enjoy food
            delivered fast and fresh!
          </p>
        </div>
      </div>

      {/* Product Section */}
      <div className="w-full bg-black py-10 px-4 sm:px-6 lg:px-8">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;

