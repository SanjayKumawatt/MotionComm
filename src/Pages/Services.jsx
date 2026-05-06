import React from 'react';
import { Terminal, Database, Code2, Server, Workflow, ArrowRight, LayoutDashboard, Search, Network, Box, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white min-h-screen">
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#1140c1] text-white py-24 lg:py-32 border-b-8 border-[#0b287a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-[#ffeb3b] font-extrabold text-sm tracking-widest uppercase mb-6 block">
              - Our Technical Scope
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
              Building systems that process logic, not just pixels.
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed font-medium">
              We do not assemble pre-made themes. Motioncomm Private Limited is currently programming custom IT frameworks and data pipelines. Our ongoing development focuses heavily on backend stability, clean frontend component trees, and strict server-side rendering protocols. When our solutions are deployed, they will be built to survive traffic spikes and complex data operations.
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: THE TECH ENVIRONMENT (Adds length and technical weight without images) */}
      <section className="py-20 bg-zinc-900 text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Active Development Stack</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">We are building our upcoming services on established, high-performance architectures to ensure long-term maintainability.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700/50 text-center">
              <LayoutDashboard className="w-8 h-8 text-[#ffeb3b] mx-auto mb-4" />
              <h4 className="font-bold text-sm uppercase tracking-wide">Component UI</h4>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700/50 text-center">
              <Cpu className="w-8 h-8 text-[#ffeb3b] mx-auto mb-4" />
              <h4 className="font-bold text-sm uppercase tracking-wide">Server Logic</h4>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700/50 text-center">
              <Database className="w-8 h-8 text-[#ffeb3b] mx-auto mb-4" />
              <h4 className="font-bold text-sm uppercase tracking-wide">Relational DBs</h4>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-sm border border-zinc-700/50 text-center">
              <ShieldCheck className="w-8 h-8 text-[#ffeb3b] mx-auto mb-4" />
              <h4 className="font-bold text-sm uppercase tracking-wide">Auth Middleware</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE CAPABILITIES (Now with 4 Blocks) */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20">
            <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
              Upcoming Capabilities Matrix
            </h2>
            <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
            <p className="text-zinc-600 text-lg max-w-3xl leading-relaxed">
              Below is the technical breakdown of the services we are currently developing. Every module is being written to address specific bottlenecks we have observed in standard industry deployments.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* Capability Block 1 */}
            <div className="bg-white p-8 lg:p-10 border border-zinc-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#1140c1]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-3 flex flex-col justify-start">
                  <div className="w-16 h-16 bg-zinc-100 flex items-center justify-center mb-6 rounded-sm">
                    <Code2 className="w-8 h-8 text-[#1140c1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">Web App Architecture</h3>
                  <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Frontend & Logic</span>
                </div>
                
                <div className="lg:col-span-5 space-y-6 border-l border-zinc-100 pl-0 lg:pl-10">
                  <div>
                    <h4 className="text-sm font-bold text-red-600 mb-2 flex items-center gap-2 uppercase tracking-wide">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span> The Common Flaw
                    </h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      Most commercial web applications suffer from bloated DOMs and excessive client-side rendering. This leads to high memory consumption and layout shifts during load times.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2 uppercase tracking-wide">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span> How We Are Building It
                    </h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      Our engineering team is writing single-page applications using strict component-based logic. We are implementing robust state management to prevent unnecessary re-renders. Upon launch, they will prioritize server-side execution for heavy tasks.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 h-full min-h-[250px] relative rounded-sm overflow-hidden border border-zinc-100">
                  <div className="absolute inset-0 bg-[#0b287a]/40 mix-blend-multiply z-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="React Development Code" 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
                  />
                </div>

              </div>
            </div>

            {/* Capability Block 2 */}
            <div className="bg-white p-8 lg:p-10 border border-zinc-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#1140c1]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-3 flex flex-col justify-start">
                  <div className="w-16 h-16 bg-zinc-100 flex items-center justify-center mb-6 rounded-sm">
                    <Workflow className="w-8 h-8 text-[#1140c1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">Marketing Data Pipelines</h3>
                  <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">SEO & Analytics</span>
                </div>
                
                <div className="lg:col-span-5 space-y-6 border-l border-zinc-100 pl-0 lg:pl-10">
                  <div>
                    <h4 className="text-sm font-bold text-red-600 mb-2 flex items-center gap-2 uppercase tracking-wide">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span> The Common Flaw
                    </h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      Marketing campaigns often rely on broken tracking tags and poor URL structures. Data is lost between the landing page and the CRM, leading to inaccurate analytics.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2 uppercase tracking-wide">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span> How We Are Building It
                    </h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      We are engineering technical marketing pipelines from the server level. The SEO structures we are coding right now will generate dynamic, schema-compliant meta-tags that search engine crawlers can read natively without executing JavaScript.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 h-full min-h-[250px] relative rounded-sm overflow-hidden border border-zinc-100">
                  <div className="absolute inset-0 bg-[#0b287a]/40 mix-blend-multiply z-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Data Analytics Pipeline" 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
                  />
                </div>

              </div>
            </div>

            {/* NEW Capability Block 3 (API Integration) */}
            <div className="bg-white p-8 lg:p-10 border border-zinc-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#1140c1]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-3 flex flex-col justify-start">
                  <div className="w-16 h-16 bg-zinc-100 flex items-center justify-center mb-6 rounded-sm">
                    <Network className="w-8 h-8 text-[#1140c1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">API Integrations</h3>
                  <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Data Transfer</span>
                </div>
                
                <div className="lg:col-span-5 space-y-6 border-l border-zinc-100 pl-0 lg:pl-10">
                  <div>
                    <h4 className="text-sm font-bold text-red-600 mb-2 flex items-center gap-2 uppercase tracking-wide">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span> The Common Flaw
                    </h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      Many businesses use disparate software systems that cannot communicate. Hardcoded integrations break whenever a third-party service updates their endpoints.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2 uppercase tracking-wide">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span> How We Are Building It
                    </h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      We are writing isolated middleware layers designed specifically for data translation. By creating standalone, RESTful endpoints, our upcoming systems will securely transfer data between external CRMs, payment gateways, and internal databases.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 h-full min-h-[250px] relative rounded-sm overflow-hidden border border-zinc-100">
                  <div className="absolute inset-0 bg-[#0b287a]/40 mix-blend-multiply z-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="API Network Concept" 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
                  />
                </div>

              </div>
            </div>

            {/* Capability Block 4 */}
            <div className="bg-white p-8 lg:p-10 border border-zinc-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#1140c1]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-3 flex flex-col justify-start">
                  <div className="w-16 h-16 bg-zinc-100 flex items-center justify-center mb-6 rounded-sm">
                    <Database className="w-8 h-8 text-[#1140c1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">Cloud Configuration</h3>
                  <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Infrastructure</span>
                </div>
                
                <div className="lg:col-span-5 space-y-6 border-l border-zinc-100 pl-0 lg:pl-10">
                  <div>
                    <h4 className="text-sm font-bold text-red-600 mb-2 flex items-center gap-2 uppercase tracking-wide">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span> The Common Flaw
                    </h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      Companies frequently deploy their software on shared, unoptimized hosting environments. Databases lack proper indexing, causing simple queries to lock up the entire server.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-600 mb-2 flex items-center gap-2 uppercase tracking-wide">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span> How We Are Building It
                    </h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      We are currently configuring cloud routing rules and load balancers. We are committed to applying appropriate security measures, such as input sanitization and rate-limiting middleware, to ensure the infrastructure will remain stable under pressure.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 h-full min-h-[250px] relative rounded-sm overflow-hidden border border-zinc-100">
                  <div className="absolute inset-0 bg-[#0b287a]/40 mix-blend-multiply z-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Cloud Server Infrastructure" 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION 4: TARGET WORKFLOWS (Text based, expands the page vertically) */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#0b287a] mb-6">
              Designing For Specific Workflows
            </h2>
            <div className="w-16 h-1.5 bg-[#ffeb3b] mx-auto mb-8"></div>
            <p className="text-zinc-600 text-lg leading-relaxed">
              While our core architecture is adaptable, we are engineering our upcoming systems to handle specific operational bottlenecks common in modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-50 border border-zinc-200 hover:border-[#1140c1] transition-all">
              <Box className="w-8 h-8 text-[#1140c1] mb-4" />
              <h4 className="text-lg font-bold text-zinc-900 mb-3">Inventory & Logistics Logic</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">
                We are building data models capable of handling real-time inventory adjustments, preventing race-conditions when multiple users attempt to query or update stock simultaneously.
              </p>
            </div>
            <div className="p-8 bg-zinc-50 border border-zinc-200 hover:border-[#1140c1] transition-all">
              <ShieldCheck className="w-8 h-8 text-[#1140c1] mb-4" />
              <h4 className="text-lg font-bold text-zinc-900 mb-3">Secure Internal Portals</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Our authentication middleware is being drafted to support strict Role-Based Access Control (RBAC), ensuring that employee portals will isolate sensitive company data securely upon launch.
              </p>
            </div>
            <div className="p-8 bg-zinc-50 border border-zinc-200 hover:border-[#1140c1] transition-all">
              <Search className="w-8 h-8 text-[#1140c1] mb-4" />
              <h4 className="text-lg font-bold text-zinc-900 mb-3">Automated Data Reporting</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Instead of manually compiling spreadsheets, our upcoming systems will feature cron-job logic that automatically queries databases and compiles sanitized reports during low-traffic server hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DEVELOPMENT STANDARDS */}
      <section className="py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative rounded-sm overflow-hidden h-full min-h-[400px] border border-zinc-200">
              <div className="absolute inset-0 bg-[#1140c1]/40 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Development Team Coding" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
              />
              
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-[#0b287a] p-8 rounded-sm shadow-2xl">
                <Terminal className="w-8 h-8 text-[#ffeb3b] mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Strict Versioning Policy</h3>
                <ul className="space-y-3 text-sm text-blue-200">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffeb3b] font-bold mt-0.5">01</span> 
                    All features are being built in isolated branches.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffeb3b] font-bold mt-0.5">02</span> 
                    We mandate peer reviews before merging into the main repository.
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
                - Quality Assurance
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                No "Quick Fixes".
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
              
              <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
                <p>
                  When you hire an IT firm, you expect engineering, not duct tape. If a module takes an extra week to build correctly, we take the week. 
                </p>
                <p>
                  Our internal policy is strict: we do not bypass latency issues with loading spinners, and we do not ignore database warnings. Every system we are constructing right now undergoes severe load testing at the local environment level before it will ever be allowed to touch a production server.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="py-20 bg-zinc-100 text-center border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
            Discuss Your System Requirements
          </h2>
          <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
            If your business model requires custom database structures, optimized frontends, or robust API endpoints, we should talk. We are currently reviewing technical scopes for our upcoming launch.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#1140c1] text-white px-8 py-4 rounded-sm font-bold hover:bg-[#0b287a] transition-colors text-lg"
          >
            Submit Technical Scope <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;