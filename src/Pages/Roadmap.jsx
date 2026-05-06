import React from 'react';
import { Terminal, GitCommit, GitPullRequest, GitMerge, CheckCircle2, CircleDashed, ArrowRight, Server, Shield, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Roadmap = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white min-h-screen">
      
      {/* SECTION 1: HERO (Transparency Opener) */}
      <section className="bg-[#1140c1] text-white py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle grid pattern for matte tech look */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-[#ffeb3b] font-extrabold text-sm tracking-widest uppercase mb-6 block">
              - Internal Timeline
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
              Engineering in the open. Building for the long term.
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed font-medium">
              We do not fabricate case studies or claim non-existent clients. Motioncomm Private Limited operates with strict transparency. Below is our internal development roadmap. It outlines exactly where our engineering team is allocating resources right now, and what infrastructure will be available when our systems officially launch.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ROADMAP TIMELINE (Heavy Content) */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b287a] mb-6">
              Product Rollout Phases
            </h2>
            <div className="w-16 h-1.5 bg-[#ffeb3b] mx-auto mb-8"></div>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Software development is a sequential process. Rushing to code before the architecture is finalized results in technical debt. Here is our structured approach to launching our IT services.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-zinc-200 transform -translate-x-1/2"></div>

            <div className="space-y-24">
              
              {/* PHASE 01: COMPLETED */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Center Icon */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0b287a] rounded-full items-center justify-center border-4 border-zinc-50 z-10">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>

                <div className="lg:text-right order-2 lg:order-1">
                  <span className="text-zinc-400 font-bold text-sm tracking-widest uppercase mb-2 block">
                    Phase 01
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">Core Architecture & Data Modeling</h3>
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    Before writing frontend elements, our team finalized the database schemas. We normalized data structures to ensure future API queries will not cause server locks during high-traffic events.
                  </p>
                  <ul className="space-y-2 inline-block text-left lg:text-right">
                    <li className="text-sm font-bold text-zinc-700 flex items-center lg:justify-end gap-2">
                      <Terminal className="w-4 h-4 text-green-600" /> Database Relationship Mapping
                    </li>
                    <li className="text-sm font-bold text-zinc-700 flex items-center lg:justify-end gap-2">
                      <Terminal className="w-4 h-4 text-green-600" /> API Endpoint Blueprinting
                    </li>
                    <li className="text-sm font-bold text-zinc-700 flex items-center lg:justify-end gap-2">
                      <Terminal className="w-4 h-4 text-green-600" /> Security Middleware Drafting
                    </li>
                  </ul>
                </div>

                <div className="relative h-[300px] rounded-sm overflow-hidden border border-zinc-200 shadow-sm order-1 lg:order-2">
                  <div className="absolute inset-0 bg-[#1140c1]/40 mix-blend-multiply z-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="System Architecture Planning" 
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-green-100 text-green-800 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm border border-green-200">
                    Completed
                  </div>
                </div>
              </div>

              {/* PHASE 02: ACTIVE (Current) */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#ffeb3b] rounded-full items-center justify-center border-4 border-zinc-50 z-10 shadow-lg">
                  <GitCommit className="w-6 h-6 text-[#0b287a]" />
                </div>

                <div className="relative h-[300px] rounded-sm overflow-hidden border-2 border-[#1140c1] shadow-lg order-1 lg:order-1">
                  <div className="absolute inset-0 bg-[#0b287a]/30 mix-blend-multiply z-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Active Coding Backend" 
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-[#1140c1] text-white p-4 rounded-sm shadow-xl flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#ffeb3b] rounded-full animate-pulse"></div>
                    <span className="font-bold text-sm tracking-wide">SYSTEMS IN DEVELOPMENT</span>
                  </div>
                </div>

                <div className="order-2 lg:order-2">
                  <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-2 block">
                    Phase 02 (Current)
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">Active Component Engineering</h3>
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    Our developers are currently writing the core component trees for our web applications. We are actively writing custom hooks and managing global state logic to ensure the front-end will render quickly without unnecessary DOM repaints.
                  </p>
                  <div className="bg-white p-6 border border-zinc-200 shadow-sm">
                    <h4 className="text-sm font-bold text-zinc-900 mb-3 border-b border-zinc-100 pb-2">Current Sprints:</h4>
                    <ul className="space-y-3">
                      <li className="text-sm font-medium text-zinc-700 flex items-start gap-2">
                        <Activity className="w-4 h-4 text-[#1140c1] mt-0.5" /> Programming modular UI components.
                      </li>
                      <li className="text-sm font-medium text-zinc-700 flex items-start gap-2">
                        <Activity className="w-4 h-4 text-[#1140c1] mt-0.5" /> Integrating secure JWT authentication logic.
                      </li>
                      <li className="text-sm font-medium text-zinc-700 flex items-start gap-2">
                        <Activity className="w-4 h-4 text-[#1140c1] mt-0.5" /> Building dynamic SEO routing for marketing pipelines.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PHASE 03: UPCOMING */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center border-4 border-zinc-200 z-10">
                  <GitPullRequest className="w-6 h-6 text-zinc-400" />
                </div>

                <div className="lg:text-right order-2 lg:order-1 opacity-80">
                  <span className="text-zinc-400 font-bold text-sm tracking-widest uppercase mb-2 block">
                    Phase 03
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">Stress Testing & QA</h3>
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    Before any service is offered to external clients, we will subject our platforms to intense load testing. We will simulate concurrent user traffic to identify memory leaks and ensure our cloud instances auto-scale correctly.
                  </p>
                  <ul className="space-y-2 inline-block text-left lg:text-right">
                    <li className="text-sm font-bold text-zinc-600 flex items-center lg:justify-end gap-2">
                      <CircleDashed className="w-4 h-4 text-zinc-400" /> Server Load Simulation
                    </li>
                    <li className="text-sm font-bold text-zinc-600 flex items-center lg:justify-end gap-2">
                      <CircleDashed className="w-4 h-4 text-zinc-400" /> Penetration Testing Protocols
                    </li>
                    <li className="text-sm font-bold text-zinc-600 flex items-center lg:justify-end gap-2">
                      <CircleDashed className="w-4 h-4 text-zinc-400" /> Latency Benchmarking
                    </li>
                  </ul>
                </div>

                <div className="relative h-[300px] rounded-sm overflow-hidden border border-zinc-200 shadow-sm order-1 lg:order-2 opacity-80">
                  <div className="absolute inset-0 bg-zinc-800/60 mix-blend-multiply z-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="QA Server Testing" 
                    className="w-full h-full object-cover grayscale-[50%]"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-zinc-100 text-zinc-600 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm border border-zinc-300">
                    Upcoming
                  </div>
                </div>
              </div>

              {/* PHASE 04: UPCOMING */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center border-4 border-zinc-200 z-10">
                  <GitMerge className="w-6 h-6 text-zinc-400" />
                </div>

                <div className="relative h-[300px] rounded-sm overflow-hidden border border-zinc-200 shadow-sm order-1 lg:order-1 opacity-80">
                  <div className="absolute inset-0 bg-[#0b287a]/60 mix-blend-multiply z-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Live Deployment" 
                    className="w-full h-full object-cover grayscale-[30%]"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-zinc-100 text-zinc-600 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm border border-zinc-300">
                    Upcoming
                  </div>
                </div>

                <div className="order-2 lg:order-2 opacity-80">
                  <span className="text-zinc-400 font-bold text-sm tracking-widest uppercase mb-2 block">
                    Phase 04
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">Deployment & Service Launch</h3>
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    The final stage. Once internal audits clear, we will configure CI/CD pipelines to push the codebase to live production servers. At this point, Motioncomm will officially open client registration for our custom IT and digital marketing infrastructure services.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-sm font-bold text-zinc-600 flex items-center gap-2">
                      <CircleDashed className="w-4 h-4 text-zinc-400" /> Production Server Setup
                    </li>
                    <li className="text-sm font-bold text-zinc-600 flex items-center gap-2">
                      <CircleDashed className="w-4 h-4 text-zinc-400" /> Client Onboarding Portal Activation
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ENGINEERING PHILOSOPHY (Text Heavy for depth) */}
      <section className="py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
                Why we plan meticulously.
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-6"></div>
              <p className="text-zinc-600 leading-relaxed">
                A system built without a rigid roadmap is destined to fail when traffic spikes. We are writing code with long-term operability in mind.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-50 p-8 border border-zinc-200 hover:border-[#1140c1] transition-colors">
                <Server className="w-8 h-8 text-[#1140c1] mb-4" />
                <h4 className="text-lg font-bold text-zinc-900 mb-3">Resource Management</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Bad code costs money in server fees. By writing efficient loops and optimizing database queries now, we ensure our platforms will run cost-effectively even under heavy computational load.
                </p>
              </div>
              <div className="bg-zinc-50 p-8 border border-zinc-200 hover:border-[#1140c1] transition-colors">
                <Shield className="w-8 h-8 text-[#1140c1] mb-4" />
                <h4 className="text-lg font-bold text-zinc-900 mb-3">Pre-emptive Security</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  We will not promise unverified security metrics. However, our roadmap includes strict development cycles purely dedicated to sanitizing inputs and patching vulnerabilities before a public URL is generated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="py-20 bg-[#0b287a] text-center border-t-4 border-[#ffeb3b]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Get notified when we go live.
          </h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            If your organization is looking to upgrade its technical infrastructure or marketing data pipelines, let us know your requirements. We are accepting early briefs.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#ffeb3b] text-[#0b287a] px-8 py-4 rounded-sm font-bold hover:bg-white transition-colors text-lg"
          >
            Register Early Interest <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Roadmap;