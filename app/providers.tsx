// 'use client';

// import { SessionContextProvider } from '@supabase/auth-helpers-react';
// import { createBrowserClient } from '@supabase/ssr';

// export function Providers({ children }: { children: React.ReactNode }) {
//   const supabase = createBrowserClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//   );

//   return (
//     <SessionContextProvider supabaseClient={supabase}>
//       {children}
//     </SessionContextProvider>
//   );
// }
'use client';

import { useState } from 'react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/supabase'; // Optional

export default function Providers({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = useState(() =>
    createPagesBrowserClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}
