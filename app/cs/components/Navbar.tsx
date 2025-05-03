'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Logo from "@/public/Image/RaazGateX.png"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-3 shadow-md fixed top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
         {/* Logo Section */}
         <div className="flex justify-center">
  <Image
    src={Logo}
    alt="RaazGateX Logo"
    width={50}
    height={50}
    className="rounded-full shadow-md"
  />
</div>

        <h1 className="text-2xl font-bold text-blue-400 drop-shadow-md">
          RaazGateX
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium text-sm tracking-wide">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/cs" className="hover:text-blue-400 transition">GATE CS</Link>
          <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="/games" className="hover:text-blue-400 transition">Games</Link>
          <Link href="/videos" className="hover:text-blue-400 transition">YouTube</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 px-6 pb-4 bg-gray-800 rounded-lg shadow-md">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-sm hover:text-blue-400 transition">Home</Link>
          <Link href="/cs" onClick={() => setIsOpen(false)} className="block text-sm hover:text-blue-400 transition">GATE CS</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block text-sm hover:text-blue-400 transition">Projects</Link>
          <Link href="/games" onClick={() => setIsOpen(false)} className="block text-sm hover:text-blue-400 transition">Games</Link>
          <Link href="/videos" onClick={() => setIsOpen(false)} className="block text-sm hover:text-blue-400 transition">YouTube</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-sm hover:text-blue-400 transition">About</Link>
        </div>
      )}
    </nav>
  );
}
