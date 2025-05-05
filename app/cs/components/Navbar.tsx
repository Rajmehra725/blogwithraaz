'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/public/Image/RaazGateX.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-3 shadow-md fixed top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" width={40} height={40} className="rounded-full" />
          <h1 className="text-2xl font-bold text-blue-400">RaazGateX</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/subject" className="hover:text-blue-400">Subjects</Link>
          <Link href="/practice" className="hover:text-blue-400">Practice</Link>
          <Link href="/pyq" className="hover:text-blue-400">PYQs</Link>
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/quizzes" className="hover:text-blue-400">Quizzes</Link>
          <Link href="/videos" className="hover:text-blue-400">Videos</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 mt-2 rounded shadow-md space-y-3">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/subject" onClick={() => setIsOpen(false)}>Subjects</Link>
          <Link href="/practice" onClick={() => setIsOpen(false)}>Practice</Link>
          <Link href="/pyq" onClick={() => setIsOpen(false)}>PYQs</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/quizzes" onClick={() => setIsOpen(false)}>Quizzes</Link>
          <Link href="/videos" onClick={() => setIsOpen(false)}>Videos</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
}
