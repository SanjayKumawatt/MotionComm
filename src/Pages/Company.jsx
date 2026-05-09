import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, Globe, MapPin, Briefcase, Users, LayoutGrid, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Company = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      
      {/* 1. HERO SECTION (Company Identity) */}
      <section className="relative bg-[#0b287a] overflow-hidden pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-sm mb-6">
              <Building2 className="w-4 h-4 text-[#ffeb3b]" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">About The Company</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Building the backbone of modern digital business.
            </h1>
            <p className="text-blue-100 text-lg mb-0 leading-relaxed max-w-3xl mx-auto">
              Motioncomm Private Limited is a technology company dedicated to simplifying enterprise-grade software and cloud infrastructure. We operate globally, helping businesses scale without technical constraints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR MISSION & VISION */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
                - Our Purpose
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                Why Motioncomm exists.
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
              
              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                <p>
                  As digital ecosystems grow more complex, companies often find themselves trapped by legacy systems, fragile architectures, and fragmented marketing data. Motioncomm was established to break this cycle.
                </p>
                <p>
                  <strong>Our mission</strong> is to provide robust, scalable, and highly available technological solutions. We focus heavily on modern MERN stack architectures and automated data pipelines so that our clients can focus entirely on their core business operations rather than server maintenance.
                </p>
              </div>
            </div>

            <div className="relative rounded-sm overflow-hidden h-[400px] border border-zinc-200 shadow-lg">
              {/* Matte Corporate/Business abstract image */}
              <img 
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Corporate Strategy" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-[#1140c1]/10 mix-blend-multiply"></div>
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-sm shadow-xl flex items-center gap-3">
                <Target className="w-6 h-6 text-[#1140c1]" />
                <span className="font-bold text-zinc-900">Mission Driven</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORPORATE VALUES */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0b287a] mb-4">
              Our Corporate Values
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              The foundational principles that guide our product development, client relationships, and internal culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-zinc-200 rounded-sm hover:border-[#1140c1] transition-colors">
              <LayoutGrid className="w-8 h-8 text-[#1140c1] mb-5" />
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Architectural Integrity</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                We believe in doing it right the first time. Our infrastructure is built to be modular, stateless, and scalable from day one, preventing technical debt for our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 border border-zinc-200 rounded-sm hover:border-[#1140c1] transition-colors">
              <Globe className="w-8 h-8 text-[#1140c1] mb-5" />
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Absolute Transparency</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Honesty in operations. We provide clear documentation, real-time system status, and transparent pricing. We do not overpromise on capabilities that are not currently live.
              </p>
            </div>

            <div className="bg-white p-8 border border-zinc-200 rounded-sm hover:border-[#1140c1] transition-colors">
              <Shield className="w-8 h-8 text-[#1140c1] mb-5" />
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Uncompromising Security</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Data integrity is our highest priority. Security is not treated as an add-on; it is integrated into the foundation of every product, API, and internal workflow we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE TEAM & CULTURE (No Names, purely company-focused) */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#03091e] rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-[#ffeb3b] font-bold text-sm tracking-widest uppercase mb-4 block">
                - Organization
              </span>
              <h2 className="text-3xl font-extrabold text-white mb-6">
                A collective of builders and problem solvers.
              </h2>
              <p className="text-blue-100 leading-relaxed mb-8">
                Motioncomm is driven by a specialized team of cloud architects, software engineers, and digital strategists. We operate a lean, highly technical organization focused on maintaining high-performance environments. 
              </p>
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#1140c1]" />
                  <span className="font-bold">Distributed Team</span>
                </div>
                <span className="text-zinc-600">|</span>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#1140c1]" />
                  <span className="font-bold">Engineering Led</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
              {/* Professional team/office abstract image */}
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Motioncomm Operations" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATIONS & FOOTPRINT */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">
              Company Footprint
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              While our software serves clients globally, Motioncomm Private Limited operates from established hubs in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Registered Office */}
            <div className="bg-white p-8 border border-zinc-200 rounded-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100">
                <MapPin className="w-6 h-6 text-[#1140c1]" />
                <h3 className="text-xl font-bold text-zinc-900">Corporate Headquarters</h3>
              </div>
              <address className="text-zinc-600 not-italic leading-relaxed font-medium">
                S/o Lt. K.k. Debnath. A.d, Nagar Road No 7.<br />
                Agartala, Arundhutinagar,<br />
                West Tripura, Sadar,<br />
                Tripura, India, 799003
              </address>
              <div className="mt-6 pt-4 border-t border-zinc-100">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Registered Legal Entity Base</span>
              </div>
            </div>

            {/* Engineering Hub */}
            <div className="bg-white p-8 border border-zinc-200 rounded-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100">
                <MapPin className="w-6 h-6 text-[#1140c1]" />
                <h3 className="text-xl font-bold text-zinc-900">Engineering Hub</h3>
              </div>
              <address className="text-zinc-600 not-italic leading-relaxed font-medium">
                Jaipur IT Cluster<br />
                Jaipur, Rajasthan<br />
                India
              </address>
              <div className="mt-6 pt-4 border-t border-zinc-100">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Development & Operations</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-20 bg-[#1140c1] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Partner with Motioncomm
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Discover how our infrastructure and engineering capabilities can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-white text-[#0b287a] px-8 py-4 rounded-sm font-bold hover:bg-zinc-100 transition-colors shadow-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Company;