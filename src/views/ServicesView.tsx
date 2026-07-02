/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SERVICES_DATA } from '../data';
import ServiceCard from '../components/ServiceCard';
import { ArrowDown, Cpu, TrendingUp, Zap, BarChart3, Code, RefreshCw, ShieldAlert, Lock, HelpCircle } from 'lucide-react';

export default function ServicesView() {
  
  const handleScrollToService = (id: string) => {
    const el = document.getElementById(`service-detail-block-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* Services Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Comprehensive MQL5 Solutions</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          Our Algorithmic Trading Services
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          We engineer highly optimized, bug-free software exclusively for MetaTrader 5 (MT5). 
          Explore our eight core capabilities below to see how we can bring your strategy to life.
        </p>
      </div>

      {/* Internal Navigation Links / Quick Index */}
      <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-5 max-w-5xl mx-auto space-y-3.5">
        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 text-center">
          Quick Navigation Index (Internal Links)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => handleScrollToService(service.id)}
              id={`quick-link-${service.id}`}
              className="px-2.5 py-2 text-[11px] font-medium font-mono border border-slate-800 bg-slate-950 text-slate-300 rounded-lg hover:border-emerald-500/40 hover:text-emerald-400 transition-all text-center flex items-center justify-center gap-1 cursor-pointer active:scale-95"
            >
              <span>{service.title.split(' ')[0]} {service.title.split(' ')[1] || ''}</span>
              <ArrowDown className="h-2.5 w-2.5 text-emerald-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Services Stack */}
      <div className="max-w-5xl mx-auto space-y-10">
        {SERVICES_DATA.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isDetailedView={true}
          />
        ))}
      </div>

      {/* Bottom FAQ Anchor CTA */}
      <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 text-center max-w-4xl mx-auto space-y-3">
        <HelpCircle className="h-6 w-6 text-emerald-400 mx-auto" />
        <h4 className="font-bold text-slate-200 text-sm">Have Questions About Cost, Licensing, or Timelines?</h4>
        <p className="text-xs text-slate-400 max-w-lg mx-auto">
          We hand over full MQL5 source files (.mq5), support bug fixes for 3 years, and strictly respect intellectual property confidentiality.
        </p>
      </div>

    </div>
  );
}
