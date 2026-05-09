import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Key, BookOpen, Code2, Webhook, ShieldAlert, CheckCircle2, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Docs = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white min-h-screen flex flex-col md:flex-row">
      
      {/* SIDEBAR NAVIGATION (Visible on Desktop) */}
      <aside className="w-full md:w-64 lg:w-72 bg-zinc-50 border-r border-zinc-200 hidden md:block shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
        <div className="p-6">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Getting Started</h3>
          <ul className="space-y-3 mb-8">
            <li><a href="#introduction" className="text-sm font-bold text-[#1140c1]">Introduction</a></li>
            <li><a href="#authentication" className="text-sm font-medium text-zinc-600 hover:text-[#1140c1] transition-colors">Authentication</a></li>
            <li><a href="#installation" className="text-sm font-medium text-zinc-600 hover:text-[#1140c1] transition-colors">SDK Installation</a></li>
            <li><a href="#rate-limits" className="text-sm font-medium text-zinc-600 hover:text-[#1140c1] transition-colors">Rate Limits</a></li>
          </ul>

          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Core APIs</h3>
          <ul className="space-y-3 mb-8">
            <li><a href="#deployments" className="text-sm font-medium text-zinc-600 hover:text-[#1140c1] transition-colors">Deployments API</a></li>
            <li><a href="#routing" className="text-sm font-medium text-zinc-600 hover:text-[#1140c1] transition-colors">Data Routing</a></li>
            <li><a href="#webhooks" className="text-sm font-medium text-zinc-600 hover:text-[#1140c1] transition-colors">Webhooks</a></li>
          </ul>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-5xl px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        
        {/* PAGE HEADER */}
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b287a] mb-4">
            API Documentation
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl">
            Integrate Motioncomm's enterprise infrastructure into your application. Our RESTful API allows you to programmatically manage deployments, route data, and configure webhooks.
          </p>
        </div>

        {/* SECTION: INTRODUCTION */}
        <section id="introduction" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#1140c1]" /> Base URL & Requests
          </h2>
          <p className="text-zinc-600 mb-4 leading-relaxed">
            All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail. The base URL for all v1 endpoints is:
          </p>
          <div className="bg-zinc-100 border border-zinc-200 rounded-sm p-4 flex items-center justify-between mb-6">
            <code className="text-sm text-[#c1116c] font-mono font-bold">https://api.motioncommservices.in/v1</code>
            <button className="text-zinc-400 hover:text-zinc-700"><Copy className="w-4 h-4" /></button>
          </div>
        </section>

        {/* SECTION: AUTHENTICATION */}
        <section id="authentication" className="mb-16 scroll-mt-24 pt-8 border-t border-zinc-200">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <Key className="w-6 h-6 text-[#1140c1]" /> Authentication
          </h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Motioncomm uses API keys to authenticate requests. You can view and manage your API keys in your developer dashboard. Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
          </p>
          <p className="text-zinc-600 mb-4 leading-relaxed">
            Authentication to the API is performed via HTTP Bearer Auth. Provide your API key as the bearer token value.
          </p>
          
          {/* Fake Code Block */}
          <div className="bg-[#03091e] rounded-sm overflow-hidden shadow-lg border border-zinc-800">
            <div className="bg-white/5 px-4 py-2 flex items-center border-b border-white/10 text-xs text-zinc-400 font-mono">
              cURL Example
            </div>
            <div className="p-5 font-mono text-sm overflow-x-auto text-zinc-300">
              <pre>
                <code>
