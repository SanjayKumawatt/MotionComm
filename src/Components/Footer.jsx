import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#061235] text-white font-sans border-t-4 border-[#1140c1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Column 1: Registered Address */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Registered Address
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#1140c1]"></span>
              <span className="absolute -bottom-2 left-14 w-3 h-1 bg-[#1140c1]"></span>
            </h3>
            
            <div className="mt-8 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-1" />
              <address className="text-zinc-300 not-italic leading-relaxed text-sm font-medium">
                S/o Lt. K.K. Debnath, A.D. Nagar Road No. 7,<br />
                Agartala, Arundhutinagar,<br />
                West Tripura, Sadar,<br />
                Tripura, India – 799003
              </address>
            </div>
          </div>

          {/* Column 2: Platform Links (Synced with Header) */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Platform & Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#1140c1]"></span>
              <span className="absolute -bottom-2 left-14 w-3 h-1 bg-[#1140c1]"></span>
            </h3>
            
            <ul className="mt-8 space-y-3">
              <li>
                <Link to="/platform" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Platform
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Products
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Developers & API
                </Link>
              </li>
              <li>
                <Link to="/company" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Company
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Motioncomm Private Limited
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#1140c1]"></span>
              <span className="absolute -bottom-2 left-14 w-3 h-1 bg-[#1140c1]"></span>
            </h3>
            
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-300 text-sm font-medium">
                  motioncommservices.in
                </span>
              </div>
              {/* Direct Link to Contact Page */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-0.5" />
                <Link to="/contact" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium">
                  contact@motioncommservices.in
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar - Clean & Simple */}
      <div className="border-t border-zinc-800 bg-[#03091e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center">
          <p className="text-zinc-400 text-sm font-medium text-center">
            Copyright © 2026 Motioncomm Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;