/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { Cpu, MessageCircle, ArrowUpRight, ShieldCheck, FileText } from 'lucide-react';
import { getWhatsAppLink } from '../data';

interface FooterProps {
  onPageChange: (page: PageId) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: PageId) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = "Hello! I am reading the footer on your website and would like to start a project.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <footer className="bg-slate-950 border-t border-slate-900 font-sans text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-slate-900 pb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <Cpu className="h-4.5 w-4.5 text-emerald-400" />
              </div>
              <span className="font-mono text-sm font-bold tracking-wider text-emerald-400">MQL5.DEVELOPER</span>
            </div>
            <p className="text-sm max-w-md text-slate-400 leading-relaxed">
              Premium algorithmic trading development, scripting, and optimization services. 
              We turn profitable manual trading strategies into secure, ultra-fast, and bug-free MetaTrader 5 Expert Advisors (EAs).
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> NDA Guaranteed
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-3.5 w-3.5 text-emerald-400" /> 100% IP Ownership
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-200">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'services', label: 'Our Services' },
                { id: 'how-it-works', label: 'How It Works' },
                { id: 'faq', label: 'FAQ & Support' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id as PageId)}
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all text-emerald-500" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & IP Column */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-200">Legal & Action</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('legal')}
                  className="hover:text-emerald-400 transition-colors text-left font-medium"
                >
                  Intellectual Property & Terms
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('legal')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  About Our Lab
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-emerald-400 font-bold px-4 py-2.5 rounded-lg text-xs transition-all tracking-wide"
              >
                <MessageCircle className="h-4.5 w-4.5 fill-emerald-400" />
                <span>Start Project on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Intellectual Property Transfer Clause */}
        <div className="mt-8 bg-slate-900/40 border border-slate-900 rounded-xl p-5 text-xs text-slate-500 space-y-2">
          <p className="font-semibold text-slate-400 uppercase tracking-wider font-mono">Intellectual Property & Code Ownership Clause:</p>
          <p className="leading-relaxed">
            All code commissioned and fully paid for under our service, including Expert Advisors (.mq5/.ex5), Indicators, and Scripts, 
            is the 100% exclusive intellectual property of the purchasing client. We transfer all rights immediately upon final milestone completion. 
            We do not lock files, embed hidden licensing keys, or restrict distribution unless explicitly requested as part of custom copy-protection systems. 
            Your trading algorithms and visual configurations remain strictly confidential under NDA guidelines.
          </p>
        </div>

        {/* Financial Risk & Trading Disclaimer */}
        <div className="mt-6 border-t border-slate-900 pt-8 text-xs text-slate-500 space-y-4">
          <p className="leading-relaxed">
            <strong className="text-red-500 font-mono">HIGH-RISK WARNING:</strong> Trading foreign exchange, indices, commodities, and digital assets on margin carries a high level of risk and may not be suitable for all investors. 
            The high degree of leverage can work against you as well as for you. Before deciding to trade or run automated trading algorithms, you should carefully consider your investment objectives, level of experience, and risk appetite. 
            The possibility exists that you could sustain a loss of some or all of your initial investment, and therefore, you should not invest money that you cannot afford to lose.
          </p>
          <p className="leading-relaxed">
            <strong className="text-slate-400 font-mono">NO FINANCIAL ADVICE:</strong> We are a software development lab. We specialize in custom MQL5/MetaTrader 5 programming services. 
            We do not offer financial advice, signal-selling services, or asset management. Any backtests, indicators, or automated bots shown are for technical demonstration and educational purposes only. 
            Past performance of any system is not indicative of future results. Clients assume full operational and financial liability when deploying custom programmed software on live trading accounts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900/60 font-mono text-[11px] text-slate-600">
            <p>© {currentYear} MQL5.DEVELOPER. All rights reserved. Built exclusively for MetaTrader 5 (MT5).</p>
            <p>Targeting Forex, Prop Firms, and Quantitative Trading Desks.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
