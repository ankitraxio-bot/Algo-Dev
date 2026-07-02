/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { getWhatsAppLink } from '../data';
import { ShieldCheck, Award, MessageCircle, Server, FileCode, CheckCircle2 } from 'lucide-react';

export default function AboutView() {
  
  const aboutWhatsappUrl = getWhatsAppLink(
    "Hello! I read your 'About Us' section. I would like to schedule a strategy call or discuss my EA coding needs."
  );

  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Behind The Code</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          About Algorithmic Trading Labs
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Who we are, what we stand for, and why serious traders choose us to program their proprietary trading systems.
        </p>
      </div>

      {/* Grid Layout (Credibility column) */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left column (About text) */}
        <div className="md:col-span-7 space-y-5">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold block">
            Our Mission & Background
          </span>
          <h2 className="text-2xl font-bold text-slate-100 font-sans">
            Bridging Manual Intuition with High-Speed Execution
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Founded by a senior quantitative programmer and an experienced financial markets trader, our development lab specializes exclusively in the 
            MetaTrader 5 (MQL5) API ecosystem. Over the past 8+ years, we have designed, optimized, and deployed over 450+ bespoke trading utilities, EAs, 
            and customized charting overlays.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            We do not believe in standard templates or cookie-cutter solutions. We know that every successful trading strategy is unique, relying on precise, 
            calculated nuances. That is why our core strategy centers on bespoke, handcrafted code blocks that are fully optimized for speed, low-latency, and multi-threaded calculations.
          </p>

          <div className="space-y-3 pt-2">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">Our Core Directives:</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span><strong>No Repainting:</strong> Indicators strictly paint on open/closed bars. No exceptions.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span><strong>Slippage Shielding:</strong> Order routing uses asynchronous requests with strict slippage bounds.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span><strong>Clean Code:</strong> Well-documented .mq5 files with zero background licensing limits.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column (Experience badges box) */}
        <div className="md:col-span-5 bg-slate-950 border border-slate-900 rounded-2xl p-6.5 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/[0.02] rounded-full blur-2xl"></div>
          
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-300 border-b border-slate-900 pb-3">
            Core Lab Credentials
          </h3>
          
          <div className="space-y-4">
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-xs">MQL5 Certified Developer</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">8+ Years of pure algorithmic programming in the MT5 API terminal.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Server className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-xs">Low-Latency Infrastructure</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Expertise in VPS configurations, WebSocket bridges, and asynchronous orders execution.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <FileCode className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-xs">100% Secure licensing engines</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Custom account locking, remote verification codes, and secure obfuscation routines.</p>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-slate-900">
            <a
              href={aboutWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="about-card-whatsapp-cta"
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl text-xs transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
            >
              <MessageCircle className="h-4.5 w-4.5 fill-slate-950" />
              <span>Discuss With Programmer</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
