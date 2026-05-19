import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  Key, 
  Webhook, 
  Database, 
  ShieldCheck, 
  Code2, 
  AlertTriangle, 
  Mail, 
  ArrowRight, 
  Lock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Developers = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white min-h-screen">
      
      {/* 1. HERO SECTION (Tech Focus) */}
      <section className="bg-[#0b287a] text-white py-16 border-b border-zinc-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#061235]/30 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-3 py-1.5 rounded-sm mb-4">
              <AlertTriangle className="w-4 h-4 text-yellow-300" />
              <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider">Private Development & Beta Phase</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Developer API Access
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Our backend API is under active development. We are designing it to be RESTful and well-documented. API access is currently in private development - we are working with a small group of early technical users to refine the endpoints before a wider release.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DOCUMENTATION LAYOUT (Two-Column to expand page scale) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDEBAR: Doc Navigation (Simulated for rich UI) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-8 sticky top-28 h-fit">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Getting Started</h3>
              <ul className="space-y-3 text-sm font-semibold text-zinc-600">
                <li className="flex items-center text-[#1140c1] bg-blue-50 px-3 py-2 rounded-sm"><ChevronRight className="w-4 h-4 mr-1" /> API Access Overview</li>
                <li className="px-3 py-1 hover:text-zinc-900"><a href="#overview">Supported Modules</a></li>
                <li className="px-3 py-1 hover:text-zinc-900"><a href="#authentication">Authentication</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Architecture Limits</h3>
              <ul className="space-y-3 text-sm font-semibold text-zinc-600">
                <li className="px-3 py-1 hover:text-zinc-900"><a href="#rate-limits">Rate Limiting Policy</a></li>
                <li className="px-3 py-1 hover:text-zinc-900"><a href="#sdk">SDK Roadmap</a></li>
              </ul>
            </div>
            <div className="pt-4 border-t border-zinc-200">
              <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-[#1140c1] flex items-center gap-1 hover:text-[#0b287a]">
                Request API Key <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* RIGHT CONTENT AREA: Expanded Documentation */}
          <main className="lg:col-span-9 space-y-16">
            
            {/* SECTION: API OVERVIEW */}
            <section id="overview" className="scroll-mt-28 space-y-6">
              <div className="border-b border-zinc-200 pb-4">
                <h2 className="text-2xl font-extrabold text-zinc-950 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-[#1140c1]" /> API Overview
                </h2>
                <p className="text-zinc-500 text-sm mt-1">What the API will support as development progresses.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-6 border border-zinc-200 rounded-sm bg-zinc-50">
                  <div className="w-10 h-10 bg-white border border-zinc-200 rounded-sm flex items-center justify-center mb-4 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-[#1140c1]" />
                  </div>
                  <h4 className="font-bold text-zinc-900 mb-2">Authentication Endpoints</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Designed for secure management of developer sessions. Supports automated token issuance, secure token refresh loops, and immediate token revocation policies.
                  </p>
                </div>

                <div className="p-6 border border-zinc-200 rounded-sm bg-zinc-50">
                  <div className="w-10 h-10 bg-white border border-zinc-200 rounded-sm flex items-center justify-center mb-4 shadow-sm">
                    <Database className="w-5 h-5 text-[#1140c1]" />
                  </div>
                  <h4 className="font-bold text-zinc-900 mb-2">Data Routing</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Allows engineering teams to read and write structured business data through strictly normalised, predictable endpoints, reducing local database overhead.
                  </p>
                </div>

                <div className="p-6 border border-zinc-200 rounded-sm bg-zinc-50">
                  <div className="w-10 h-10 bg-white border border-zinc-200 rounded-sm flex items-center justify-center mb-4 shadow-sm">
                    <Webhook className="w-5 h-5 text-[#1140c1]" />
                  </div>
                  <h4 className="font-bold text-zinc-900 mb-2">Webhook Configuration</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Register and manage event-driven HTTP callbacks. Instantly triggers data routing actions on your servers when key platform events are recorded.
                  </p>
                </div>

                <div className="p-6 border border-zinc-200 rounded-sm bg-zinc-50">
                  <div className="w-10 h-10 bg-white border border-zinc-200 rounded-sm flex items-center justify-center mb-4 shadow-sm">
                    <Code2 className="w-5 h-5 text-[#1140c1]" />
                  </div>
                  <h4 className="font-bold text-zinc-900 mb-2">MotionInsight Ingestion</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Endpoints designed to push external transactional data arrays directly into the MotionInsight summary engine, generating custom dashboard feeds.
                  </p>
                </div>

              </div>
            </section>

            {/* SECTION: AUTHENTICATION */}
            <section id="authentication" className="scroll-mt-28 space-y-6">
              <div className="border-b border-zinc-200 pb-4">
                <h2 className="text-2xl font-extrabold text-zinc-950 flex items-center gap-2">
                  <Key className="w-6 h-6 text-[#1140c1]" /> Authentication
                </h2>
                <p className="text-zinc-500 text-sm mt-1">Security parameters for communication with backend layers.</p>
              </div>
              <p className="text-zinc-600 leading-relaxed font-medium">
                API requests are authenticated via standard Bearer tokens. Tokens are issued manually upon platform registration during the beta phase and managed securely. To ensure end-to-end data safety, <strong className="text-zinc-900">all API requests must be made exclusively over HTTPS.</strong> Unencrypted HTTP calls will be automatically rejected.
              </p>

              {/* Technical Code Representation */}
              <div className="bg-[#0b1120] rounded-sm border border-zinc-800 overflow-hidden shadow-md">
                <div className="bg-[#1e293b] px-4 py-2.5 flex items-center justify-between border-b border-zinc-700">
                  <span className="text-xs text-zinc-400 font-mono">Example Request Structure (Conceptual Framework)</span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">HTTPS Only</span>
                </div>
                <div className="p-6 font-mono text-sm text-zinc-300 overflow-x-auto space-y-2">
                  <div>
                    <span className="text-green-400 font-bold">POST</span> <span className="text-white">/v1/auth/token</span>
                  </div>
                  <div className="text-zinc-500">
                    <div>Authorization: Bearer &lt;your_private_beta_token&gt;</div>
                    <div>Content-Type: application/json</div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: RATE LIMITS & MANAGEMENT */}
            <section id="rate-limits" className="scroll-mt-28 space-y-6">
              <div className="border-b border-zinc-200 pb-4">
                <h2 className="text-2xl font-extrabold text-zinc-950 flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-[#1140c1]" /> Rate Limits
                </h2>
                <p className="text-zinc-500 text-sm mt-1">Resource allocation protocols during initial development cycles.</p>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-sm">
                <p className="text-zinc-600 leading-relaxed font-medium">
                  During our private beta, API usage is managed tightly on a per-key basis to protect server stability and guarantee compute performance for all active partners. 
                  <br /><br />
                  We will publish detailed rate limit tiers and concurrency structures when the API reaches general availability. Early-access users will be contacted individually by our engineering group with their specific usage parameters.
                </p>
              </div>
            </section>

            {/* SECTION: SDK ROADMAP */}
            <section id="sdk" className="scroll-mt-28 space-y-6">
              <div className="border-b border-zinc-200 pb-4">
                <h2 className="text-2xl font-extrabold text-zinc-950 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-[#1140c1]" /> Developer SDK
                </h2>
                <p className="text-zinc-500 text-sm mt-1">Simplifying programmatic product integrations.</p>
              </div>
              
              <div className="border border-blue-100 bg-blue-50/50 p-6 rounded-sm flex flex-col md:flex-row gap-4 items-start">
                <div className="p-3 bg-white border border-blue-200 rounded-sm flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#1140c1]" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1 flex items-center gap-2">
                    Official Node.js SDK <span className="bg-zinc-200 text-zinc-700 text-[10px] px-2 py-0.5 rounded-sm font-bold uppercase tracking-wide">Coming Soon</span>
                  </h4>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium mb-4">
                    We are developing an official Node.js SDK to simplify integration. It is not yet publicly available or deployed to package registries. We will announce its release through our project updates when ready.
                  </p>
                  <p className="text-zinc-500 text-xs italic font-medium">
                    *In the meantime, all core API functionality is completely accessible via standard HTTPS requests using any native HTTP client module.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION: GET ACCESS (CTA) */}
            <section className="pt-6 border-t border-zinc-200">
              <div className="bg-[#0b287a] text-white p-8 rounded-sm md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Request Early API Access</h3>
                  <p className="text-blue-200 text-sm max-w-xl font-medium">
                    API access is currently provisioned manually during our private beta. If you are a developer interested in testing our endpoints, reach out with a brief description of your configuration needs.
                  </p>
                </div>
                {/* Redirects to official contact page */}
                <Link 
                  to="/contact"
                  className="bg-[#ffeb3b] text-[#0b287a] font-bold px-6 py-3 rounded-sm text-sm hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap flex-shrink-0 shadow-sm"
                >
                  <Mail className="w-4 h-4" /> Contact Engineering
                </Link>
              </div>
            </section>

          </main>
        </div>
      </div>

    </div>
  );
};

export default Developers;