import React from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, ShieldCheck, Database, ArrowRight, Code2, Layout, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const Infrastructure = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      
      {/* 1. HERO SECTION (Honest & Transparent) */}
      <section className="relative bg-[#03091e] overflow-hidden pt-24 pb-32 border-b-4 border-[#1140c1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#1140c1]/20 border border-[#1140c1]/50 px-3 py-1.5 rounded-sm mb-6">
                <Code2 className="w-4 h-4 text-blue-300" />
                <span className="text-xs font-bold text-blue-100 uppercase tracking-wider">Current Architecture</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Our Development Stack - Transparent and Honest.
              </h1>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-xl">
                We believe in showing exactly what we are building on. Below is an honest overview of our current technical architecture. We are an early-stage team and our infrastructure reflects that stage.
              </p>
              
              <Link to="/docs" className="inline-flex items-center gap-2 text-[#ffeb3b] font-bold hover:text-white transition-colors">
                Explore API Documentation <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-sm overflow-hidden h-[450px] border border-zinc-800 hidden lg:block"
            >
              {/* Clean, matte workspace/server image */}
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Development Infrastructure" 
                className="w-full h-full object-cover grayscale-[30%] opacity-80"
              />
              <div className="absolute inset-0 bg-[#0b287a]/30 mix-blend-multiply"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. OUR STACK */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Core Technologies
            </span>
            <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
              Technologies powering Motioncomm and MotionInsight.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* React + Vite (Frontend) */}
            <div className="flex gap-6 p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:border-[#1140c1] transition-colors">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shadow-sm">
                  <Layout className="w-7 h-7 text-[#1140c1]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">React + Vite (Frontend)</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  Client-facing applications are built with React, compiled with Vite for fast iteration and optimised production output. Tailwind CSS handles styling consistently across both products.
                </p>
              </div>
            </div>

            {/* Node.js + Express (Backend API) */}
            <div className="flex gap-6 p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:border-[#1140c1] transition-colors">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shadow-sm">
                  <Server className="w-7 h-7 text-[#1140c1]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Node.js + Express (Backend API)</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  Our API layer is built with Node.js and Express. Well understood by our team, strong open-source ecosystem, and fits the stateless API design we are developing.
                </p>
              </div>
            </div>

            {/* MongoDB + PostgreSQL (Data Layer) */}
            <div className="flex gap-6 p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:border-[#1140c1] transition-colors">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shadow-sm">
                  <Database className="w-7 h-7 text-[#1140c1]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">MongoDB + PostgreSQL (Data Layer)</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  MongoDB for flexible document storage, PostgreSQL where relational integrity is required. Right storage model per use case rather than forcing everything into one database type.
                </p>
              </div>
            </div>

            {/* Authentication & Security */}
            <div className="flex gap-6 p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:border-[#1140c1] transition-colors">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-7 h-7 text-[#1140c1]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Authentication & Security</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  All API endpoints use JWT-based authentication. Input sanitisation and rate limiting applied at the middleware layer. Security built in from the foundation.
                </p>
              </div>
            </div>

            {/* Hosting & Deployment (Full Width) */}
            <div className="flex gap-6 p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:border-[#1140c1] transition-colors md:col-span-2 max-w-4xl mx-auto">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shadow-sm">
                  <Cloud className="w-7 h-7 text-[#1140c1]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Hosting & Deployment</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  We are currently deployed on cloud infrastructure using standard CI practices. As our platform grows, we will expand our deployment architecture to match usage demands. We do not claim multi-region or global CDN infrastructure at this stage - we are scaling up progressively.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DEPLOYMENT PHILOSOPHY */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
                - Deployment Philosophy
              </span>
              <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
                Honest about our current stage.
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
              
              <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-medium">
                <p>
                  We are a newly incorporated company actively building our first products. Our infrastructure is appropriate for our current stage - functional, secure, and designed to scale as our user base grows.
                </p>
                <p>
                  We are seeking cloud infrastructure credits to grow our development capacity, reduce compute costs during the MVP phase, and serve our early-access users reliably as we scale.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-sm overflow-hidden h-[400px] border border-zinc-200 shadow-lg">
                {/* Matte Tech/Code Image */}
                <img 
                  src="https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-close-up-of-circuit-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Motherboard and Tech" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-[#0b287a]/10 mix-blend-multiply"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-20 bg-[#1140c1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-6">
            Ready to build with us?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Join our early-access program and integrate with our developing infrastructure today.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#ffeb3b] text-[#0b287a] px-8 py-4 rounded-sm font-bold hover:bg-white transition-colors shadow-sm"
          >
            Request API Access
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Infrastructure;