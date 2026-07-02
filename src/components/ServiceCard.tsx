/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ServiceItem } from '../types';
import { getWhatsAppLink } from '../data';
import { Cpu, TrendingUp, Zap, BarChart3, Code, RefreshCw, ShieldAlert, Lock, CheckCircle } from 'lucide-react';

// Static icon map for safe ESM resolution
const ICON_MAP = {
  Cpu,
  TrendingUp,
  Zap,
  BarChart3,
  Code,
  RefreshCw,
  ShieldAlert,
  Lock
};

interface ServiceCardProps {
  key?: React.Key;
  service: ServiceItem;
  onSelect?: () => void;
  isDetailedView?: boolean;
}

export default function ServiceCard({ service, onSelect, isDetailedView = false }: ServiceCardProps) {
  // Safe icon lookup
  const SelectedIcon = ICON_MAP[service.iconName as keyof typeof ICON_MAP] || Cpu;
  
  const whatsappMsg = `Hello! I am interested in your "${service.title}" service (Target Keyword: ${service.targetKeyword}). I would like to schedule a session or get a quote.`;
  const whatsappUrl = getWhatsAppLink(whatsappMsg);

  if (isDetailedView) {
    return (
      <div 
        id={`service-detail-block-${service.id}`}
        className="bg-slate-950 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-emerald-500/20 transition-all duration-300 shadow-xl"
      >
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700 pb-5">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <SelectedIcon className="h-7 w-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold block mb-0.5">
                MT5 & MQL5 Certified Solution
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">{service.title}</h3>
            </div>
          </div>
          
          {/* SEO keyword badge (small, technical) */}
          <div className="text-left sm:text-right">
            <span className="text-[10px] font-mono text-slate-500 block">SEO Tagging Indicator</span>
            <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2.5 py-0.5 rounded border border-slate-700">
              {service.targetKeyword}
            </span>
          </div>
        </div>

        {/* Text descriptions */}
        <div className="space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">{service.longDesc}</p>
          <p className="text-slate-400 text-xs leading-relaxed italic bg-slate-900/40 p-3.5 rounded-lg border border-slate-700">
            {service.details}
          </p>
        </div>

        {/* Dual Grid - Benefits & Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Benefits */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">Key Benefits</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {service.benefits.map((benefit, bidx) => (
                <li key={bidx} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">Common Implementations</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {service.useCases.map((uc, uidx) => (
                <li key={uidx} className="flex items-start gap-2">
                  <span className="font-mono text-emerald-500 font-bold shrink-0">[{uidx + 1}]</span>
                  <span>{uc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action WhatsApp CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-700">
          <p className="text-[11px] font-mono text-slate-500">
            * 3-Year Bug-Free Guarantee & Complete commented MQL5 code included.
          </p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`service-cta-whatsapp-${service.id}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs whitespace-nowrap transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95 cursor-pointer"
          >
            <SelectedIcon className="h-4 w-4 fill-slate-950" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  // Summary Card (For Home page overview)
  return (
    <div 
      id={`service-summary-card-${service.id}`}
      className="bg-slate-950 border border-slate-700 hover:border-emerald-500/25 rounded-xl p-5.5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/[0.01] group hover:-translate-y-0.5"
    >
      <div className="space-y-3.5">
        <div className="h-11 w-11 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
          <SelectedIcon className="h-5 w-5" />
        </div>
        
        <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
          {service.shortDesc}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-700 mt-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-[10px] text-slate-500 truncate max-w-[140px]">{service.targetKeyword}</span>
        
        <button
          onClick={onSelect}
          id={`service-learn-more-${service.id}`}
          className="text-emerald-400 font-semibold flex items-center gap-0.5 hover:underline cursor-pointer bg-transparent border-none p-0 outline-none"
        >
          <span>Learn More</span>
          <span className="text-[10px] transition-transform group-hover:translate-x-0.5 inline-block">→</span>
        </button>
      </div>
    </div>
  );
}