<span className="text-blue-400">curl</span> https://api.motioncommservices.in/v1/status \<br/>
{'  '}<span className="text-blue-400">-H</span> <span className="text-green-400">"Authorization: Bearer mc_live_secret_key"</span>
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* SECTION: SDK INSTALLATION */}
        <section id="installation" className="mb-16 scroll-mt-24 pt-8 border-t border-zinc-200">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-[#1140c1]" /> Official SDK Installation
          </h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            While you can use raw HTTP requests, we recommend using our official Node.js SDK for seamless integration within JavaScript/TypeScript environments. Our SDK handles retries, typing, and payload formatting automatically.
          </p>
          
          <div className="bg-[#03091e] rounded-sm overflow-hidden shadow-lg border border-zinc-800 mb-6">
            <div className="bg-white/5 px-4 py-2 flex items-center border-b border-white/10 text-xs text-zinc-400 font-mono">
              Terminal
            </div>
            <div className="p-5 font-mono text-sm text-zinc-300">
              <pre>
                <code><span className="text-zinc-500">$</span> npm install @motioncomm/sdk</code>
              </pre>
            </div>
          </div>

          <div className="bg-[#03091e] rounded-sm overflow-hidden shadow-lg border border-zinc-800">
            <div className="bg-white/5 px-4 py-2 flex items-center border-b border-white/10 text-xs text-zinc-400 font-mono">
              index.js
            </div>
            <div className="p-5 font-mono text-sm overflow-x-auto text-zinc-300">
              <pre>
                <code>
<span className="text-purple-400">import</span> {'{'} MotionClient {'}'} <span className="text-purple-400">from</span> <span className="text-green-300">'@motioncomm/sdk'</span>;<br/><br/>
<span className="text-purple-400">const</span> motion = <span className="text-purple-400">new</span> MotionClient({'{'}<br/>
{'  '}apiKey: process.env.<span className="text-yellow-300">MOTION_API_KEY</span><br/>
{'}'});<br/><br/>
<span className="text-purple-400">await</span> motion.connect();
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* SECTION: RATE LIMITS */}
        <section id="rate-limits" className="mb-16 scroll-mt-24 pt-8 border-t border-zinc-200">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-[#1140c1]" /> Rate Limits
          </h2>
          <p className="text-zinc-600 mb-4 leading-relaxed">
            To prevent abuse and ensure stability across our infrastructure, Motioncomm enforces rate limits. When a rate limit is exceeded, the API will respond with a <code className="bg-zinc-100 text-red-500 px-1 py-0.5 rounded text-sm">429 Too Many Requests</code> status code.
          </p>
          <ul className="list-disc list-inside text-zinc-600 space-y-2 mb-6 ml-2">
            <li><strong className="text-zinc-900">Standard Tier:</strong> 100 requests / second per IP</li>
            <li><strong className="text-zinc-900">Enterprise Tier:</strong> 5,000 requests / second per IP</li>
          </ul>
        </section>

        {/* SECTION: ENDPOINTS (BULKY CONTENT) */}
        <section id="deployments" className="mb-16 scroll-mt-24 pt-8 border-t border-zinc-200">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-[#1140c1]" /> Create a Deployment
          </h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            This endpoint provisions a new cloud environment and returns the associated cluster IDs and access credentials.
          </p>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-xs tracking-wider">POST</span>
            <code className="text-sm font-bold text-zinc-800">/v1/deployments</code>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Parameters */}
            <div>
              <h4 className="font-bold text-zinc-900 mb-3 text-sm uppercase tracking-widest border-b border-zinc-200 pb-2">Body Parameters</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-[#1140c1]">region</span>
                    <span className="text-xs text-zinc-400">string (required)</span>
                  </div>
                  <p className="text-sm text-zinc-600 mt-1">The AWS/GCP region to deploy to (e.g., 'ap-south-1').</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-[#1140c1]">instance_type</span>
                    <span className="text-xs text-zinc-400">string (optional)</span>
                  </div>
                  <p className="text-sm text-zinc-600 mt-1">Server specifications. Defaults to 'mc.standard.v2'.</p>
                </div>
              </div>
            </div>

            {/* Response Example */}
            <div>
              <h4 className="font-bold text-zinc-900 mb-3 text-sm uppercase tracking-widest border-b border-zinc-200 pb-2">Response (200 OK)</h4>
              <div className="bg-[#03091e] rounded-sm overflow-hidden shadow-lg border border-zinc-800">
                <div className="p-5 font-mono text-xs overflow-x-auto text-zinc-300">
                  <pre>
                    <code>
{'{'}<br/>
{'  '}<span className="text-blue-300">"id"</span>: <span className="text-green-300">"dpl_88x29nkm1p"</span>,<br/>
{'  '}<span className="text-blue-300">"object"</span>: <span className="text-green-300">"deployment"</span>,<br/>
{'  '}<span className="text-blue-300">"status"</span>: <span className="text-green-300">"provisioning"</span>,<br/>
{'  '}<span className="text-blue-300">"region"</span>: <span className="text-green-300">"ap-south-1"</span>,<br/>
{'  '}<span className="text-blue-300">"created_at"</span>: <span className="text-purple-400">1715277881</span><br/>
{'}'}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: WEBHOOKS */}
        <section id="webhooks" className="mb-16 scroll-mt-24 pt-8 border-t border-zinc-200">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <Webhook className="w-6 h-6 text-[#1140c1]" /> Webhooks & Events
          </h2>
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Motioncomm can send webhook events that notify your application any time an event happens on your account. This is incredibly useful for updating your own database when a deployment succeeds, or when an API rate limit warning is triggered.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-sm p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-900 leading-relaxed font-medium">
              We highly recommend verifying webhook signatures to ensure the requests are coming from Motioncomm and not a malicious third party. You can find your webhook signing secret in the Developers Dashboard.
            </p>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <div className="pt-12 border-t border-zinc-200 mt-16 text-center">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">Need your API keys?</h3>
          <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
            API access is currently provisioned manually to ensure quality of service. Contact our engineering team to get your environment set up.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#1140c1] text-white px-8 py-3.5 rounded-sm font-bold hover:bg-[#0b287a] transition-colors shadow-md"
          >
            Contact Engineering
          </Link>
        </div>

      </main>
    </div>
  );
};

export default Docs;