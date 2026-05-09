import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo.png"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 🟩 FOCUS ON PRODUCT & INFRASTRUCTURE
  const navLinks = [
    { title: 'Platform', path: '/platform' },
    { title: 'Infrastructure', path: '/infrastructure' },
    { title: 'Developers & API', path: '/docs' },
    { title: 'Customers', path: '/customers' },
    { title: 'Company', path: '/company' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      <div className="h-1.5 w-full bg-[#1140c1]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex mr-5 items-center">
              <img src={logo} className='h-9' alt="MotionComm Logo" />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-[#0b287a] leading-none">
                  MOTIONCOMM
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`text-sm font-bold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#1140c1]' 
                    : 'text-[#0b287a] hover:text-[#1140c1]'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) - 🟩 Clean, no /login */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-[#1140c1] text-white text-sm font-bold px-6 py-2.5 rounded-sm hover:bg-[#0b287a] transition-colors duration-200"
            >
              Request Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0b287a] hover:text-[#1140c1] focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated with Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 text-base font-bold rounded-sm ${
                    isActive(link.path)
                      ? 'text-[#1140c1] bg-blue-50'
                      : 'text-[#0b287a] hover:text-[#1140c1] hover:bg-blue-50'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-zinc-100 flex flex-col space-y-3">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-[#1140c1] text-white px-5 py-3 rounded-sm font-bold hover:bg-[#0b287a] transition-colors"
                >
                  Request Access
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;