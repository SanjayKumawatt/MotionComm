import React, { useState } from 'react';
import { Layers, Database, Shield, Code, Server, Smartphone, Check, Mail, MapPin, CheckCircle2, X, Cpu, Globe2, Layout, Activity, Briefcase, Clock } from 'lucide-react';
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
      
      {/* SECTION 1: THE PROBLEM & OUR STANCE */}
      <section className="py-24 border-b border-zinc-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
                - Industry Gap
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0b287a] mb-6">
                Why we are building Motioncomm.
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
              
              <div className="space-y-6 text-lg text-zinc-700 leading-relaxed font-medium">
                <p>
                  In the current IT landscape, businesses often deal with rushed software deployments and fragile digital marketing setups. Code is bloated, servers are poorly configured, and long-term maintainability is ignored in favor of quick launches.
                </p>
                <p>
                  Motioncomm Private Limited is structuring a different approach. We are spending our initial phase writing clean, modular code and setting up resilient infrastructure. When our IT and digital marketing solutions launch, they will be designed to handle heavy data loads and complex logic without breaking under pressure. We do not patch problems; we engineer systems to avoid them entirely.
                </p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-sm overflow-hidden h-[450px] shadow-lg border border-zinc-100"
            >
              <div className="absolute inset-0 bg-[#0b287a]/30 mix-blend-multiply z-10"></div>
              <img 
                src="https://plus.unsplash.com/premium_vector-1745597561527-3dfb4a79289c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="IT Server Infrastructure" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-white p-4 flex items-center gap-3 rounded-sm shadow-xl">
                <Server className="w-6 h-6 text-[#1140c1]" />
                <span className="font-bold text-sm text-zinc-800 tracking-wide uppercase">Core Infrastructure</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: UPCOMING CORE CAPABILITIES */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Development Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6">
              Our Upcoming IT & Marketing Infrastructure
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              We are currently programming the core modules for our primary service offerings. Once active, our clients will have access to custom-built digital assets tailored for their operational logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-zinc-200 shadow-sm hover:border-[#1140c1] transition-colors relative overflow-hidden group">
              <div className="w-12 h-12 bg-[#1140c1]/10 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Web Applications</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Our team is building the boilerplate for full-stack web platforms using modern JavaScript frameworks. These applications will allow businesses to automate internal workflows, manage databases securely, and provide fast-loading portals for their users.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> High-concurrency architecture
                </li>
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> API-first development
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 border border-zinc-200 shadow-sm hover:border-[#1140c1] transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-[#1140c1]/10 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Marketing Pipelines</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Marketing requires a solid technical backbone. We are designing data-driven marketing systems that will help brands capture leads accurately. When fully deployed, these pipelines will reduce manual tracking errors and improve lead qualification processes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> Technical SEO frameworks
                </li>
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> Analytics integration
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 border border-zinc-200 shadow-sm hover:border-[#1140c1] transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-[#1140c1]/10 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Hosting Configurations</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                A software product is only as stable as its server. We are setting up deployment protocols that will ensure high uptime and strict resource management. We are committed to applying appropriate security measures on launch across all our server environments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> Scalable database routing
                </li>
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> Load balancing protocols
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: THE TECHNOLOGY STACK */}
      <section className="py-24 border-b border-zinc-200 bg-[#0b287a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <span className="text-[#ffeb3b] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Development Environment
            </span>
            <h2 className="text-3xl font-extrabold text-white mb-6">
              The Technology We Are Utilizing
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
              We do not chase temporary trends. The systems we are building rely on established, high-performance tech stacks designed for long-term stability and code maintainability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Layout, name: "Frontend Frameworks", desc: "React & Component UI" },
              { icon: Cpu, name: "Backend Logic", desc: "Node & Express routing" },
              { icon: Database, name: "Database Systems", desc: "NoSQL & Relational structures" },
              { icon: Globe2, name: "Cloud Deployment", desc: "Distributed server networks" }
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

      {/* NEW SECTION 4: TARGET SECTORS & INFRASTRUCTURE */}
      <section className="py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-sm overflow-hidden h-[500px] shadow-lg border border-zinc-100 order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/vector-1761072429394-50473615cced?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Global Network" 
                className="w-full h-full object-cover grayscale-[30%]"
              />
            </motion.div>

            <div className="order-1 lg:order-2">
              <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
                - Architectural Focus
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0b287a] mb-6">
                Designed for Complex Operations.
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
              
              <div className="space-y-6 text-lg text-zinc-700 leading-relaxed font-medium mb-8">
                <p>
                  While our systems are adaptable, we are specifically architecting our upcoming platforms to handle environments with high data throughput and strict compliance needs. 
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border border-zinc-200 bg-zinc-50 rounded-sm">
                  <Briefcase className="w-6 h-6 text-[#1140c1] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Corporate Enterprises</h4>
                    <p className="text-sm text-zinc-600">Internal management tools and secure employee portals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-zinc-200 bg-zinc-50 rounded-sm">
                  <Activity className="w-6 h-6 text-[#1140c1] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">E-Commerce & Logistics</h4>
                    <p className="text-sm text-zinc-600">High-concurrency APIs designed to track live inventory and traffic.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION 5: METHODOLOGY / PHASING */}
      <section className="py-24 border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
              Current Operational Phase
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl mx-auto">
              We believe in complete transparency regarding our startup's timeline. Here is how we are structuring our rollout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-t-4 border-zinc-300">
              <div className="text-zinc-400 font-bold mb-4">PHASE 01</div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Core Architecture</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">Defining database schemas, setting up secure routing, and writing the foundational boilerplate. <span className="font-bold text-[#1140c1]">(Completed)</span></p>
            </div>
            <div className="bg-white p-8 border-t-4 border-[#1140c1] shadow-md transform -translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <div className="text-[#1140c1] font-bold">PHASE 02</div>
                <span className="bg-[#ffeb3b] text-[#0b287a] text-xs font-bold px-2 py-1 rounded-sm">ACTIVE</span>
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Component Development</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">Building modular frontend components, testing API endpoints, and finalizing security middleware.</p>
            </div>
            <div className="bg-white p-8 border-t-4 border-zinc-300">
              <div className="text-zinc-400 font-bold mb-4">PHASE 03</div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">Service Deployment</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">Final server configuration, load testing, and opening our full IT and marketing services to the public.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TECHNICAL STANCE */}
      <section className="py-24 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
                  Engineering Principles
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                  The core logic of our company dictates that a strong foundation prevents future technical debt. Every component we are writing today is strictly audited for performance.
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-64 mb-8 rounded-sm overflow-hidden"
              >
                 <div className="absolute inset-0 bg-[#1140c1]/40 mix-blend-multiply z-10"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                    alt="Code Architecture" 
                    className="w-full h-full object-cover grayscale-[30%]"
                 />
              </motion.div>

              <div className="bg-[#1140c1] text-white p-8 rounded-sm">
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2"><Clock className="w-5 h-5"/> Notice on Active Projects</h4>
                <p className="text-sm text-blue-100 leading-relaxed">
                  As a newly incorporated entity, we are currently limiting external client onboarding to focus 100% on product development and framework testing. We aim to open public registration soon.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-10 lg:pl-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Layers className="w-8 h-8 text-[#1140c1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Component-Based Architecture</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Our entire front-end ecosystem is being built on modular, reusable components. This approach will allow us to deploy updates rapidly and maintain a consistent, flat design aesthetic across all client deliverables without redundant code.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Database className="w-8 h-8 text-[#1140c1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Strict Data Structuring</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    We do not rely on unstructured data dumping. Our database schemas are being actively normalized to ensure fast query response times. When our applications go live, they will handle large-scale inventory and user records cleanly.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="w-8 h-8 text-[#1140c1]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Baseline Security Protocols</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    We refuse to claim non-existent certifications. Instead, we are manually coding input sanitization, secure routing, and strict authentication middleware into our systems right now, ensuring baseline security is met before any service touches a public server.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT / EARLY INTEREST FORM */}
      <section className="py-24 bg-[#0b287a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Register Your Early Interest
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-md">
                We are actively building our client roster for our upcoming launch. If your business requires serious IT infrastructure or technical marketing pipelines, send us your requirements. 
                <br /><br />
                <strong className="text-[#ffeb3b]">We respond within one working day.</strong>
              </p>

              <div className="mb-10 p-6 bg-white/10 border border-white/20 rounded-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-6 h-6 text-[#ffeb3b]" />
                  <div>
                    <span className="block text-sm text-blue-200 uppercase tracking-widest font-semibold mb-1">Direct Email</span>
                    <div className="text-xl font-bold text-white hover:text-[#ffeb3b] transition-colors">
                      contact@motioncommservices.in
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#ffeb3b] flex-shrink-0 mt-1" />
                <div>
                  <span className="block text-sm text-blue-200 uppercase tracking-widest font-semibold mb-2">Registered Address</span>
                  <address className="text-white not-italic leading-relaxed font-medium">
                    S/o Lt. K.k. Debnath. A.d, Nagar Road No 7.<br />
                    Agartala, Arundhutinagar,<br />
                    West Tripura, Sadar,<br />
                    Tripura, India, 799003
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 border-t-4 border-[#ffeb3b] shadow-xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-[#0b287a] mb-6">Submit Your Details</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">Business Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700">Organisation Type (Optional)</label>
                  <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] focus:border-transparent transition-all">
                    <option value="">Select Option</option>
                    <option value="startup">Startup / New Business</option>
                    <option value="sme">SME</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700">System Requirements</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1140c1] text-white font-bold py-4 rounded-sm hover:bg-[#0b287a] transition-colors mt-4 text-lg flex justify-center items-center gap-2"
                >
                  Send My Question
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
            className="fixed bottom-6 right-6 z-50 bg-[#0b287a] border-l-4 border-[#ffeb3b] shadow-2xl p-4 sm:p-5 rounded-sm max-w-sm flex items-start gap-4"
          >
            <CheckCircle2 className="w-6 h-6 text-[#ffeb3b] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Message Received</h4>
              <p className="text-blue-100 text-xs font-medium leading-relaxed">
                Thank you for your interest. We will review your requirements and respond within one working day.
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