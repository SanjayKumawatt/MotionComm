import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle2, X, Clock, Send, User, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  // State to control the toast pop-up
  const [showToast, setShowToast] = useState(false);

  // Form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
    e.target.reset();
  };

  return (
    <div className="font-sans text-zinc-900 bg-zinc-50 min-h-screen">
      
      {/* SECTION 1: HERO (Honest & Approachable Vibe) */}
      <section className="bg-[#1140c1] text-white py-24 border-b-8 border-[#0b287a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-sm mb-6">
                <Clock className="w-4 h-4 text-[#ffeb3b]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Fast Response Time</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                Get in Touch.
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed font-medium mb-10 max-w-lg">
                Whether you are interested in early access to our API platform, want to join the MotionInsight waitlist, or have a general enquiry - we respond to all messages within one working day.
              </p>
            </div>

            {/* Pexels Image with Matte Overlay (Clean Desk/Communication focus) */}
            <div className="relative h-full min-h-[350px] rounded-sm overflow-hidden border border-[#0b287a] shadow-2xl hidden lg:block">
              <div className="absolute inset-0 bg-[#0b287a]/40 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Motioncomm Support and Contact" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT FORM & DIRECT DETAILS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0b287a] mb-6">
                  Direct Contact Details
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-8 font-medium">
                  We believe in open communication. Reach out to us directly or use the form to submit your request.
                </p>
              </div>

              {/* Visible Direct Email */}
              <div className="bg-white p-8 border border-zinc-200 shadow-sm rounded-sm hover:border-[#1140c1] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1140c1]" />
                  </div>
                  <div>
                    <span className="block text-sm text-zinc-500 uppercase tracking-widest font-bold mb-1">General Email</span>
                    <a href="mailto:contact@motioncommservices.in" className="text-lg font-bold text-[#0b287a] hover:text-[#1140c1] transition-colors break-all">
                      contact@motioncommservices.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Founder Direct Contact */}
              <div className="bg-white p-8 border border-zinc-200 shadow-sm rounded-sm hover:border-[#1140c1] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm flex-shrink-0">
                    <User className="w-6 h-6 text-[#1140c1]" />
                  </div>
                  <div>
                    <span className="block text-sm text-zinc-500 uppercase tracking-widest font-bold mb-1">Founder - Direct Contact</span>
                    <div className="text-lg font-bold text-zinc-900 mb-1">Sanjay Kumawat</div>
                    <a href="mailto:contact@motioncommservices.in" className="text-[#0b287a] font-medium hover:text-[#1140c1] transition-colors break-all">
                      contact@motioncommservices.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Full Address */}
              <div className="bg-white p-8 border border-zinc-200 shadow-sm rounded-sm hover:border-[#1140c1] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1140c1]" />
                  </div>
                  <div>
                    <span className="block text-sm text-zinc-500 uppercase tracking-widest font-bold mb-2">Registered Address</span>
                    <address className="text-zinc-800 not-italic leading-relaxed font-medium">
                      S/o Lt. K.K. Debnath, A.D. Nagar Road No. 7,<br />
                      Agartala, Arundhutinagar,<br />
                      West Tripura, Sadar,<br />
                      Tripura, India - 799003
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 border-t-4 border-[#1140c1] shadow-xl rounded-sm">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-6 h-6 text-[#1140c1]" />
                  <h3 className="text-2xl font-bold text-zinc-900">Submit a Request</h3>
                </div>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Full Name"
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700">Work / Business Email</label>
                      <input 
                        type="email" 
                        placeholder="Company Email"
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">What can we help you with?</label>
                    <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] transition-all cursor-pointer" required>
                      <option value="" disabled selected>Select an option...</option>
                      <option value="api">API Access</option>
                      <option value="motioninsight">MotionInsight Waitlist</option>
                      <option value="general">General Enquiry</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700">What are you building or working on?</label>
                    <textarea 
                      rows="5" 
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1140c1] transition-all resize-none"
                      placeholder="Tell us a bit about your project or how we can assist you..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full bg-[#1140c1] text-white font-bold py-4 rounded-sm hover:bg-[#0b287a] transition-colors mt-2 text-lg flex justify-center items-center gap-2"
                  >
                    <Send className="w-5 h-5" /> Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POP-UP TOAST NOTIFICATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
            className="fixed bottom-6 right-6 z-50 bg-[#0b287a] border-l-4 border-[#ffeb3b] shadow-2xl p-4 sm:p-5 rounded-sm max-w-sm flex items-start gap-4"
          >
            <CheckCircle2 className="w-6 h-6 text-[#ffeb3b] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Message Sent Successfully</h4>
              <p className="text-blue-100 text-xs font-medium leading-relaxed">
                Thank you for reaching out. We will review your message and get back to you within one working day.
              </p>
            </div>
            <button 
              onClick={() => setShowToast(false)} 
              className="text-blue-200 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Contact;