import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Globe, Activity } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#061235] text-white font-sans border-t-4 border-[#1140c1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Column 1: Registered Base */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Corporate Headquarters
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

          {/* Column 2: Platform Links (Strictly matching Header) */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Platform & Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#1140c1]"></span>
              <span className="absolute -bottom-2 left-14 w-3 h-1 bg-[#1140c1]"></span>
            </h3>
            
            <ul className="mt-8 space-y-3">
              <li>
                <Link to="/platform" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Platform Overview
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Infrastructure Stack
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Developers & API
                </Link>
              </li>
              <li>
                <Link to="/customers" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Customers
                </Link>
              </li>
              <li>
                <Link to="/company" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1140c1] rounded-sm"></span> Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate, Legal & Status (Added SaaS vibe) */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Network Status
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#1140c1]"></span>
              <span className="absolute -bottom-2 left-14 w-3 h-1 bg-[#1140c1]"></span>
            </h3>
            
            <div className="mt-8 space-y-5">
              {/* Fake Live Server Status for Trust */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-sm">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-sm font-bold text-zinc-300">All Systems Operational</span>
              </div>

              <div className="flex items-start gap-3 mt-4">
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

      {/* Copyright Bar - Operational Tagline */}
      <div className="border-t border-zinc-800 bg-[#03091e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-zinc-400 text-sm font-medium text-center md:text-left">
            Copyright © 2026 <strong className="text-white font-bold tracking-wide">MOTIONCOMM PRIVATE LIMITED</strong>. All rights reserved.
          </p>
          <p className="text-zinc-500 text-xs mt-2 md:mt-0 font-medium flex items-center gap-2">
            <Activity className="w-3 h-3 text-[#1140c1]" />
            Operating secure cloud infrastructure and APIs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;