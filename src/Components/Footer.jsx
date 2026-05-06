import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Globe, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#061235] text-white font-sans border-t-4 border-[#1140c1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Column 1: Office Address */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Office Address
              {/* Blue underline matching reference site */}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#1140c1]"></span>
              <span className="absolute -bottom-2 left-14 w-3 h-1 bg-[#1140c1]"></span>
            </h3>
            
            <div className="mt-8 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-1" />
              <address className="text-zinc-300 not-italic leading-relaxed text-sm font-medium">
                S/o Lt. K.k. Debnath. A.d, Nagar Road No 7.<br />
                Agartala, Arundhutinagar,<br />
                West Tripura, Sadar,<br />
                Tripura, India, 799003
              </address>
            </div>
          </div>

          {/* Column 2: Pages (Strictly 5 items as per header) */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Pages
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#1140c1]"></span>
              <span className="absolute -bottom-2 left-14 w-3 h-1 bg-[#1140c1]"></span>
            </h3>
            
            <ul className="mt-8 space-y-3">
              <li>
                <Link to="/" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Our Story
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Core Capabilities
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Development Roadmap
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Legal (Replaced Certificates to avoid fake claims) */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Corporate & Legal
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#1140c1]"></span>
              <span className="absolute -bottom-2 left-14 w-3 h-1 bg-[#1140c1]"></span>
            </h3>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-300 text-sm font-medium">
                  motioncommservices.in
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-0.5" />
                <div className="text-zinc-300 hover:text-white transition-colors text-sm font-medium">
                  contact@motioncommservices.in
                </div>
              </div>
              
              
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar - STRICT RULE: Exact Full Company Name */}
      <div className="border-t border-zinc-800 bg-[#03091e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-zinc-400 text-sm font-medium text-center md:text-left">
            Copyright © 2026 <strong className="text-white font-bold tracking-wide">MOTIONCOMM PRIVATE LIMITED</strong>. All rights reserved.
          </p>
          <p className="text-zinc-500 text-xs mt-2 md:mt-0 font-medium">
            IT infrastructure & digital engineering systems in active development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;