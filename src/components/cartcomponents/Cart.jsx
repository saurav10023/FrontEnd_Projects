import React, { useState } from "react";

export default function Cart() {
  const items = [
    { name: "Shirt", price: 1200 },
    { name: "Pant", price: 1400 },
    { name: "Cap", price: 450 },
    { name: "Jacket", price: 2000 },
    { name: "Shoes", price: 2000 },
    { name: "Goggles", price: 1000 }
  ];

  const [cartItems, setCartItems] = useState([]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function addItem(item) {
    setCartItems(prev => {
      const exists = prev.find(p => p.name === item.name);
      if (exists) {
        return prev.map(p =>
          p.name === item.name
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function removeItem(name) {
    setCartItems(prev =>
      prev
        .map(item =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-fuchsia-50 to-indigo-50 p-4">
      <h1 className="text-center text-3xl font-bold text-fuchsia-800 mb-6">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Products */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map(item => (
              <div
                key={item.name}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition"
              >
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <button
                  onClick={() => addItem(item)}
                  className="mt-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 rounded-xl"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-5 h-fit">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

          {cartItems.length === 0 && (
            <p className="text-gray-500 text-center">Cart is empty</p>
          )}

          <div className="space-y-3">
            {cartItems.map(item => (
              <div
                key={item.name}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} x ₹{item.price}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold">
                    ₹{item.quantity * item.price}
                  </p>
                  <button
                    onClick={() => removeItem(item.name)}
                    className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {cartItems.length > 0 && (
            <div className="mt-6 border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
