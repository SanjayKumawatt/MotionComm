import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle2, X, Terminal, Clock, Server, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  // State to control the toast pop-up
  const [showToast, setShowToast] = useState(false);

  // Form submit handler - FUNCTIONALITY KEPT EXACTLY THE SAME
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    
    // Show pop-up
    setShowToast(true);

    // Hide pop-up after 3.5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3500);

    // Clear form fields
    e.target.reset();
  };

  return (
    <div className="font-sans text-zinc-900 bg-zinc-50 min-h-screen">
      
      {/* SECTION 1: HERO & PRE-NOTES (Updated for Live Operational Vibe) */}
      <section className="bg-[#1140c1] text-white py-24 border-b-8 border-[#0b287a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Engineering Support Online</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                Request platform access.
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed font-medium mb-10">
                Motioncomm actively provisions scalable cloud environments and API access for engineering teams. Submit your technical requirements below to get your application connected to our infrastructure.
              </p>

              {/* 3 Things Pre-Note - Updated for SaaS reality */}
              <div className="bg-[#0b287a] p-8 rounded-sm border-l-4 border-[#ffeb3b]">
                <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Before you submit:</h4>
                <ul className="space-y-4 text-sm text-blue-100">
                  <li className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-[#ffeb3b] flex-shrink-0 mt-0.5" />
                    Please provide specific technical details (e.g., expected request volume, tech stack).
                  </li>
                  <li className="flex items-start gap-3">
                    <Server className="w-5 h-5 text-[#ffeb3b] flex-shrink-0 mt-0.5" />
                    API keys are provisioned manually to ensure platform stability and resource allocation.
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#ffeb3b] flex-shrink-0 mt-0.5" />
                    <strong>Our engineering team reviews all requests within one working day.</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pexels Image with Matte Overlay (Tech/Server focus) */}
            <div className="relative h-full min-h-[400px] rounded-sm overflow-hidden border border-[#0b287a] shadow-2xl hidden lg:block">
              <div className="absolute inset-0 bg-[#0b287a]/60 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cloud Infrastructure Operations" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT FORM & DIRECT DETAILS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0b287a] mb-6">
                  Official Details
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-8">
                  For direct engineering correspondence, API documentation requests, or legal notices, please use the registered details below. 
                </p>
              </div>

              {/* Visible Direct Email */}
              <div className="bg-white p-8 border border-zinc-200 shadow-sm rounded-sm hover:border-[#1140c1] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1140c1]" />
                  </div>
                  <div>
                    <span className="block text-sm text-zinc-500 uppercase tracking-widest font-bold mb-1">Direct Email</span>
                    <div className="text-lg font-bold text-[#0b287a] hover:text-[#1140c1] transition-colors break-all">
                      contact@motioncommservices.in
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Address with Pincode */}
              <div className="bg-white p-8 border border-zinc-200 shadow-sm rounded-sm hover:border-[#1140c1] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1140c1]" />
                  </div>
                  <div>
                    <span className="block text-sm text-zinc-500 uppercase tracking-widest font-bold mb-2">Registered Base</span>
                    <address className="text-zinc-800 not-italic leading-relaxed font-medium">
                      S/o Lt. K.k. Debnath. A.d, Nagar Road No 7.<br />
                      Agartala, Arundhutinagar,<br />
                      West Tripura, Sadar,<br />
                      Tripura, India, 799003
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 border-t-4 border-[#1140c1] shadow-xl rounded-sm">
                <h3 className="text-2xl font-bold text-zinc-900 mb-8">Submit Infrastructure Requirements</h3>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700">Work Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">Deployment Scale / Organization</label>
                    <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] transition-all" required>
                      <option value="">Select Category</option>
                      <option value="startup">Startup (Early Stage Deployment)</option>
                      <option value="sme">SME (Scaling Infrastructure)</option>
                      <option value="corporate">Enterprise (High-Concurrency Need)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">System / Technical Specifications</label>
                    <textarea 
                      rows="6" 
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] transition-all resize-none"
                      placeholder="Please describe the APIs, data pipelines, or web infrastructure you are looking to deploy..."
                      required
                    ></textarea>
                  </div>

                  {/* Operational CTA Button */}
                  <button 
                    type="submit"
                    className="w-full bg-[#1140c1] text-white font-bold py-4 rounded-sm hover:bg-[#0b287a] transition-colors mt-2 text-lg flex justify-center items-center gap-2"
                  >
                    <Terminal className="w-5 h-5" /> Request Access Details
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POP-UP TOAST NOTIFICATION (Functionality Preserved) */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
            className="fixed bottom-6 right-6 z-50 bg-[#0b287a] border-l-4 border-[#ffeb3b] shadow-2xl p-4 sm:p-5 rounded-sm max-w-sm flex items-start gap-4"
          >
            <CheckCircle2 className="w-6 h-6 text-[#ffeb3b] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Request Received</h4>
              <p className="text-blue-100 text-xs font-medium leading-relaxed">
                Your technical specifications have been submitted. Our team will review and respond within one working day.
              </p>
            </div>
            <button 
              onClick={() => setShowToast(false)} 
              className="text-blue-200 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Contact;