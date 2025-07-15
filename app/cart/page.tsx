// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

// const supabase = createPagesBrowserClient();

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchCart = async () => {
//       const { data: { user }, error: userError } = await supabase.auth.getUser();
//       if (userError || !user) return setLoading(false);

//       const { data: cartData } = await supabase
//         .from('Cart')
//         .select('*')
//         .eq('user_id', user.id);

//       setCartItems(cartData || []);
//       setLoading(false);
//     };

//     fetchCart();
//   }, []);

//   const updateQuantity = async (id: string, qty: number) => {
//     if (qty < 1) return;
//     await supabase.from('Cart').update({ quantity: qty }).eq('id', id);
//     setCartItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
//     );
//   };

//   const deleteItem = async (id: string) => {
//     await supabase.from('Cart').delete().eq('id', id);
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const cartTotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (  
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6 text-center">🛒 Your Cart</h1>
//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : cartItems.length === 0 ? (
//         <p className="text-center">Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="space-y-4">
//             {cartItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center p-4 bg-white shadow rounded"
//               >
//                 <div>
//                   <p className="font-semibold">{item.name}</p>
//                   <p className="text-sm text-gray-500">Rs. {item.price}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
//                   >
//                     −
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button
//                   onClick={() => deleteItem(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   🗑
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold">
//             <span>Total:</span>
//             <span className="text-green-600">Rs. {cartTotal}</span>
//           </div>

//           <div className="mt-6 flex justify-center">
//             <button
//               onClick={() => router.push('/checkout')}
//               className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg shadow transition"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import clsx from 'clsx';

const supabase = createPagesBrowserClient();

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingItemId, setUpdatingItemId] = useState<string | null>(null);
  const [removingItemId, setRemovingItemId] = useState<string | null>(null);
  const router = useRouter();
  const liveRegionRef = useRef<HTMLDivElement>(null);

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

  const announce = (message: string) => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = '';
      setTimeout(() => {
        if (liveRegionRef.current) liveRegionRef.current.textContent = message;
      }, 100); // Clear then set for screen readers
    }
  };

  const updateQuantity = async (id: string, qty: number) => {
    if (qty < 1) return;
    setUpdatingItemId(id);
    const { error } = await supabase.from('Cart').update({ quantity: qty }).eq('id', id);
    if (!error) {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
      );
      announce(`Quantity updated to ${qty}`);
    }
    setUpdatingItemId(null);
  };

  const deleteItem = async (id: string) => {
    setRemovingItemId(id);
    const { error } = await supabase.from('Cart').delete().eq('id', id);
    if (!error) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      announce(`Item removed from cart`);
    }
    setRemovingItemId(null);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b font-outfit my-32 from-gray-100 to-white p-6 sm:p-10 max-w-5xl mx-auto flex flex-col">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900 tracking-wide select-none">
        🛒 Your Cart
      </h1>

      {/* ARIA live region for screen reader announcements */}
      <div
        ref={liveRegionRef}
        role="status"
        aria-live="polite"
        className="sr-only"
      ></div>

      {loading ? (
        <div className="space-y-6">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-6 bg-white rounded-lg p-5 shadow animate-pulse"
            >
              <div className="w-20 h-20 bg-gray-300 rounded-md"></div>
              <div className="flex-1 space-y-3 py-1">
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="h-5 bg-gray-300 rounded w-1/4"></div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gray-300 rounded-md"></div>
                <div className="w-8 h-6 bg-gray-300 rounded"></div>
                <div className="w-9 h-9 bg-gray-300 rounded-md"></div>
              </div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
          ))}
        </div>
      ) : cartItems.length === 0 ? (
        <div className="flex flex-col items-center text-center mt-20 space-y-6">
          <svg
            className="w-40 h-40 text-gray-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
            />
          </svg>
          <p className="text-xl text-gray-500 font-semibold">
            Your cart is empty.
          </p>
          <button
            onClick={() => router.push('/')}
            className="mt-4 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400"
            aria-label="Go shopping"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <ul className="space-y-8 flex-grow">
            {cartItems.map((item) => {
              const isUpdating = updatingItemId === item.id;
              const isRemoving = removingItemId === item.id;

              return (
                <li
                  key={item.id}
                  className={clsx(
                    'flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-xl shadow-md transition-shadow duration-300',
                    isRemoving && 'opacity-50 pointer-events-none'
                  )}
                  aria-live="polite"
                >
                  <div className="flex items-center space-x-5 flex-1">
                    {/* Replace this div with actual image if available */}
                    <img
                      src={item.image_url || '/placeholder-product.png'}
                      alt={item.name}
                      className="w-24 h-24 rounded-lg object-cover border border-gray-200 shadow-sm"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder-product.png';
                      }}
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-xl text-gray-900">{item.name}</p>
                      <p className="text-gray-500 mt-1 text-sm">Rs. {item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mt-5 sm:mt-0 mr-20">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={isUpdating || isRemoving || item.quantity <= 1}
                      className={clsx(
                        'w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 transition focus:outline-none focus:ring-2 focus:ring-green-500',
                        (isUpdating || isRemoving || item.quantity <= 1) && 'cursor-not-allowed opacity-50'
                      )}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>
                    <span
                      className={clsx(
                        'w-10 text-center font-medium text-gray-800 select-none',
                        isUpdating && 'animate-pulse'
                      )}
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={isUpdating || isRemoving}
                      className={clsx(
                        'w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 transition focus:outline-none focus:ring-2 focus:ring-green-500',
                        (isUpdating || isRemoving) && 'cursor-not-allowed opacity-50'
                      )}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center space-x-6 mt-5 sm:mt-0">
                    <p className="text-xl font-semibold text-green-700 select-none">
                      Rs. {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => deleteItem(item.id)}
                      disabled={isRemoving || isUpdating}
                      className={clsx(
                        'text-red-600 hover:text-red-800 transition focus:outline-none focus:ring-2 focus:ring-red-400 rounded',
                        (isRemoving || isUpdating) && 'cursor-not-allowed opacity-50'
                      )}
                      aria-label={`Remove ${item.name} from cart`}
                      title={`Remove ${item.name}`}
                    >
                      🗑
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Sticky summary and checkout */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 py-6 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-lg px-6 rounded-t-xl">
            <div className="flex justify-between sm:justify-start sm:space-x-6">
              <span className="text-2xl font-semibold text-gray-900 select-none">
                Total:
              </span>
              <span className="text-3xl font-extrabold text-green-700 select-none">
                Rs. {cartTotal.toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => router.push('/checkout')}
              className="mt-5 sm:mt-0 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400"
              aria-label="Proceed to checkout"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
