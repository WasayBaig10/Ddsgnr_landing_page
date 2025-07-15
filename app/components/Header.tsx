'use client';

import { ShirtIcon } from 'lucide-react';
import { FaShirtsinbulk } from 'react-icons/fa6';
import { FaShirt } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Home, ShoppingBag, Info, Phone } from 'lucide-react';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerWidth = useTransform(scrollY, [0, 400], ['60vw', '90vw']);
  const borderRadius = useTransform(scrollY, [0, 400], ['1.5rem', '0.5rem']);
  const padding = useTransform(scrollY, [0, 400], ['1.25rem', '0.75rem']);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/products', label: 'Products', icon: ShoppingBag },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <>
      {/* Stretchy Animated Header */}
      <motion.div
        style={{ width: headerWidth, borderRadius, padding }}
        className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md text-white z-50 shadow-xl transition-all"
      >
        <div className="flex justify-between items-center font-michroma">
          <span className="text-lg font-bold flex items-center justify-center "> <FaShirtsinbulk className='mr-2'/> K&S .</span>
          <div className="hidden md:flex gap-6 text-sm">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-blue-400">
                {label}
              </Link>
            ))}
          </div>
          <button onClick={() => setSidebarOpen(true)} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </motion.div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isSidebarOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 90, damping: 15 }}
        className="fixed top-0 left-0 h-full w-[80vw] max-w-sm bg-white/80 backdrop-blur-md z-50 p-6 shadow-lg"
      >
        <div className="flex justify-between items-center mb-8 font-michroma">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-5 text-base font-medium font-michroma">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 hover:text-blue-500 transition"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon size={20} />
              </motion.div>
              {label}
            </Link>
          ))}
        </nav>
      </motion.aside>

      {/* Page Content */}
      <div className="h-0 " /> {/* Space for header to overlap */}
      <main className="px-6 bg-gradient-to-b from-slate-900 to-gray-800 text-white">
        {children}
      </main>
    </>
  );
}
