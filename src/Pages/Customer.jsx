import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Activity, ArrowRight, Quote, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Customers = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b287a] mb-6">
              Powering modern engineering teams.
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto mb-10">
              From scaling internal tools to managing high-concurrency data pipelines, see how businesses are utilizing Motioncomm's infrastructure to deploy faster and operate securely.
            </p>
          </motion.div>

         
        </div>
      </section>

      {/* 2. CASE STUDIES SECTION */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Implementation Profiles
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900">
              Infrastructure in Action
            </h2>
          </div>

          <div className="space-y-16">
            
            {/* Case Study 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 relative">
                <div className="rounded-sm overflow-hidden h-[350px] border border-zinc-200 shadow-md">
                  {/* Abstract office/team image (Matte) */}
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="SaaS Development Team" 
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-[#1140c1]/10 mix-blend-multiply"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#0b287a] p-5 rounded-sm shadow-xl hidden md:block">
                  <Building2 className="w-10 h-10 text-[#ffeb3b]" />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="inline-block px-3 py-1 bg-blue-50 text-[#1140c1] text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
                  B2B SaaS Platform
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-6">
                  Accelerating time-to-market by bypassing backend development.
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">The Challenge</h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">A newly funded startup needed to launch their enterprise dashboard within 6 weeks. Building secure user authentication, role-based access control (RBAC), and database schemas from scratch would have taken their small engineering team 4 months.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">The Motioncomm Integration</h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">They implemented the Motioncomm Node.js SDK. Using our pre-built Auth and Routing endpoints, they wired their React frontend directly to our infrastructure in under 48 hours.</p>
                  </div>
                  <div className="bg-zinc-50 border-l-4 border-[#1140c1] p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-0.5" />
                      <p className="text-zinc-900 font-bold text-sm">Result: Saved 3+ months of engineering resources and successfully launched ahead of schedule with enterprise-grade security.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-zinc-200"></div>

            {/* Case Study 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="inline-block px-3 py-1 bg-blue-50 text-[#1140c1] text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
                  E-Commerce Logistics
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-6">
                  Resolving database locks during high-traffic flash sales.
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">The Challenge</h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">A regional e-commerce brand experienced severe server crashes and database locks during their weekend flash sales. Their legacy monolithic architecture could not handle thousands of simultaneous inventory queries.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">The Motioncomm Integration</h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">They migrated their inventory routing to Motioncomm's stateless API. We deployed their pipeline across our multi-region edge network, utilizing NoSQL caching to serve read-heavy requests instantly without hitting the primary database.</p>
                  </div>
                  <div className="bg-zinc-50 border-l-4 border-[#1140c1] p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#1140c1] flex-shrink-0 mt-0.5" />
                      <p className="text-zinc-900 font-bold text-sm">Result: Achieved 100% uptime during their largest sale event of the year, processing 5,000+ orders per minute with sub-50ms latency.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative order-1 lg:order-2">
                <div className="rounded-sm overflow-hidden h-[350px] border border-zinc-200 shadow-md">
                  {/* Abstract data/logistics image (Matte) */}
                  <img 
                    src="https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="E-commerce Data Routing" 
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-[#1140c1]/10 mix-blend-multiply"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#0b287a] p-5 rounded-sm shadow-xl hidden md:block">
                  <ShoppingCart className="w-10 h-10 text-[#ffeb3b]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TESTIMONIAL / TRUST SECTION */}
      <section className="py-24 bg-[#03091e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-[#1140c1] mx-auto mb-8 opacity-50" />
          <h2 className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
            "Motioncomm's infrastructure allows our engineering team to completely ignore DevOps. We just push our frontend code, connect to their APIs, and know that the backend will scale automatically."
          </h2>
          <div>
            <div className="font-bold text-lg text-white">Lead Engineer</div>
            <div className="text-sm text-zinc-400">Enterprise Logistics Partner</div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-20 bg-[#1140c1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Build your next product on Motioncomm.
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join the forward-thinking teams that are deploying faster and scaling securely with our API infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-[#ffeb3b] text-[#0b287a] px-8 py-4 rounded-sm font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              Request Access Keys <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/docs"
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Customers;