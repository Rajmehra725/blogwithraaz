'use client';

import Link from 'next/link';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-4">About GATE Hub</h4>
          <p className="text-sm">
            GATE Preparation Hub is your one-stop platform for syllabus, study material, mock tests, and expert guidance to crack the GATE exam with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/gate-syllabus">GATE Syllabus</Link></li>
            <li><Link href="/mock-tests">Mock Tests</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/profile">Developer Profile</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="News">Daily News</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-4">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>Email: support@gatehub.in</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: New Delhi, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" aria-label="YouTube" className="hover:text-red-500"><FaYoutube /></a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-500"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} GATE Preparation Hub. All rights reserved.
      </div>
    </footer>
  );
}
