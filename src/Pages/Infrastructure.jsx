import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, Globe, ShieldCheck, Database, Network, ArrowRight, Activity, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Infrastructure = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      
      {/* 1. HERO SECTION (Dark & Technical) */}
      <section className="relative bg-[#03091e] overflow-hidden pt-24 pb-32 border-b-4 border-[#1140c1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#1140c1]/20 border border-[#1140c1]/50 px-3 py-1.5 rounded-sm mb-6">
                <Activity className="w-4 h-4 text-[#ffeb3b]" />
                <span className="text-xs font-bold text-blue-100 uppercase tracking-wider">Live System Architecture</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Deployed for Scale. Built for Speed.
              </h1>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-xl">
                Take a look under the hood. Motioncomm operates on a distributed, high-availability server network. We utilize modern JavaScript frameworks and robust database clusters to ensure your applications run without bottlenecks.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border-l-2 border-[#1140c1] pl-4">
                  <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-sm text-zinc-500 font-medium">Uptime SLA</div>
                </div>
                <div className="border-l-2 border-[#1140c1] pl-4">
                  <div className="text-2xl font-bold text-white mb-1">&lt; 50ms</div>
                  <div className="text-sm text-zinc-500 font-medium">Avg API Latency</div>
                </div>
              </div>

              <Link to="/docs" className="inline-flex items-center gap-2 text-[#ffeb3b] font-bold hover:text-white transition-colors">
                Explore API Documentation <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-sm overflow-hidden h-[500px] border border-zinc-800 hidden lg:block"
            >
              {/* Pexels Server Room Image */}
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cloud Server Infrastructure" 
                className="w-full h-full object-cover grayscale-[30%] opacity-80"
              />
              <div className="absolute inset-0 bg-[#0b287a]/30 mix-blend-multiply"></div>
              
              {/* Overlay Tech Stats */}
              <div className="absolute bottom-6 right-6 bg-[#03091e]/90 border border-zinc-700 p-4 rounded-sm backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-green-400" />
                  <span className="text-white text-sm font-bold tracking-wide">Multi-Region Active</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. THE ENGINEERING STACK */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
              Our Production Stack
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              We rely on battle-tested technologies to power our endpoints. No experimental fluff, just clean code and strict deployment pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Front-End Edge */}
            <div className="flex gap-6 p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shadow-sm">
                  <Code2 className="w-7 h-7 text-[#1140c1]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">React & Edge Delivery</h3>
                <p className="text-zinc-600 leading-relaxed text-sm mb-4">
                  Our client-facing applications are compiled using modern build tools like Vite for immediate hot-reloading and optimized production bundles. Static assets are pushed to global CDNs, ensuring UI components load instantly regardless of the user's location.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">React.js</span>
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">Vite Edge</span>
                </div>
              </div>
            </div>

            {/* Back-End Routing */}
            <div className="flex gap-6 p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shadow-sm">
                  <Server className="w-7 h-7 text-[#1140c1]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Node/Express Runtime</h3>
                <p className="text-zinc-600 leading-relaxed text-sm mb-4">
                  The core of our platform relies on a non-blocking, event-driven Node.js architecture. We utilize Express for clean, modular routing. Our APIs are strictly stateless, allowing us to spin up new server instances horizontally during traffic spikes.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">Node.js</span>
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">Express Routing</span>
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">REST APIs</span>
                </div>
              </div>
            </div>

            {/* Database Clusters */}
            <div className="flex gap-6 p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shadow-sm">
                  <Database className="w-7 h-7 text-[#1140c1]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Database Persistence</h3>
                <p className="text-zinc-600 leading-relaxed text-sm mb-4">
                  We match the database to the data model. We use Document-based NoSQL (MongoDB) for flexible, high-volume operational logs, and strict Relational SQL for user transactions and financial data. All queries are indexed to prevent locks.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">MongoDB</span>
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">PostgreSQL</span>
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">Replica Sets</span>
                </div>
              </div>
            </div>

            {/* Security Layer */}
            <div className="flex gap-6 p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white border border-zinc-200 rounded-sm flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-7 h-7 text-[#1140c1]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Zero-Trust Security</h3>
                <p className="text-zinc-600 leading-relaxed text-sm mb-4">
                  Every request entering our network is sanitized. We implement JWT-based authentication, strict CORS policies, and automated rate limiters at the edge to mitigate DDoS attacks and unauthorized data access.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">JWT Auth</span>
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">WAF</span>
                  <span className="px-2 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold rounded-sm">Rate Limiting</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISUAL ARCHITECTURE */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
                Redundant by design.
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Single points of failure are unacceptable in production. Our infrastructure is deployed across multiple availability zones. 
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700 font-medium">Automated load balancers route traffic to the healthiest node.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Network className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700 font-medium">Database replication ensures no data loss during hardware failure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Server className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-700 font-medium">Containerized environments guarantee consistent execution across all servers.</span>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-sm overflow-hidden h-[400px] border border-zinc-200 shadow-lg">
                {/* Pexels Abstract Tech/Data Image */}
                <img 
                  src="https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-close-up-of-circuit-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Motherboard and Data Routing" 
                  className="w-full h-full object-cover grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-[#0b287a]/20 mix-blend-multiply"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-20 bg-[#1140c1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-6">
            Ready to deploy on our stack?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Get access to our production APIs and robust cloud environments today.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-[#0b287a] px-8 py-4 rounded-sm font-bold hover:bg-zinc-100 transition-colors shadow-lg"
          >
            Request Access Keys
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Infrastructure;