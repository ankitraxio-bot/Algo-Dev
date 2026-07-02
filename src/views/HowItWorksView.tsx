/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HOW_IT_WORKS_STEPS, getWhatsAppLink } from '../data';
import { FileText, DollarSign, Binary, HeartHandshake, MessageCircle, HelpCircle } from 'lucide-react';

const STEP_ICONS = [
  FileText,
  DollarSign,
  Binary,
  HeartHandshake
];

export default function HowItWorksView() {
  
  const stepWhatsappUrl = getWhatsAppLink(
    "Hello! I saw your 'How It Works' workflow and would like to submit my strategy rules sheet for a free quote."
  );

  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* Page header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">The Algorithmic Workflow</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          How It Works: Our 4-Step Process
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          From a simple napkin-sketch idea or written checklist to a fully backtested, multi-threaded Expert Advisor trading live on VPS servers.
        </p>
      </div>

      {/* Visual Roadmap Steps */}
      <div className="max-w-4xl mx-auto relative px-4">
        
        {/* Draw a connecting vertical line (desktop only) */}
        <div className="hidden md:block absolute left-[55px] top-[40px] bottom-[40px] w-0.5 bg-slate-900 border-l border-dashed border-slate-800"></div>

        <div className="space-y-12 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || FileText;
            
            return (
              <div 
                key={step.step}
                id={`how-it-works-step-${step.step}`}
                className="flex flex-col md:flex-row gap-6 relative"
              >
                {/* Numeric Indicator */}
                <div className="flex md:flex-col items-center justify-start md:justify-center shrink-0 gap-4 md:gap-0">
                  <div className="h-14 w-14 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center font-mono text-emerald-400 font-extrabold text-lg shadow-xl shadow-emerald-500/5 relative z-10">
                    {step.step}
                  </div>
                  {/* Small icon underneath number for desktops */}
                  <div className="hidden md:flex h-8 w-8 items-center justify-center rounded bg-slate-900 border border-slate-800 text-slate-500 mt-3">
                    <Icon className="h-4.5 w-4.5 text-slate-400" />
                  </div>
                </div>

                {/* Text Block Content */}
                <div className="flex-1 bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-7 space-y-3.5 hover:border-emerald-500/10 transition-all">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block">
                    Milestone Stage
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Dynamic help sub-texts per step */}
                  {idx === 0 && (
                    <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-900 text-xs text-slate-400">
                      <strong>Don't have a template?</strong> Simply outline: (1) Entry triggers, (2) Exit rules/Targets, (3) Risk allocation, and (4) Filter limits (e.g. trading sessions).
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-900 text-xs text-slate-400">
                      <strong>No Risk:</strong> If we find logical contradictions in your rules, we discuss them first. Our fixed quotes are valid for 30 days.
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-900 text-xs text-slate-400">
                      <strong>Iterative review:</strong> We deliver progress updates. You get to review optimization reports and simulation runs in real time.
                    </div>
                  )}
                  {idx === 3 && (
                    <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-900 text-xs text-slate-400">
                      <strong>Support Included:</strong> Up to 3 years of free bug fixes. We help you configure the EA on your MetaTrader 5 VPS terminal.
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom CTA to WhatsApp */}
      <div className="bg-slate-900/40 border border-emerald-500/15 rounded-2xl p-8 text-center max-w-3xl mx-auto space-y-5">
        <h3 className="text-xl font-bold text-slate-100">Ready to Submit Your Strategy Draft?</h3>
        <p className="text-xs text-slate-400 max-w-lg mx-auto">
          We treat your rules with absolute security. Start a direct discussion on WhatsApp and we will guide you through the details.
        </p>
        <div className="pt-2">
          <a
            href={stepWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="how-it-works-whatsapp-cta"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
          >
            <MessageCircle className="h-4.5 w-4.5 fill-slate-950" />
            <span>Submit Strategy on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
