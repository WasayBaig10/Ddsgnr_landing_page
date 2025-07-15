
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
//     setError(null);
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     console.log('Login result:', error);
//     if (error) return setError(error.message);
//     router.push('/cart');
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <h1 className="text-xl font-bold mb-4">Login</h1>
//       <form onSubmit={handleLogin} className="space-y-4">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//           Login
//         </button>
//       </form>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
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
    if (error) return setError(error.message);

    router.push('/cart');
  };

  return (
    <div className="min-h-screen font-outfit bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-white mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-gray-300 mt-6">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
