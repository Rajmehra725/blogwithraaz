'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '@/public/Image/RaazGateX.png';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Theme toggle effect
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/subject', label: 'Subjects' },
    { href: '/practice', label: 'Practice' },
    { href: '/pyq', label: 'PYQs' },
    { href: '/projects', label: 'Projects' },
    { href: '/quizzes', label: 'Quizzes' },
    { href: '/videos', label: 'Videos' },
    { href: '/about', label: 'About' },
     { href: '/resume', label: 'Resume Builder' },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" width={40} height={40} className="rounded-full" />
          <h1 className="text-2xl font-bold text-blue-400">RaazGateX</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-blue-400 transition ${
                pathname === href ? 'text-blue-400 underline' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="hidden md:block">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with animation */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-gray-900 px-6 py-4 space-y-4 shadow-lg z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setIsOpen(false)}
            className={`block hover:text-blue-400 transition ${
              pathname === href ? 'text-blue-400 underline' : ''
            }`}
          >
            {label}
          </Link>
        ))}
        {/* Theme toggle in mobile */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 text-sm hover:text-blue-400"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />} Theme
        </button>
      </div>
    </nav>
  );
}
