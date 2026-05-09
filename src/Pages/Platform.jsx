import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Shield, Zap, Activity, GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Platform = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0b287a] overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-[#061235]/40 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Platform Live & Serving Requests</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                The Infrastructure Engine for Modern Teams.
              </h1>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-xl">
                Motioncomm is an operational cloud platform that handles complex data routing, strict security middleware, and database scaling. We manage the backend pipelines so you can deploy your application without worrying about server limitations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/docs" className="bg-[#1140c1] text-white px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  View Documentation
                </Link>
                <Link to="/contact" className="bg-white text-[#0b287a] px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-zinc-100 transition-colors text-center border border-transparent">
                  Request API Access
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block relative rounded-sm overflow-hidden h-[450px] shadow-2xl border border-white/10"
            >
              {/* Pexels Server/Data Center Image (Matte, Professional) */}
              <img 
                src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Active Server Racks" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-[#1140c1]/20 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CORE ARCHITECTURE LAYER */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Core Modules
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6">
              How the Motioncomm Stack Operates
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Our platform is segmented into independent, high-performance modules. We utilize Node.js and distributed databases to ensure that your requests are processed with sub-50ms latency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:border-[#1140c1] transition-colors">
              <Database className="w-10 h-10 text-[#1140c1] mb-6" />
              <h3 className="text-xl font-bold mb-3">Normalized Data Routing</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                We utilize strict schema validations across our MongoDB and PostgreSQL clusters. This ensures that every piece of data stored or retrieved maintains absolute integrity, even during heavy traffic spikes.
              </p>
            </div>
            <div className="p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:border-[#1140c1] transition-colors">
              <Shield className="w-10 h-10 text-[#1140c1] mb-6" />
              <h3 className="text-xl font-bold mb-3">Zero-Trust Middleware</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Security is not an afterthought. Our platform actively filters incoming traffic through pre-configured rate limiters, input sanitization protocols, and strict JWT-based authentication endpoints.
              </p>
            </div>
            <div className="p-8 border border-zinc-200 bg-zinc-50 rounded-sm hover:border-[#1140c1] transition-colors">
              <Zap className="w-10 h-10 text-[#1140c1] mb-6" />
              <h3 className="text-xl font-bold mb-3">Edge Network Delivery</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Static assets and frequent API calls are cached at the edge. By utilizing a decentralized CDN approach, we minimize server trips and ensure your UI components load instantly for users globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL IMPLEMENTATION (Real Proof) */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="relative rounded-sm overflow-hidden h-[400px] border border-zinc-200">
                {/* Pexels Code/Development Image */}
                <img 
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Code Implementation" 
                  className="w-full h-full object-cover grayscale-[10%]"
                />
                <div className="absolute inset-0 bg-[#1140c1]/10 mix-blend-multiply"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
                Engineered for strict implementation.
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                Reviewers and CTOs trust Motioncomm because we do not hide our technical stack. Our infrastructure is actively built on the MERN stack (MongoDB, Express, React, Node.js), utilizing Vite for frontend tooling and Tailwind CSS for rapid, maintainable styling.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1140c1] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-zinc-900">API-First Design</h4>
                    <p className="text-sm text-zinc-600 mt-1">Every feature is accessible via documented REST endpoints, allowing custom integrations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1140c1] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-zinc-900">Stateless Architecture</h4>
                    <p className="text-sm text-zinc-600 mt-1">Our backend operates statelessly, meaning we can scale server instances horizontally without session drops.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ACTIVE USE-CASES (Focusing on ONE clear problem) */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0b287a] mb-4">
              Real-World Platform Utilization
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Our infrastructure actively solves deployment and scaling bottlenecks for businesses across different sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border border-zinc-200 rounded-sm">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6 rounded-sm">
                <Activity className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">SaaS Internal Tools</h3>
              <p className="text-zinc-600 leading-relaxed">
                Development teams use our backend to power their custom dashboards. Instead of writing authentication and database schemas from scratch, they plug into our APIs to manage users and access control instantly.
              </p>
            </div>

            <div className="p-8 border border-zinc-200 rounded-sm">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-6 rounded-sm">
                <GitBranch className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">E-Commerce Data Pipelines</h3>
              <p className="text-zinc-600 leading-relaxed">
                Retail platforms route their live inventory data through our system. Our high-concurrency architecture ensures that thousands of simultaneous stock queries are processed without database locks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-[#0b287a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Ready to integrate with our infrastructure?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Submit your technical requirements and our engineering team will provision your API keys and deployment environment.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#ffeb3b] text-[#0b287a] px-8 py-4 rounded-sm font-bold hover:bg-white transition-colors"
          >
            Request Environment Access <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Platform;