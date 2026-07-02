/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { getWhatsAppLink } from '../data';
import { MessageCircle, Shield, FileText, AlertTriangle, BookOpen } from 'lucide-react';

export default function LegalView() {
  
  const legalWhatsappUrl = getWhatsAppLink(
    "Hello! I am reading the Legal & Terms page. I would like to review or request a mutual NDA document before sharing my strategy."
  );

  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Regulatory & Terms</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
          Terms, IP Ownership & Privacy
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Read our formal policies regarding software code ownership, client data confidentiality, and trading risk exposures.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* 1. Risk Disclaimer */}
        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-slate-900 pb-4 text-red-400 font-mono">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h2 className="text-lg font-bold uppercase tracking-wider">Forex & Margin Trading Risk Disclaimer</h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-400 leading-relaxed space-y-3">
            <p>
              Trading foreign exchange (Forex), commodities, indices, cryptos, and financial assets on margin carries an extremely high level of risk and may not be suitable for all traders or investors. 
              The application of leverage can work heavily against your account balance as well as in your favor. 
              Before deploying any Expert Advisor (EA), indicator, manual strategy, or script built by our service onto a live trading terminal, you must carefully evaluate your investment experience, risk thresholds, and capital limits.
            </p>
            <p>
              The possibility exists that you could sustain a partial or total loss of your deposit. 
              Therefore, you should never trade, invest, or allocate funds that you cannot afford to lose. 
              We are a software development agency. We design and compile software based strictly on your parameters. 
              We do not act as licensed financial advisors, portfolio managers, broker representatives, or CTA operators. Past performance metrics, strategy tester backtests, or demo statistics are not guarantees of future performance.
            </p>
          </div>
        </div>

        {/* 2. Intellectual Property */}
        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-slate-900 pb-4 text-emerald-400 font-mono">
            <Shield className="h-6 w-6" />
            <h2 className="text-lg font-bold uppercase tracking-wider">Intellectual Property & MQL5 Source Code Ownership</h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-400 leading-relaxed space-y-3">
            <p>
              We firmly believe that your trading strategy and intellectual formulas belong 100% to you. 
              Upon final balance milestone payment, we officially transfer all exclusive proprietary and intellectual property (IP) rights of the commissioned code to you.
            </p>
            <p>
              This means:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>You receive both the compiled binary file (.ex5) and the fully commented, raw MQL5 source code file (.mq5).</li>
              <li>There are absolutely no background licensing keys, server locks, or rental expirations hardcoded into your delivery, unless you explicitly requested them as part of custom commercial copy-protection requirements.</li>
              <li>You are free to run, modify, redistribute, rent, or sell your compiled Expert Advisor or indicator forever with zero royalties owed to us.</li>
              <li>We will never trade, copy, utilize, or publish your strategy variables or logic rules on our own accounts or share them with third parties.</li>
            </ul>
          </div>
        </div>

        {/* 3. Privacy Policy */}
        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-slate-900 pb-4 text-emerald-400 font-mono">
            <FileText className="h-6 w-6" />
            <h2 className="text-lg font-bold uppercase tracking-wider">Privacy & Non-Disclosure (NDA) Policies</h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-400 leading-relaxed space-y-3">
            <p>
              Confidentiality is critical to maintaining a trading edge. 
              Any conversation, written PDF specification, TradingView chart link, or manual rules sheets shared with us remains strictly private.
            </p>
            <p>
              Before sharing sensitive algorithms or rules sheets, you are welcome to request our standard mutual Non-Disclosure Agreement (NDA) or submit your own. 
              We sign all NDAs prior to any technical disclosure. 
              We utilize encrypted communication channels to ensure your strategies and file transfers are safeguarded against security leaks.
            </p>
          </div>
        </div>

        {/* 4. Terms of Service */}
        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-slate-900 pb-4 text-emerald-400 font-mono">
            <BookOpen className="h-6 w-6" />
            <h2 className="text-lg font-bold uppercase tracking-wider">Software Milestones & Support Guarantees</h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-400 leading-relaxed space-y-3">
            <p>
              All software development works are executed under structured milestones: (1) Strategy analysis and logical flow mapping, (2) Core coding and local testing, (3) Demo presentation (video or backtest report), (4) Compiling and delivery of final source files upon completion.
            </p>
            <p>
              We provide a 3-Year Bug-Free Guarantee. 
              A coding bug is defined as any logical failure of the EA or indicator to execute strictly according to your written specification. 
              Bugs are patched within 48-72 hours free of charge. 
              Please note that new feature requests, modifications of the original strategy rules, or compatibility updates caused by future unannounced broker-specific terminal restrictions are not covered under the free bug-free guarantee and will be quoted as new upgrade work.
            </p>
          </div>
        </div>

      </div>

      {/* NDA Banner */}
      <div className="bg-slate-900/40 border border-emerald-500/15 rounded-2xl p-8 text-center max-w-3xl mx-auto space-y-5">
        <h3 className="text-xl font-bold text-slate-100">Ready to Review or Request a Mutual NDA?</h3>
        <p className="text-xs text-slate-400 max-w-lg mx-auto">
          Protect your proprietary equations. Send us a message on WhatsApp and we will dispatch a digital signature link for our NDA immediately.
        </p>
        <div className="pt-2">
          <a
            href={legalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="legal-whatsapp-cta"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
          >
            <MessageCircle className="h-4.5 w-4.5 fill-slate-950" />
            <span>Request NDA on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
