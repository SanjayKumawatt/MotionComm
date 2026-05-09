import React, { useState } from 'react';
import { Layers, Database, Shield, Code, Server, Smartphone, Check, Mail, MapPin, CheckCircle2, X, Cpu, Globe2, Layout, Activity, Briefcase, Terminal, Webhook } from 'lucide-react';
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
      
      {/* SECTION 1: THE PROBLEM & OUR ACTIVE SOLUTION */}
      <section className="py-24 border-b border-zinc-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
                - Enterprise Infrastructure
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0b287a] mb-6">
                Why modern teams migrate to Motioncomm.
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
              
              <div className="space-y-6 text-lg text-zinc-700 leading-relaxed font-medium">
                <p>
                  Scaling software shouldn't mean dealing with fragile deployments, bloated codebases, or server downtime. Many businesses struggle because their underlying infrastructure wasn't built for high concurrency.
                </p>
                <p>
                  Motioncomm provides a production-ready alternative. We operate clean, modular IT infrastructure and automated data pipelines. Our systems are actively handling complex logic and heavy data loads, engineered from the ground up to prevent technical debt before it happens.
                </p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-sm overflow-hidden h-[450px] border border-zinc-200"
            >
              {/* Using a clean, matte server/code image */}
              <div className="absolute inset-0 bg-[#0b287a]/20 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                alt="Active Server Operations" 
                className="w-full h-full object-cover grayscale-[10%]"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-white p-4 flex items-center gap-3 rounded-sm border border-zinc-100">
                <Activity className="w-6 h-6 text-[#1140c1]" />
                <span className="font-bold text-sm text-zinc-800 tracking-wide uppercase">99.9% Uptime SLA</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LIVE PLATFORM CAPABILITIES */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Platform Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6">
              Deployed and fully operational.
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Our core modules are live. Clients utilize our custom-built digital assets and RESTful endpoints to bypass months of internal development and go straight to market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-zinc-200 hover:border-[#1140c1] transition-colors relative overflow-hidden group">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6 rounded-sm">
                <Code className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Scalable Web Apps</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Full-stack web platforms rendering at lightning speed. We manage the database security, authentication state, and user portals so you can focus on your business logic.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> High-concurrency architecture
                </li>
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> Managed auth & security
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 border border-zinc-200 hover:border-[#1140c1] transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6 rounded-sm">
                <Webhook className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automated Pipelines</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Data-driven marketing and operational systems. Our webhooks accurately capture leads, route data to your CRM, and reduce manual tracking errors to zero.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> Real-time data routing
                </li>
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> Analytics API integration
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 border border-zinc-200 hover:border-[#1140c1] transition-colors relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6 rounded-sm">
                <Server className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Environments</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                Deployed on distributed server networks. We handle load balancing, automated failovers, and strict resource management to guarantee your service never drops.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> Multi-region deployment
                </li>
                <li className="flex items-start gap-2 text-sm text-zinc-700 font-semibold">
                  <Check className="w-4 h-4 text-[#1140c1] mt-0.5" /> Continuous integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE TECHNOLOGY STACK (Tailored for Modern MERN/JS ecosystems) */}
      <section className="py-24 border-b border-zinc-200 bg-[#0b287a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <span className="text-[#ffeb3b] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Production Stack
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

      {/* NEW SECTION 4 (REPLACES EXCUSES/PHASING): DEVELOPER EXPERIENCE */}
      <section className="py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
                  Developer-First Integration.
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Motioncomm is built by engineers, for engineers. Stop wrestling with legacy spaghetti code. Our component-based architecture and documented API endpoints allow your team to integrate our infrastructure in hours, not months.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Terminal className="w-6 h-6 text-[#1140c1] flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Clean API Documentation</h3>
                    <p className="text-zinc-600 text-sm">Well-structured REST endpoints with predictable request/response cycles.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-[#1140c1] flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Pre-built Security Middlewares</h3>
                    <p className="text-zinc-600 text-sm">Input sanitization, rate-limiting, and secure routing handled at the network edge.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fake Code Editor Block to show real software vibes */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b1120] rounded-sm border border-zinc-800 overflow-hidden shadow-2xl">
                <div className="bg-[#1e293b] px-4 py-3 flex items-center gap-2 border-b border-zinc-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-xs text-zinc-400 font-mono">motioncomm-init.js</span>
                </div>
                <div className="p-6 font-mono text-sm text-blue-300 overflow-x-auto">
                  <pre>
                    <code>
<span className="text-purple-400">import</span> {'{'} MotionClient {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'@motioncomm/sdk'</span>;{'\n\n'}
<span className="text-zinc-500">// Initialize infrastructure</span>{'\n'}
<span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> MotionClient({'{'}{'\n'}
{'  '}apiKey: process.env.<span className="text-yellow-300">MOTION_API_KEY</span>,{'\n'}
{'  '}environment: <span className="text-green-300">'production'</span>{'\n'}
{'}'});{'\n\n'}
<span className="text-zinc-500">// Deploy routing instance</span>{'\n'}
<span className="text-purple-400">await</span> client.router.<span className="text-blue-400">deploy</span>({'{'}{'\n'}
{'  '}autoScaling: <span className="text-yellow-300">true</span>,{'\n'}
{'  '}region: <span className="text-green-300">'ap-south-1'</span>{'\n'}
{'}'});
                    </code>
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT / REQUEST ACCESS */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="text-zinc-900">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#0b287a]">
                Request Platform Access
              </h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed max-w-md">
                Our infrastructure is built for startups and enterprises that require serious scale. Submit your operational requirements, and our engineering team will provision your access.
                <br /><br />
                <strong className="text-[#1140c1]">We review and respond to all access requests within one working day.</strong>
              </p>

              <div className="mb-10 p-6 bg-white border border-zinc-200 rounded-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-6 h-6 text-[#1140c1]" />
                  <div>
                    <span className="block text-sm text-zinc-500 uppercase tracking-widest font-semibold mb-1">Direct Engineering Contact</span>
                    <div className="text-xl font-bold text-zinc-900 hover:text-[#1140c1] transition-colors">
                      contact@motioncommservices.in
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#1140c1] flex-shrink-0 mt-1" />
                <div>
                  <span className="block text-sm text-zinc-500 uppercase tracking-widest font-semibold mb-2">Registered Base</span>
                  <address className="text-zinc-700 not-italic leading-relaxed font-medium">
                    S/o Lt. K.k. Debnath. A.d, Nagar Road No 7.<br />
                    Agartala, Arundhutinagar,<br />
                    West Tripura, Sadar,<br />
                    Tripura, India, 799003
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 border border-zinc-200 border-t-4 border-t-[#1140c1] relative">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Submit API/Access Request</h3>
              
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
                  <label className="text-sm font-bold text-zinc-700">Infrastructure Needed</label>
                  <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] transition-all" required>
                    <option value="">Select Requirement</option>
                    <option value="api">API Endpoints Integration</option>
                    <option value="saas">Custom Web App Deployment</option>
                    <option value="pipeline">Marketing Data Pipelines</option>
                    <option value="cloud">Cloud Hosting & Setup</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700">Technical Details / Current Stack</label>
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
                  Request Configuration
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
              <h4 className="text-white font-bold text-sm mb-1">Request Received</h4>
              <p className="text-blue-100 text-xs font-medium leading-relaxed">
                Our engineering team will review your requirements and provision access details within one working day.
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