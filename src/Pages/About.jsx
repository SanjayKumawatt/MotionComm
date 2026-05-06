import React from 'react';
import { Terminal, ShieldCheck, Code, GitBranch, ArrowRight, LayoutDashboard, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white min-h-screen">
      
      {/* SECTION 1: HERO & THE PHILOSOPHY (No dates, completely forward-looking) */}
      <section className="bg-[#1140c1] text-white py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle flat pattern */}
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
              - The Architecture of Logic
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
              We are engineering a structural response to bloated software.
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed font-medium">
              Motioncomm Private Limited was not formed to launch generic templates. We observed a massive gap in how commercial IT infrastructure is currently built-most systems are patched together rather than architected. We are taking the time to build clean, ground-up digital frameworks that will allow businesses to operate without technical friction when our services go live.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CURRENT PHASE & HONESTY CLAUSE */}
      <section className="py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
                Our Current Operating Phase
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
              
              <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
                <p>
                  Transparency is a core requirement for our team. We are currently in our primary development phase. This means our engineers are fully occupied with writing boilerplate code, configuring server deployments, and testing data-handling logic. 
                </p>
                <p>
                  Unlike platforms that claim capabilities they do not possess, we state clearly: our suite of custom web applications, API pipelines, and digital marketing setups is strictly in the building stage. By focusing 100% of our internal resources on code quality right now, we ensure that the final product will scale properly without requiring immediate refactoring.
                </p>
              </div>
            </div>

            {/* Flat Abstract Developer Graphic */}
            <div className="bg-zinc-50 p-10 border border-zinc-200 rounded-sm shadow-sm h-full flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1140c1]/5 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <Terminal className="w-12 h-12 text-[#1140c1] mb-6" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Focusing on the Backend</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">
                A visually appealing interface is useless if the database queries take too long to resolve. Our current priority is the hidden architecture-the databases, the cloud security protocols, and the API logic that will eventually power the user-facing tools.
              </p>
              <div className="bg-white p-4 border border-zinc-200 flex items-center gap-3 mt-auto">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-zinc-800 uppercase tracking-wide">Development Servers Active</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: ENGINEERING TENETS (Heavy Content) */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Development Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6">
              The Rules We Write Code By
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              When a business relies on a digital platform, that platform must be predictable, secure, and fast. These are the strict engineering principles governing our current build phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Tenet 1 */}
            <div className="bg-white p-8 border-l-4 border-[#1140c1] shadow-sm flex gap-6 items-start">
              <Code className="w-8 h-8 text-[#1140c1] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">Zero Dependency Bloat</h4>
                <p className="text-zinc-600 leading-relaxed">
                  We refuse to install heavy, third-party libraries for functions we can write natively. By keeping our dependency tree small, our upcoming applications will load significantly faster and will not break when an external developer abandons a plugin.
                </p>
              </div>
            </div>

            {/* Tenet 2 */}
            <div className="bg-white p-8 border-l-4 border-[#1140c1] shadow-sm flex gap-6 items-start">
              <ShieldCheck className="w-8 h-8 text-[#1140c1] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">Security as a Foundation</h4>
                <p className="text-zinc-600 leading-relaxed">
                  Security features cannot be tacked onto an application right before launch. We are coding data sanitization and strict role-based access controls into the very first lines of our backend routing logic.
                </p>
              </div>
            </div>

            {/* Tenet 3 */}
            <div className="bg-white p-8 border-l-4 border-[#1140c1] shadow-sm flex gap-6 items-start">
              <LayoutDashboard className="w-8 h-8 text-[#1140c1] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">Modular Scalability</h4>
                <p className="text-zinc-600 leading-relaxed">
                  If a platform cannot grow, it becomes a liability. We are actively structuring our code into isolated, modular components. When our clients will need new features in the future, we will be able to plug them into the existing system without rewriting the core framework.
                </p>
              </div>
            </div>

            {/* Tenet 4 */}
            <div className="bg-white p-8 border-l-4 border-[#1140c1] shadow-sm flex gap-6 items-start">
              <GitBranch className="w-8 h-8 text-[#1140c1] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">Rigorous Version Control</h4>
                <p className="text-zinc-600 leading-relaxed">
                  Even in our internal development phase, every line of code is reviewed and version-controlled. We are establishing an enterprise-grade deployment pipeline right now, so that future updates will be pushed without taking the platforms offline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DIRECT CALL TO ACTION */}
      <section className="py-20 bg-[#0b287a] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Looking for structured IT solutions?
          </h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            While our main platforms are in development, we are actively logging requirements for our initial launch cohort. Let us know what infrastructure your business requires.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#ffeb3b] text-[#0b287a] px-8 py-4 rounded-sm font-bold hover:bg-white transition-colors text-lg"
          >
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;