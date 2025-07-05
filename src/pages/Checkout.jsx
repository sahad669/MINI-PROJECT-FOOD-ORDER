import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    dispatch(clearCart());
    setTimeout(() => {
      navigate("/");
    }, 3000); // redirect after 3 seconds
  };

  return (
    <div className="min-h-screen bg-black text-yellow-300 flex flex-col items-center justify-center px-4 py-10">
      {!orderConfirmed ? (
        <>
          <h1 className="text-3xl font-bold text-green-400 mb-6">
            ✅ Checkout Summary
          </h1>
          {cartItems.length === 0 ? (
            <p className="text-yellow-500">Your cart is empty.</p>
          ) : (
            <>
              <div className="w-full max-w-3xl space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-gray-900 border border-yellow-600 rounded"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h2 className="font-semibold">{item.title}</h2>
                        <p className="text-sm text-yellow-400">
                          Qty: {item.qty} × ₹{item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <p className="font-bold">
                      ₹ {(item.qty * item.price).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6">
                Total: ₹ {totalPrice.toFixed(2)}
              </h3>

              <button
                onClick={handleConfirmOrder}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded text-lg font-semibold"
              >
                ✅ Confirm Order
              </button>
              <button
                onClick={() => navigate("/cart")}
                className="bg-transparent border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-6 py-2 m-3 rounded text-lg font-semibold transition"
              >
                🔙 Back to Cart
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-green-400 mb-4">
            ✅ Checkout Successful!
          </h1>
          <p className="text-lg mb-6 text-yellow-400 text-center">
            Thank you for your order! 🎉
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded text-lg font-semibold"
          >
            🏠 Go to Home
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
