import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Target, 
  MapPin, 
  Briefcase, 
  Users, 
  ShieldCheck, 
  User, 
  Calendar, 
  Mail, 
  CheckCircle2, 
  Code2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Company = () => {
  return (
    <div className="font-sans text-zinc-900 bg-white">
      
      {/* 1. HERO SECTION (Honest Startup Identity) */}
      <section className="relative bg-[#0b287a] overflow-hidden pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-sm mb-6">
              <Building2 className="w-4 h-4 text-[#ffeb3b]" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">About The Company</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              About Motioncomm Private Limited.
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-0 leading-relaxed max-w-3xl mx-auto font-medium">
              Motioncomm is an India-based technology startup incorporated in April 2026. We are building backend infrastructure tools and a data analytics product for small and growing development teams.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* 2. FOUNDER & MISSION */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Founder Section */}
            <div>
              <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
                - Our Founder
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                Founded by Sanjay Kumawat.
              </h2>
              <div className="w-16 h-1.5 bg-[#ffeb3b] mb-8"></div>
              
              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed font-medium">
                <p>
                  Motioncomm was founded by Sanjay Kumawat, a software engineer focused on backend systems and developer tooling. Sanjay started Motioncomm after repeatedly running into the same bottleneck across multiple projects: engineering teams spending most of their early-stage time on infrastructure setup rather than building their actual product.
                </p>
                <p className="bg-zinc-50 p-6 border-l-4 border-[#1140c1] text-zinc-800 font-bold italic text-base">
                  "With Motioncomm, the goal is straightforward - give small teams the backend foundation and data tooling they need to move fast, without building it all from scratch."
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-10 rounded-sm">
              <div className="w-12 h-12 bg-white border border-zinc-200 rounded-sm flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h3>
              <p className="text-zinc-600 leading-relaxed mb-6 font-medium">
                Our mission is to help small engineering teams and early-stage startups get to production faster by providing foundational backend infrastructure and lightweight analytics tooling - tools they would otherwise spend months building themselves.
              </p>
              <p className="text-zinc-600 leading-relaxed font-medium pb-6 border-b border-zinc-200">
                We are not trying to replace large cloud providers. We are building focused, practical tools for teams at the beginning of their journey - because that is where the problem is most painful and most neglected.
              </p>
              <div className="pt-6 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-zinc-800 uppercase tracking-wide">Focused on Early-Stage Growth</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1140c1] font-bold text-sm tracking-widest uppercase mb-3 block">
              - Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b287a] mb-4">
              What guides how we build.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-zinc-200 rounded-sm hover:border-[#1140c1] transition-colors shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900">Honesty First</h3>
              <p className="text-zinc-600 leading-relaxed text-sm font-medium">
                We are an early-stage company. We will not claim capabilities we have not built, scale we have not reached, or clients we do not have. We communicate openly about where our products stand and what we are working toward.
              </p>
            </div>
            
            <div className="bg-white p-10 border border-zinc-200 rounded-sm hover:border-[#1140c1] transition-colors shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900">Build for the Developer</h3>
              <p className="text-zinc-600 leading-relaxed text-sm font-medium">
                Every decision is filtered through one question: does this make life easier for the engineer integrating our tools? Documentation, API design, and onboarding are all treated as first-class concerns.
              </p>
            </div>

            <div className="bg-white p-10 border border-zinc-200 rounded-sm hover:border-[#1140c1] transition-colors shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#1140c1]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900">Security by Default</h3>
              <p className="text-zinc-600 leading-relaxed text-sm font-medium">
                Authentication, input sanitisation, and access control are built into our architecture from day one - not added later as an afterthought.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR TEAM */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#03091e] rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row border-l-4 border-[#ffeb3b]">
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-[#ffeb3b] font-bold text-sm tracking-widest uppercase mb-4 block">
                - Our Team
              </span>
              <h2 className="text-3xl font-extrabold text-white mb-6">
                A lean, engineering-led team.
              </h2>
              <p className="text-blue-100 leading-relaxed mb-8 font-medium">
                Motioncomm is led by Sanjay Kumawat and run by a small group of engineers and product builders. We operate as a distributed team with our registered office in Agartala, Tripura, and remote development operations in Jaipur, Rajasthan.
              </p>
              <div className="flex items-center gap-4 text-white pb-6 border-b border-zinc-800 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#1140c1]" />
                  <span className="font-bold text-sm uppercase tracking-wide">Remote Ops</span>
                </div>
                <span className="text-zinc-600">|</span>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#1140c1]" />
                  <span className="font-bold text-sm uppercase tracking-wide">Product Focused</span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm italic">
                We are a lean organisation focused on building and shipping. As our products grow, so will our team.
              </p>
            </div>
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
              {/* Clean workspace image to represent the team focus */}
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Motioncomm Team Workspace" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] opacity-80"
              />
              <div className="absolute inset-0 bg-[#0b287a]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPANY DETAILS (Grid Layout) */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">
              Company Details
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Official registered information and operations footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Founder */}
            <div className="bg-white p-8 border border-zinc-200 rounded-sm shadow-sm">
              <User className="w-6 h-6 text-[#1140c1] mb-4" />
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Founder</h3>
              <p className="text-zinc-900 font-bold">Sanjay Kumawat</p>
              <p className="text-zinc-600 text-sm mt-1">Founder & Engineer, Motioncomm Private Limited</p>
            </div>

            {/* Incorporation */}
            <div className="bg-white p-8 border border-zinc-200 rounded-sm shadow-sm">
              <Calendar className="w-6 h-6 text-[#1140c1] mb-4" />
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Incorporation</h3>
              <p className="text-zinc-900 font-bold">April 2026</p>
              <p className="text-zinc-600 text-sm mt-1">Motioncomm Private Limited, Companies Act, India.</p>
            </div>

            {/* Contact */}
            <div className="bg-white p-8 border border-zinc-200 rounded-sm shadow-sm">
              <Mail className="w-6 h-6 text-[#1140c1] mb-4" />
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Contact</h3>
              <p className="text-zinc-900 font-bold">contact@motioncommservices.in</p>
              <Link to="/" className="text-[#1140c1] hover:underline text-sm mt-1 inline-block">motioncommservices.in</Link>
            </div>

            {/* Corporate HQ */}
            <div className="bg-white p-8 border border-zinc-200 rounded-sm shadow-sm md:col-span-2 lg:col-span-2">
              <MapPin className="w-6 h-6 text-[#1140c1] mb-4" />
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Corporate Headquarters (Registered)</h3>
              <address className="text-zinc-900 font-medium not-italic leading-relaxed">
                S/o Lt. K.K. Debnath, A.D. Nagar Road No. 7<br />
                Agartala, Arundhutinagar<br />
                West Tripura, Sadar, Tripura, India - 799003
              </address>
            </div>

            {/* Dev Ops */}
            <div className="bg-white p-8 border border-zinc-200 rounded-sm shadow-sm">
              <Code2 className="w-6 h-6 text-[#1140c1] mb-4" />
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Development Operations</h3>
              <address className="text-zinc-900 font-medium not-italic leading-relaxed">
                Jaipur, Rajasthan<br />
                India
              </address>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Company;