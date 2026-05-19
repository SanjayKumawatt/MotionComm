import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Shield, Layout, ArrowRight, Activity, Code, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Platform = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      
      {/* 1. HERO SECTION (Honest Beta Vibe) */}
      <section className="relative bg-[#0b287a] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-[#061235]/40 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-3 py-1.5 rounded-sm mb-6">
                <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider">Currently in Private Beta</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                The Motioncomm Platform.
              </h1>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-xl">
                We are building two interconnected products: a backend API platform and a data analytics dashboard called MotionInsight. Both are in active development and being refined with our early-access users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-[#ffeb3b] text-[#0b287a] px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-white transition-colors flex items-center justify-center gap-2">
                  Request Early Access
                </Link>
                <Link to="/docs" className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-white/20 transition-colors text-center">
                  View Documentation
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block relative rounded-sm overflow-hidden h-[450px] shadow-2xl border border-white/10"
            >
              {/* Matte, realistic development/startup image */}
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Active Development" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-[#1140c1]/30 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CORE MODULES LAYER */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Core Modules
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6">
              What we are building and how it works.
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Our platform is segmented into independent modules. We are developing on the MERN stack (MongoDB, Express, React, Node.js) with Vite for frontend tooling and Tailwind CSS for styling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:border-[#1140c1] transition-colors flex flex-col h-full">
              <Database className="w-10 h-10 text-[#1140c1] mb-6" />
              <h3 className="text-xl font-bold mb-3">Secure Data Routing</h3>
              <p className="text-zinc-600 leading-relaxed text-sm flex-grow">
                We are building schema validation across our MongoDB and PostgreSQL layers to ensure data integrity as usage grows. Our routing module is designed to be stateless, making it straightforward to scale as client volume increases.
              </p>
            </div>
            <div className="p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:border-[#1140c1] transition-colors flex flex-col h-full">
              <Shield className="w-10 h-10 text-[#1140c1] mb-6" />
              <h3 className="text-xl font-bold mb-3">Authentication Middleware</h3>
              <p className="text-zinc-600 leading-relaxed text-sm flex-grow">
                Our authentication module implements JWT-based access control and input sanitisation at the API layer - removing the need for teams to configure this themselves from scratch.
              </p>
            </div>
            <div className="p-8 border border-zinc-200 bg-blue-50/50 rounded-sm hover:border-[#1140c1] transition-colors flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-bl-sm uppercase tracking-wider">In Development</div>
              <BarChart className="w-10 h-10 text-[#1140c1] mb-6" />
              <h3 className="text-xl font-bold mb-3">MotionInsight Analytics</h3>
              <p className="text-zinc-600 leading-relaxed text-sm flex-grow">
                Designed to make business data readable for non-technical founders. It connects to existing data sources and processes them to generate plain-language summaries and visual dashboards - without requiring SQL knowledge or a dedicated data analyst. We are currently building the MVP and accepting early-access signups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECH STACK (Honest & Realistic) */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Tech Stack
            </span>
            <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
              Built on well-understood, maintainable technology.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Frontend */}
            <div className="bg-white p-8 rounded-sm border border-zinc-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center">
                  <Layout className="w-6 h-6 text-[#1140c1]" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Frontend</h3>
              </div>
              <h4 className="font-bold text-[#1140c1] mb-2 text-sm">React + Vite + Tailwind CSS</h4>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Client interfaces are built with React and compiled with Vite. Tailwind CSS keeps styling consistent and maintainable as the codebase grows.
              </p>
            </div>

            {/* Backend */}
            <div className="bg-white p-8 rounded-sm border border-zinc-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center">
                  <Server className="w-6 h-6 text-[#1140c1]" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Backend</h3>
              </div>
              <h4 className="font-bold text-[#1140c1] mb-2 text-sm">Node.js + Express</h4>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Our API layer runs on Node.js with Express for modular routing. Stateless by design, making horizontal scaling straightforward as usage grows.
              </p>
            </div>

            {/* Databases */}
            <div className="bg-white p-8 rounded-sm border border-zinc-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center">
                  <Database className="w-6 h-6 text-[#1140c1]" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Databases</h3>
              </div>
              <h4 className="font-bold text-[#1140c1] mb-2 text-sm">MongoDB + PostgreSQL</h4>
              <p className="text-zinc-600 leading-relaxed text-sm">
                MongoDB for flexible operational data, PostgreSQL for structured relational data. Queries are indexed appropriately to maintain performance at scale.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-20 bg-[#0b287a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Join the Motioncomm Private Beta
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            We are actively looking for small businesses and development teams to test our MVP and provide feedback on our infrastructure tools.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#ffeb3b] text-[#0b287a] px-8 py-4 rounded-sm font-bold hover:bg-white transition-colors"
          >
            Apply for Early Access <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Platform;