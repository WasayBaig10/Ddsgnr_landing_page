// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { useRouter } from 'next/navigation'
// // import { supabase } from '@/lib/supabase'
// // import { motion } from 'framer-motion'
// // import Image from 'next/image'

// // export default function AuthPage() {
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')
// //   const [isLogin, setIsLogin] = useState(true)
// //   const [error, setError] = useState<string | null>(null)
// //   const [message, setMessage] = useState<string | null>(null)
// //   const [loading, setLoading] = useState(false)
// //   const router = useRouter()

// //   useEffect(() => {
// //     const checkSession = async () => {
// //       const { data } = await supabase.auth.getSession()
// //       if (data.session) router.push('/')
// //     }
// //     checkSession()
// //   }, [router])

// //  const handleSubmit = async (e: React.FormEvent) => {
// //   e.preventDefault();
// //   setError(null);
// //   setMessage(null);
// //   setLoading(true);

// //   if (!email || !password) {
// //     setError('Email and password are required.');
// //     setLoading(false);
// //     return;
// //   }

// //   try {
// //     if (isLogin) {
// //       const { error } = await supabase.auth.signInWithPassword({ email, password });
// //       console.log('Login result', error); // <-- ✅ Put it right here

// //       if (error) {
// //         setError('Invalid credentials or unconfirmed email.');
// //       } else {
// //         setEmail('');
// //         setPassword('');
// //         router.push('/'); // or /cart
// //       }
// //     } else {
// //       const { error } = await supabase.auth.signUp({ email, password });
// //       if (error) {
// //         setError(error.message);
// //       } else {
// //         setMessage('Signup successful! Please check your email.');
// //         setEmail('');
// //         setPassword('');
// //         setIsLogin(true);
// //       }
// //     }
// //   } catch {
// //     setError('Something went wrong.');
// //   }

// //   setLoading(false);
// // };


// //   return (
// //     <div className="min-h-screen font-outfit flex items-center justify-center bg-gradient-to-br from-[#7f1d1d] via-[#581c1c] to-[#111827] px-4">
// //       <motion.div
// //         initial={{ y: 40, opacity: 0 }}
// //         animate={{ y: 0, opacity: 1 }}
// //         transition={{ duration: 0.5, type: 'spring' }}
// //         className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md"
// //       >
// //         <div className="flex justify-center mb-6">
// //           <Image src="/Shop1.png" alt="Logo" width={196} height={128} className="rounded-full" />
// //         </div>  

// //         <motion.h2
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.2 }}
// //           className="text-3xl font-extrabold text-center text-gray-800 mb-6"
// //         >
// //           {isLogin ? 'Welcome Back' : 'Create Your Account'}
// //         </motion.h2>

// //         {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
// //         {message && <p className="text-green-600 text-sm mb-3 text-center">{message}</p>}

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <motion.input
// //             type="email"
// //             placeholder="Email"
// //             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f1d1d]"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             whileFocus={{ scale: 1.02 }}
// //           />

// //           <motion.input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f1d1d]"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             whileFocus={{ scale: 1.02 }}
// //           />

// //           <motion.button
// //             type="submit"
// //             whileTap={{ scale: 0.97 }}
// //             disabled={loading}
// //             className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
// //               loading
// //                 ? 'bg-[#a94444] cursor-not-allowed'
// //                 : 'bg-[#7f1d1d] hover:bg-[#9b1c1c] text-white'
// //             }`}
// //           >
// //             {loading ? 'Please wait...' : isLogin ? 'Login' : 'Sign Up'}
// //           </motion.button>
// //         </form>

// //         <div className="text-center text-sm mt-4 text-gray-600">
// //           {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
// //           <button
// //             type="button"
// //             onClick={() => {
// //               setIsLogin(!isLogin)
// //               setError(null)
// //               setMessage(null)
// //               setEmail('')
// //               setPassword('')
// //             }}
// //             className="text-[#7f1d1d] font-semibold hover:underline"
// //           >
// //             {isLogin ? 'Sign Up' : 'Login'}
// //           </button>
// //         </div>
// //       </motion.div>
// //     </div>
// //   )
// // }

// 'use client';

// import { useState } from 'react';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import { useRouter } from 'next/navigation';

// export default function LoginPage() {
//   const supabase = createClientComponentClient();
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     console.log('Login result:', error);
//     if (error) return setError(error.message);

//     router.push('/cart');
//   };

//   return (
//     <form onSubmit={handleLogin} className="p-4 space-y-4">
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         className="border p-2 w-full"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         className="border p-2 w-full"
//       />
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2">
//         Login
//       </button>
//       {error && <p className="text-red-500">{error}</p>}
//     </form>
//   );
// }

'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    console.log('Login result:', error);
    if (error) return setError(error.message);
    router.push('/cart');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

