import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from "../assets/hero.webp"

const Hero = () => {
  return (
    <section className="relative bg-[#1140c1] overflow-hidden font-sans">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content (Strictly Operational & Product-Focused) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Scalable Cloud Infrastructure for Engineering Teams.
            </h1>
            
            <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-xl">
              Motioncomm provides robust, high-performance API endpoints and secure server environments. We handle the complex backend routing and deployment pipelines, so your team can focus entirely on shipping product to active users.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link 
                to="/contact"
                className="bg-[#ffeb3b] text-[#0b287a] px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-white transition-colors flex items-center gap-2"
              >
                Request Access <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/docs"
                className="text-white px-6 py-3.5 rounded-sm text-sm font-bold border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" /> View Documentation
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Provided Illustration Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex justify-center z-10"
          >
            {/* Cloud/Platform floating animation (Removed Drone references) */}
            <motion.img 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              src={img} 
              alt="Motioncomm Cloud Infrastructure" 
              className="w-full max-w-[450px] h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;