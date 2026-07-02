/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { getWhatsAppLink } from '../data';
import { MessageCircle, Shield, Clock, Calendar, CheckCircle } from 'lucide-react';

export default function ContactView() {
  
  const contactPageUrl = getWhatsAppLink(
    "Hello! I am viewing your Contact page. I would like to get a quote/consultation for my MT5 algorithm project."
  );

  return (
    <div className="space-y-12 pb-16 font-sans">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Initiate Project</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          Let's Start Your MQL5 System
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          We operate exclusively through WhatsApp to guarantee zero email clutter, direct developer-to-client chats, and maximum speed.
        </p>
      </div>

      {/* Greeting Card Container */}
      <div className="max-w-xl mx-auto bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden p-8 text-center space-y-8 shadow-2xl relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/[0.02] rounded-full blur-2xl"></div>

        {/* Highlight badge */}
        <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3.5 py-1 rounded-full text-xs font-mono font-medium mx-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          Operator Online Now
        </div>

        {/* Card Main Header */}
        <div className="space-y-3">
          <MessageCircle className="h-10 w-10 text-emerald-400 mx-auto fill-emerald-500/10" />
          <h2 className="text-2xl font-bold text-slate-100">WhatsApp Dispatch Desk</h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
            Click the primary trigger button below to open a encrypted direct-chat with our chief programmer. 
            No subscription fees, no automated bots — just real technical answers.
          </p>
        </div>

        {/* LARGE CTA BUTTON */}
        <div className="pt-2">
          <a
            href={contactPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-large-whatsapp-cta"
            className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-5 rounded-2xl text-base transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/35 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="h-6 w-6 fill-slate-950" />
            <span className="tracking-wide">Launch WhatsApp Chat Now</span>
          </a>
        </div>

        {/* Trust Indicators / SLA Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border-t border-slate-900 pt-6">
          <div className="space-y-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-400" />
              <span><strong>Response SLA:</strong> Under 2 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-emerald-400" />
              <span><strong>Availability:</strong> 24/5 Monday-Friday</span>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span><strong>Confidentiality:</strong> NDA on request</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span><strong>Consultation:</strong> 100% Free review</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
