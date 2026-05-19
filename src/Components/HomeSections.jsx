import React, { useState } from 'react';
import { Layers, Database, Shield, Code, Server, Check, Mail, MapPin, CheckCircle2, X, Cpu, Globe2, Layout, Activity, Terminal, Webhook, User, BarChart, FileJson } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HomeSections = () => {
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
    e.target.reset();
  };

  return (
    <div className="font-sans text-zinc-900 bg-white relative">
      
      {/* SECTION 1: WHY WE ARE BUILDING MOTIONCOMM */}
      <section className="py-24 border-b border-zinc-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
                - Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0b287a] mb-6">
                Why we are building Motioncomm.
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
              
              <div className="space-y-6 text-lg text-zinc-700 leading-relaxed font-medium">
                <p>
                  Most early-stage startups lose months building authentication, database schemas, and API boilerplate before writing a single line of business logic. We experienced this firsthand and are building tools to solve it.
                </p>
                <p>
                  Motioncomm is developing a modular backend API platform and a data analytics product - <strong className="text-zinc-900">MotionInsight</strong> - that gives development teams a clean, secure starting point. Our platform is built on Node.js, React, and MongoDB/PostgreSQL.
                </p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-sm overflow-hidden h-[450px] border border-zinc-200 bg-zinc-100 flex items-center justify-center"
            >
              {/* Clean, startup-focused placeholder image - No fake SLA overlays */}
              <div className="absolute inset-0 bg-[#0b287a]/10 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Code and Development" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-white p-4 flex items-center gap-3 rounded-sm border border-zinc-100 shadow-sm">
                <Terminal className="w-6 h-6 text-[#1140c1]" />
                <span className="font-bold text-sm text-zinc-800 tracking-wide uppercase">Active Development</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE ARE BUILDING (Current Focus) */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - What We Are Building
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6">
              Our current development focus.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Product 1: Backend API Platform */}
            <div className="bg-white p-10 border border-zinc-200 hover:border-[#1140c1] transition-colors relative overflow-hidden flex flex-col h-full">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6 rounded-sm">
                <Server className="w-6 h-6 text-[#1140c1]" />
              </div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">Backend API Platform</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">In Development</span>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6 flex-grow">
                A modular REST API infrastructure handling authentication, role-based access, and data routing - deployable via our SDK once released. Targeted at startups who want production-ready backend scaffolding without the overhead of building it from scratch.
              </p>
              <ul className="space-y-3 mt-auto pt-6 border-t border-zinc-100">
                <li className="flex items-start gap-3 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5 flex-shrink-0" /> JWT-based authentication middleware
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5 flex-shrink-0" /> RESTful data routing endpoints
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5 flex-shrink-0" /> Webhook configuration for third-party integrations
                </li>
              </ul>
            </div>

            {/* Product 2: MotionInsight */}
            <div className="bg-white p-10 border border-zinc-200 hover:border-[#1140c1] transition-colors relative overflow-hidden flex flex-col h-full">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6 rounded-sm">
                <BarChart className="w-6 h-6 text-[#1140c1]" />
              </div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">MotionInsight - Analytics</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">In Development</span>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6 flex-grow">
                MotionInsight is our SaaS analytics product under development. It is designed to give non-technical business owners a simple view of their operational data - pulling from CRM, sales, and marketing sources into a single dashboard with automated plain-language summaries generated from their data.
              </p>
              <ul className="space-y-3 mt-auto pt-6 border-t border-zinc-100">
                <li className="flex items-start gap-3 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5 flex-shrink-0" /> Connects to common data sources (CSV, Google Sheets, basic APIs)
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5 flex-shrink-0" /> Automated plain-language summaries of business metrics
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5 flex-shrink-0" /> Customisable dashboards - no SQL or coding required
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5 flex-shrink-0" /> Built for small business owners and early-stage teams
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: OUR FOUNDER */}
      <section className="py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-12 rounded-sm max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-sm">
                <User className="w-10 h-10 text-[#1140c1]" />
              </div>
              <div>
                <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-2 block">
                  - The Team
                </span>
                <h2 className="text-2xl font-extrabold text-zinc-900 mb-4">
                  Who is building Motioncomm.
                </h2>
                <p className="text-zinc-600 leading-relaxed font-medium mb-4">
                  Motioncomm was founded by Neetu Saini, a software engineer with a focus on backend systems and developer tooling. Neetu started Motioncomm after repeatedly experiencing the same problem across projects: engineering teams spending the majority of early-stage time on infrastructure rather than on their actual product.
                </p>
                <p className="text-zinc-600 leading-relaxed font-medium">
                  The company is run as a lean, engineering-led organisation with a remote development team based in Jaipur, Rajasthan, building both the API platform and the MotionInsight dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE TECHNOLOGY STACK (Kept Original - Matches perfectly) */}
      <section className="py-24 border-b border-zinc-200 bg-[#0b287a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <span className="text-[#ffeb3b] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Core Technologies
            </span>
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Built on Modern JavaScript & Cloud Tech
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
              Our infrastructure relies on established, high-performance technology stacks. Clean components, fast build tools, and strictly normalized databases.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Layout, name: "React Ecosystem", desc: "Vite, Tailwind & Components" },
              { icon: Cpu, name: "Node / Express", desc: "Fast, non-blocking APIs" },
              { icon: Database, name: "NoSQL & SQL", desc: "MongoDB / PostgreSQL" },
              { icon: Globe2, name: "Cloud Edge", desc: "Vercel & Distributed Servers" }
            ].map((tech, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 flex flex-col items-center text-center rounded-sm hover:bg-white/10 transition-colors">
                <tech.icon className="w-8 h-8 text-[#ffeb3b] mb-4" />
                <h4 className="text-white font-bold mb-1">{tech.name}</h4>
                <p className="text-blue-200 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT / REQUEST ACCESS */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="text-zinc-900">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#0b287a]">
                Get in Touch
              </h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed max-w-md">
                Interested in our early-access program or want to learn more about what we are building? Reach out to our team.
                <br /><br />
                <strong className="text-[#1140c1]">We review and respond to all inquiries within one working day.</strong>
              </p>

              <div className="mb-8 p-6 bg-white border border-zinc-200 rounded-sm">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[#1140c1]" />
                  <div>
                    <span className="block text-sm text-zinc-500 uppercase tracking-widest font-semibold mb-1">Direct Contact</span>
                    <div className="text-xl font-bold text-zinc-900 hover:text-[#1140c1] transition-colors break-all">
                      contact@motioncommservices.in
                    </div>
                  </div>
                </div>
              </div>

              {/* Transparent Location Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#1140c1] flex-shrink-0 mt-1" />
                  <div>
                    <span className="block text-sm text-zinc-500 uppercase tracking-widest font-semibold mb-2">Engineering Hub</span>
                    <address className="text-zinc-700 not-italic leading-relaxed font-medium">
                      Remote Operations & Development<br />
                      Jaipur, Rajasthan, India
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 pt-4 border-t border-zinc-200">
                  <FileJson className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="block text-xs text-zinc-400 uppercase tracking-widest font-semibold mb-1">Registered Base</span>
                    <address className="text-zinc-500 not-italic leading-relaxed text-sm">
                      S/o Lt. K.k. Debnath. A.d, Nagar Road No 7.<br />
                      Agartala, Arundhutinagar, West Tripura<br />
                      Tripura, India, 799003
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 border border-zinc-200 border-t-4 border-t-[#1140c1] relative">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Join the Waitlist / Inquiry</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  <label className="text-sm font-bold text-zinc-700">Interest Area</label>
                  <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] transition-all" required>
                    <option value="">Select Requirement</option>
                    <option value="api">Backend API Platform (Waitlist)</option>
                    <option value="analytics">MotionInsight Analytics (Waitlist)</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700">Tell us about your team/project</label>
                  <textarea 
                    rows="4" 
                    placeholder="Briefly describe what you are building..."
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1140c1] text-white font-bold py-4 rounded-sm hover:bg-[#0b287a] transition-colors mt-4 text-lg flex justify-center items-center gap-2"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* POP-UP TOAST NOTIFICATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
            className="fixed bottom-6 right-6 z-50 bg-[#0b287a] border-l-4 border-[#ffeb3b] p-4 sm:p-5 rounded-sm max-w-sm flex items-start gap-4"
          >
            <CheckCircle2 className="w-6 h-6 text-[#ffeb3b] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Message Received</h4>
              <p className="text-blue-100 text-xs font-medium leading-relaxed">
                Thank you for reaching out. Our team will get back to you shortly.
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

export default HomeSections;