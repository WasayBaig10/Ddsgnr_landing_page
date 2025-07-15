'use client';

import { useEffect, useState } from 'react';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { motion, AnimatePresence } from 'framer-motion';

const supabase = createPagesBrowserClient();

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setCartItems([]);
        setLoading(false);
        return;
      }
      const { data } = await supabase
        .from('Cart')
        .select('id, name, price, quantity')
        .eq('user_id', user.id);
      setCartItems(
        (data || []).map((item) => ({
          ...item,
          price: Number(item.price) || 0,
          quantity: Number(item.quantity) || 0,
        }))
      );
      setLoading(false);
    };
    fetchCart();
  }, []);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!address.trim()) {
      alert('Please enter a delivery address.');
      return;
    }
    if (cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    setOrderPlaced(true);
  };

  // Animation variants for list items
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-3xl mx-auto flex flex-col my-32 font-outfit">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">🧾 Checkout</h1>

      {loading ? (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-12 bg-gray-300 rounded-md animate-pulse"
            />
          ))}
        </motion.div>
      ) : orderPlaced ? (
        <motion.div
          className="bg-green-100 p-8 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">✅ Order Placed!</h2>
          <p className="mb-6 text-gray-800">Thank you! Your order will be shipped to:</p>
          <p className="bg-green-200 p-4 rounded text-green-900 font-semibold whitespace-pre-wrap">
            {address}
          </p>
          <button
            onClick={() => {
              setOrderPlaced(false);
              setAddress('');
              setCartItems([]);
            }}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Place Another Order
          </button>
        </motion.div>
      ) : cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty. Please add items before checking out.
        </p>
      ) : (
        <>
          <label
            htmlFor="address"
            className="block mb-3 font-semibold text-gray-700 text-lg"
          >
            Shipping Address
          </label>
          <motion.textarea
            id="address"
            rows={5}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your full delivery address..."
            className="w-full p-4 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition shadow-sm"
            aria-required="true"
            whileFocus={{ scale: 1.02, boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)' }}
          />

          <motion.div
            className="mt-8 bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-5 text-gray-900 flex items-center gap-3">
              🛒 Order Summary
            </h2>

            <motion.ul layout className="max-h-64 overflow-y-auto divide-y divide-gray-200">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.li
                    key={item.id}
                    layout
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="flex justify-between py-3 text-gray-800 font-medium"
                  >
                    <span>
                      {item.name}{' '}
                      <span className="text-gray-500 font-normal">× {item.quantity}</span>
                    </span>
                    <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>

            <div className="mt-6 border-t pt-4 flex justify-between font-bold text-xl text-green-700">
              <span>Total:</span>
              <span>Rs. {cartTotal.toFixed(2)}</span>
            </div>
          </motion.div>

          <motion.div className="mt-10 flex justify-center">
            <motion.button
              onClick={handleOrder}
              disabled={cartItems.length === 0 || !address.trim()}
              whileHover={{
                scale: cartItems.length === 0 || !address.trim() ? 1 : 1.05,
                backgroundColor:
                  cartItems.length === 0 || !address.trim()
                    ? '#93c5fd'
                    : '#2563eb',
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-10 py-4 rounded-full text-lg font-semibold text-white shadow-lg transition focus:outline-none focus:ring-4 focus:ring-blue-400 ${
                cartItems.length === 0 || !address.trim()
                  ? 'bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-600'
              }`}
              aria-disabled={cartItems.length === 0 || !address.trim()}
            >
              Place Order
            </motion.button>
          </motion.div>
        </>
      )}
    </div>
  );
}
