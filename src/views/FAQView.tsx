/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS_DATA, getWhatsAppLink } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function FAQView() {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1'); // Default open first one
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pricing' | 'development' | 'security' | 'delivery'>('all');

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFaqs = FAQS_DATA.filter(faq => {
    return selectedCategory === 'all' || faq.category === selectedCategory;
  });

  const faqWhatsappUrl = getWhatsAppLink(
    "Hello! I am reading your FAQ page and have a question regarding code ownership/development timelines."
  );

  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Frequently Answered Queries</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          FAQ & Development Support
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Everything you need to know about our MetaTrader 5 (MT5) programming standards, NDAs, pricing parameters, and lifetime support guarantees.
        </p>
      </div>

      {/* Category selection */}
      <div className="flex flex-wrap gap-2 justify-center max-w-xl mx-auto">
        {[
          { id: 'all', label: 'All Questions' },
          { id: 'pricing', label: 'Pricing & Cost' },
          { id: 'development', label: 'Coding & Turnaround' },
          { id: 'security', label: 'Security & NDA' },
          { id: 'delivery', label: 'Delivery & Guarantees' }
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as any)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                : 'bg-slate-900/40 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = expandedId === faq.id;
          return (
            <div 
              key={faq.id}
              id={`faq-item-${faq.id}`}
              className="bg-slate-950 border border-slate-900 rounded-xl overflow-hidden hover:border-slate-800 transition-colors"
            >
              {/* Question Trigger */}
              <button
                onClick={() => handleToggle(faq.id)}
                className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 cursor-pointer outline-none select-none hover:text-emerald-400"
              >
                <span className="font-bold text-sm sm:text-base text-slate-100 hover:text-emerald-400 transition-colors leading-snug">
                  {faq.question}
                </span>
                <span className="shrink-0 p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                  {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </span>
              </button>

              {/* Answer block */}
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? 'max-h-[500px] border-t border-slate-900' : 'max-h-0'
                }`}
              >
                <div className="p-5 sm:p-6 text-xs sm:text-sm text-slate-400 leading-relaxed space-y-4 bg-slate-900/10">
                  <p>{faq.answer}</p>
                  
                  {/* Visual Category Subbadge */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 pt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Category Ref: {faq.category.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Quick stats bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4 text-center text-xs font-mono text-slate-400">
        <div className="bg-slate-900/30 p-4.5 rounded-xl border border-slate-900 space-y-2">
          <Clock className="h-5 w-5 text-emerald-400 mx-auto" />
          <h4 className="font-bold text-slate-200">Response Speed</h4>
          <p className="text-[10px] text-slate-500">We respond to all WhatsApp queries under 2-3 hours on average.</p>
        </div>
        <div className="bg-slate-900/30 p-4.5 rounded-xl border border-slate-900 space-y-2">
          <ShieldCheck className="h-5 w-5 text-emerald-400 mx-auto" />
          <h4 className="font-bold text-slate-200">Confidentiality</h4>
          <p className="text-[10px] text-slate-500">100% Secure logic. Standard mutual NDAs signed prior to strategy disclosure.</p>
        </div>
        <div className="bg-slate-900/30 p-4.5 rounded-xl border border-slate-900 space-y-2">
          <HeartHandshake className="h-5 w-5 text-emerald-400 mx-auto" />
          <h4 className="font-bold text-slate-200">Post-Delivery Support</h4>
          <p className="text-[10px] text-slate-500">3-Year coverage for bugs, re-quotes, slip buffers, and terminal compatibility.</p>
        </div>
      </div>

      {/* Help Banner CTA */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 text-center max-w-2xl mx-auto space-y-5">
        <HelpCircle className="h-8 w-8 text-emerald-400 mx-auto" />
        <h3 className="text-xl font-bold text-slate-100 font-sans">Have a custom or proprietary query?</h3>
        <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
          We understand that institutional execution requires tailored parameters. Let's hop on a direct chat to iron out the technical requirements.
        </p>
        <div className="pt-2">
          <a
            href={faqWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp-cta"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
          >
            <MessageCircle className="h-4.5 w-4.5 fill-slate-950" />
            <span>Ask Us Anything on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
