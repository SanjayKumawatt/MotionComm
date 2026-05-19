import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Database, 
  MessageSquareText, 
  LayoutDashboard, 
  Users, 
  Target, 
  Briefcase, 
  ArrowRight, 
  AlertCircle,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MotionInsight = () => {
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
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-3 py-1.5 rounded-sm mb-6">
                <Clock className="w-4 h-4 text-yellow-300" />
                <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider">Product In Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Analytics Dashboard for Non-Technical Founders.
              </h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl">
                MotionInsight is a SaaS analytics dashboard currently in development by Motioncomm. It is designed to let small business owners and early-stage startup founders understand their business data without writing code or SQL queries.
              </p>
              <p className="text-blue-200 text-base mb-10 leading-relaxed max-w-xl hidden md:block">
                We are building MotionInsight to solve a problem we keep hearing from founders: their data lives in spreadsheets, CRMs, and ad platforms - pulling it together manually takes hours every week. MotionInsight connects those sources and surfaces the insight automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-[#ffeb3b] text-[#0b287a] px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-white transition-colors flex items-center justify-center gap-2">
                  Join Early Access Waitlist <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#how-it-works" className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-white/20 transition-colors text-center">
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative rounded-sm overflow-hidden h-[500px] shadow-2xl border border-white/10 bg-[#061235]"
            >
              {/* Pexels Analytics/Dashboard Image (Matte & Clean) */}
              <img 
                src="https://images.pexels.com/photos/185576/pexels-photo-185576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Data Analytics Dashboard" 
                className="w-full h-full object-cover grayscale-[20%] opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b287a] via-[#0b287a]/20 to-transparent mix-blend-multiply"></div>
              
              {/* Overlay card to simulate the "Plain language" feature */}
              <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-sm shadow-xl z-10">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquareText className="w-5 h-5 text-[#1140c1]" />
                  <span className="font-bold text-sm uppercase tracking-wider text-zinc-500">Automated Insight</span>
                </div>
                <p className="text-zinc-800 font-medium">
                  "Your weekly user signups have increased by 15% compared to last week, primarily driven by your recent CSV data import."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6">
              Simple by design. Actionable by default.
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Stop exporting CSVs and manually building pivot tables. MotionInsight is built to automate the busywork of data reporting.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="w-full max-w-md bg-zinc-50 border border-zinc-200 p-8 rounded-sm">
                  <Database className="w-12 h-12 text-[#1140c1] mb-6" />
                  <div className="space-y-4">
                    <div className="h-12 bg-white border border-zinc-200 rounded-sm flex items-center px-4"><span className="text-sm font-medium text-zinc-600">Upload CSV File...</span></div>
                    <div className="h-12 bg-white border border-zinc-200 rounded-sm flex items-center px-4"><span className="text-sm font-medium text-zinc-600">Connect Google Sheets...</span></div>
                    <div className="h-12 bg-white border border-zinc-200 rounded-sm flex items-center px-4 opacity-50"><span className="text-sm font-medium text-zinc-400">REST API (Coming Soon)</span></div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-[#1140c1] font-black text-6xl mb-4 opacity-20">01</div>
                <h3 className="text-2xl font-bold mb-4 text-zinc-900">Connect Your Data Sources</h3>
                <p className="text-zinc-600 leading-relaxed text-lg mb-6">
                  MotionInsight can ingest data from CSV uploads, Google Sheets, and basic REST API connections. We are expanding supported integrations progressively.
                </p>
                <ul className="space-y-3 text-zinc-700 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#1140c1]"></div> No data engineering knowledge required.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#1140c1]"></div> Secure, read-only connections.</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-[#1140c1] font-black text-6xl mb-4 opacity-20">02</div>
                <h3 className="text-2xl font-bold mb-4 text-zinc-900">Summaries Generated From Your Data</h3>
                <p className="text-zinc-600 leading-relaxed text-lg mb-6">
                  Once connected, MotionInsight processes your data and generates plain-language summaries. Instead of endlessly scrolling through rows of numbers, you get immediate clarity.
                </p>
                <p className="text-zinc-600 leading-relaxed text-lg">
                  Receive a short paragraph explaining what happened this week, what is trending upwards, and where your attention might be needed immediately.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md bg-[#0b287a] border border-[#1140c1] p-8 rounded-sm text-white">
                  <MessageSquareText className="w-12 h-12 text-[#ffeb3b] mb-6" />
                  <p className="text-blue-100 leading-relaxed font-medium">
                    "Weekly Summary: Your operational expenses dropped by 8% this week, while core product interactions remained steady. Attention needed: 3 pending invoices from your uploaded sheet are nearing their due dates."
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="w-full max-w-md bg-zinc-50 border border-zinc-200 p-8 rounded-sm">
                  <LayoutDashboard className="w-12 h-12 text-[#1140c1] mb-6" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white border border-zinc-200 rounded-sm"></div>
                    <div className="h-24 bg-white border border-zinc-200 rounded-sm"></div>
                    <div className="col-span-2 h-32 bg-white border border-zinc-200 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-[#1140c1] font-black text-6xl mb-4 opacity-20">03</div>
                <h3 className="text-2xl font-bold mb-4 text-zinc-900">Customise Your Dashboard</h3>
                <p className="text-zinc-600 leading-relaxed text-lg mb-6">
                  Arrange metric cards, charts, and summaries on a drag-and-drop dashboard. Focus only on the KPIs that actually matter to your business growth.
                </p>
                <ul className="space-y-3 text-zinc-700 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#1140c1]"></div> Absolutely no SQL or coding required.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#1140c1]"></div> Share view-only access with team members.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#1140c1]"></div> Export insights as PDF reports.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO IT IS BUILT FOR */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Target Audience
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
              Who It Is Built For
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              We are designing the initial version of MotionInsight specifically for lean teams who need clarity without the overhead of enterprise BI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-zinc-200 rounded-sm shadow-sm hover:border-[#1140c1] transition-colors">
              <Target className="w-10 h-10 text-[#1140c1] mb-5" />
              <h3 className="text-xl font-bold mb-3">Early-Stage Founders</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Founders tracking metrics across multiple disjointed tools who want a single, unified view of their startup's health without spending hours compiling data.
              </p>
            </div>
            <div className="bg-white p-8 border border-zinc-200 rounded-sm shadow-sm hover:border-[#1140c1] transition-colors">
              <Briefcase className="w-10 h-10 text-[#1140c1] mb-5" />
              <h3 className="text-xl font-bold mb-3">Small Business Owners</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Owners managing daily operations without a dedicated data analyst on staff. Get plain-English updates on sales, expenses, and operational capacity.
              </p>
            </div>
            <div className="bg-white p-8 border border-zinc-200 rounded-sm shadow-sm hover:border-[#1140c1] transition-colors">
              <Users className="w-10 h-10 text-[#1140c1] mb-5" />
              <h3 className="text-xl font-bold mb-3">Marketing & Ops Leads</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Team leads who need to generate reliable weekly reporting for stakeholders without the manual effort of copy-pasting from various ad platforms and CRMs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURRENT STATUS (Transparency & Honesty Section) */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50/50 border border-yellow-200 p-8 md:p-12 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
            
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <span className="text-yellow-800 font-bold text-sm tracking-widest uppercase mb-2 block">
                  - Development Status
                </span>
                <h2 className="text-2xl font-extrabold text-zinc-900 mb-4">
                  Building Openly. Shipping Iteratively.
                </h2>
                <div className="space-y-4 text-zinc-700 font-medium leading-relaxed">
                  <p>
                    MotionInsight is currently in active MVP development. We are a small engineering team building this product iteratively and accepting early-access signups now. We will onboard our first users in batches as features stabilise.
                  </p>
                  <p>
                    We are transparent about where the product stands: the core dashboard and summary engine are being built and tested. Integrations are being added progressively. 
                  </p>
                  <p className="text-zinc-900 font-bold bg-yellow-100 inline-block px-2 py-1 mt-2">
                    We are not claiming a finished product - we are building openly and sharing our progress honestly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-[#0b287a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Help us shape the future of business analytics.
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Secure your spot on the waitlist. Early access users will receive extended free trials and direct input into our integration roadmap.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#ffeb3b] text-[#0b287a] px-8 py-4 rounded-sm font-bold hover:bg-white transition-colors"
          >
            Join the Waitlist - Free Early Access <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default MotionInsight;