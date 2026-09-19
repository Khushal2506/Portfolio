import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, ArrowUp, Send, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactFooter({ onOpenRecruiterModal, onOpenResumeModal }) {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 bg-slate-950 light:bg-white border-t border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header & Call to Action Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 light:from-slate-50 light:to-slate-100 border border-slate-800 light:border-slate-300 relative overflow-hidden mb-16 shadow-2xl">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 light:text-emerald-700 text-xs font-semibold border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Placement Season 2026-2027
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-100 light:text-slate-900 leading-tight">
                Let's discuss how I can add immediate value to your team.
              </h2>

              <p className="text-sm sm:text-base text-slate-400 light:text-slate-600 max-w-xl leading-relaxed">
                Whether you're looking for an <strong className="text-slate-200 light:text-slate-800">Associate Product Manager</strong>, <strong className="text-slate-200 light:text-slate-800">Founder's Office Lead</strong>, or <strong className="text-slate-200 light:text-slate-800">Product Growth Strategist</strong>, let's connect!
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-500/20 active:scale-95"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
                </button>

                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 light:bg-slate-200 light:hover:bg-slate-300 text-slate-200 light:text-slate-800 font-semibold text-xs flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={onOpenRecruiterModal}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 light:bg-white border border-slate-700 light:border-slate-300 text-slate-300 light:text-slate-700 text-xs font-semibold hover:border-emerald-500 transition-colors"
                >
                  30s Recruiter Pitch
                </button>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 light:bg-white border border-slate-800 light:border-slate-200">
              <h3 className="text-sm font-bold text-slate-100 light:text-slate-900 mb-1">
                Quick Message / Recruiter Ping
              </h3>
              <p className="text-xs text-slate-400 light:text-slate-500 mb-4">
                Leave a short note or invitation and I'll respond within a few hours.
              </p>

              {formSent ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fade-in">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-slate-100 light:text-slate-900">Message Sent!</h4>
                  <p className="text-xs text-slate-400 light:text-slate-600 mt-1">
                    Thank you for reaching out. I look forward to connecting!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name / Company"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-xs text-slate-100 light:text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Work Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-xs text-slate-100 light:text-slate-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <textarea
                      rows="3"
                      required
                      placeholder="Short note, role opportunity or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-xs text-slate-100 light:text-slate-900 focus:outline-none focus:border-emerald-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Footer Meta & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800/80 light:border-slate-200 text-xs text-slate-400 light:text-slate-600">
          
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200 light:text-slate-800">{portfolioData.personal.name}</span>
            <span>•</span>
            <span>IIT Guwahati</span>
            <span>•</span>
            <span>{portfolioData.personal.phone}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <button
              onClick={onOpenResumeModal}
              className="hover:text-emerald-400 transition-colors"
            >
              View CV
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 light:bg-slate-100 hover:bg-slate-800 text-slate-300 light:text-slate-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
