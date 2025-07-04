import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeCart, updateQty } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

 const handleCheckout = () => {
 navigate("/checkout")
};

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleQtyChange = (id, newQty) => {
    if (newQty >= 1 && newQty <= 5) {
      dispatch(updateQty({ id, qty: newQty }));
    }
  };

  return (
    <div className="p-10 bg-black min-h-screen text-yellow-300">
      <h1 className="text-2xl font-bold mb-6 text-center py-8">🛒 Your Cart Items</h1>

      {cartItems.length === 0 ? (
        <p className="text-yellow-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center bg-gray-900 shadow-md rounded p-4 border border-yellow-700"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded"
                  />
                  <div>
                    <h2 className="font-semibold">{item.title.slice(0, 40)}...</h2>
                    <p className="text-sm text-yellow-400">Price: ${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <label className="text-sm font-medium">Qty:</label>
                      <input
                        type="number"
                        min={1}
                        max={5}
                        value={item.qty}
                        onChange={(e) => handleQtyChange(item.id, Number(e.target.value))}
                        className="w-16 border border-yellow-500 rounded px-2 py-1 text-sm bg-black text-yellow-200"
                      />
                    </div>
                    <p className="text-sm font-bold mt-1">
                      Subtotal: ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeCart(item.id))}
                  className="mt-4 sm:mt-0 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right border-t border-yellow-600 pt-4">
            <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
            <div className="mt-4 flex gap-4 justify-end">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-yellow-800 hover:bg-yellow-700 text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>

              <button
                onClick={handleCheckout}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
