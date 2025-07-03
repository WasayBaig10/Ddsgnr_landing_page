// 'use client';

// import { useEffect, useState } from 'react';
// import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
// import type { Database } from '@/types/supabase'; // or use any if not typed

// const supabase = createPagesBrowserClient<Database>();

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const { data: { user }, error: userError } = await supabase.auth.getUser();

//         if (userError || !user) {
//           console.error('❌ Error fetching user:', userError?.message || 'No user');
//           setLoading(false);
//           return;
//         }

//         console.log('✅ Logged-in user ID:', user.id);

//         const { data: cartData, error: cartError } = await supabase
//           .from('Cart')
//           .select('*')
//           .eq('user_id', user.id);

//         if (cartError) {
//           console.error('❌ Cart fetch error:', cartError.message);
//         } else {
//           console.log('🛒 Cart data:', cartData);
//           setCartItems(cartData || []);
//         }
//       } catch (err) {
//         console.error('🔥 Unexpected error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCart();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">🛒 Your Cart</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul className="space-y-3">
//           {cartItems.map((item, i) => (
//             <li key={i} className="border p-4 rounded shadow">
//               <p><strong>{item.name}</strong></p>
//               <p>Price: Rs. {item.price}</p>
//               <p>Quantity: {item.quantity}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

const supabase = createPagesBrowserClient();

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCart = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) return setLoading(false);

      const { data: cartData } = await supabase
        .from('Cart')
        .select('*')
        .eq('user_id', user.id);

      setCartItems(cartData || []);
      setLoading(false);
    };

    fetchCart();
  }, []);

  const updateQuantity = async (id: string, qty: number) => {
    if (qty < 1) return;
    await supabase.from('Cart').update({ quantity: qty }).eq('id', id);
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const deleteItem = async (id: string) => {
    await supabase.from('Cart').delete().eq('id', id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (  
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">🛒 Your Cart</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 bg-white shadow rounded"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">Rs. {item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span className="text-green-600">Rs. {cartTotal}</span>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => router.push('/checkout')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg shadow transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
