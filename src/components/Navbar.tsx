import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all ${
      isScrolled ? 'bg-black' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-white text-2xl font-bold">
            INK & SOUL
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-red-500 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-red-500 transition-colors">About</a>
            <a href="#services" className="text-white hover:text-red-500 transition-colors">Services</a>
            <a href="#gallery" className="text-white hover:text-red-500 transition-colors">Gallery</a>
            <a href="#contact" className="text-white hover:text-red-500 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-white hover:text-red-500 transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-red-500 transition-colors">About</a>
              <a href="#services" className="block px-3 py-2 text-white hover:text-red-500 transition-colors">Services</a>
              <a href="#gallery" className="block px-3 py-2 text-white hover:text-red-500 transition-colors">Gallery</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-red-500 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}