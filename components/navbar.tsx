import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gray-200 text-black shadow-lg w-full">
      <div className="w-full px-6">
        <div className="flex justify-between h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/gimsoc_no_bg.png"
                  alt="Gimsoc"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="px-4 py-3 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-purple-400 transition duration-300">Home</a>
            <a href="#" className="px-4 py-3 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-purple-400 transition duration-300">Products</a>
            <a href="#" className="px-4 py-3 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-purple-400 transition duration-300">Services</a>
            <a href="#" className="px-4 py-3 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-purple-400 transition duration-300">About</a>
            <a href="#" className="px-4 py-3 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-purple-400 transition duration-300">Team</a>
            <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 rounded-md text-sm font-medium hover:opacity-90 transition duration-300">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-md hover:bg-gray-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <a href="#" className="block px-4 py-3 rounded-md text-base font-medium hover:bg-gray-700 hover:text-purple-400 transition duration-300">Home</a>
            <a href="#" className="block px-4 py-3 rounded-md text-base font-medium hover:bg-gray-700 hover:text-purple-400 transition duration-300">Products</a>
            <a href="#" className="block px-4 py-3 rounded-md text-base font-medium hover:bg-gray-700 hover:text-purple-400 transition duration-300">Services</a>
            <a href="#" className="block px-4 py-3 rounded-md text-base font-medium hover:bg-gray-700 hover:text-purple-400 transition duration-300">About</a>
            <a href="#" className="block px-4 py-3 rounded-md text-base font-medium hover:bg-gray-700 hover:text-purple-400 transition duration-300">Team</a>
            <a href="#" className="block bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 mt-2 rounded-md text-base font-medium hover:opacity-90 transition duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}