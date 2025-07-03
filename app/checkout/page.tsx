'use client';

import { useEffect, useState } from 'react';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

const supabase = createPagesBrowserClient();

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return setLoading(false);

      const { data } = await supabase
        .from('Cart')
        .select('*')
        .eq('user_id', user.id);

      setCartItems(data || []);
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

    alert(`✅ Order placed!\nShipping to: ${address}`);
    // Optionally clear cart or save order to DB
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">🧾 Checkout</h1>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Shipping Address</label>
        <textarea
          className="w-full p-3 border rounded resize-none"
          rows={4}
          placeholder="Enter your full delivery address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-2">🛒 Order Summary</h2>
        <ul className="space-y-2">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between text-sm">
              <span>{item.name} × {item.quantity}</span>
              <span>Rs. {item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t pt-2 flex justify-between font-semibold">
          <span>Total:</span>
          <span className="text-green-600">Rs. {cartTotal}</span>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleOrder}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
