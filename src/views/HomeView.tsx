/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { SERVICES_DATA, WHY_CHOOSE_US_ITEMS, TESTIMONIALS_DATA, getWhatsAppLink } from '../data';
import ServiceCard from '../components/ServiceCard';
import AnimatedCounter from '../components/AnimatedCounter';
import StrategyEstimator from '../components/StrategyEstimator';
import { 
  MessageCircle, ShieldCheck, Award, Zap, Star, Code, ArrowRight,
  TrendingUp, Users, Terminal, CheckCircle2, FileCode, EyeOff, HeartHandshake
} from 'lucide-react';

// Static icon map for safe ESM resolution on Why Choose Us
const WHY_ICON_MAP = {
  Award,
  FileCode,
  EyeOff,
  Shield: ShieldCheck,
  Zap,
  HeartHandshake
};

interface HomeViewProps {
  onPageChange: (page: PageId) => void;
}

export default function HomeView({ onPageChange }: HomeViewProps) {
  
  const heroWhatsappUrl = getWhatsAppLink(
    "Hello! I saw your hero section and would like to hire an MQL5 programmer to automate my trading strategy."
  );

  const getConsultationUrl = getWhatsAppLink(
    "Hello! I would like to set up a free strategy consultation for MetaTrader 5."
  );

  return (
    <div className="space-y-20 pb-16 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-900 bg-radial-[circle_at_top] from-emerald-950/10 via-slate-950 to-slate-950" id="home-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Verification Tag */}
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              99.9% Latency-Optimized MQL5 & MT5 Development
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 font-sans leading-tight">
              Professional <span className="text-emerald-400">MQL5 & MT5</span> Algo Development. No Bugs, No Strategy Leaks.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Turn your manual trading rules, indicator combinations, or TradingView scripts into high-performance <strong className="text-slate-200">Expert Advisors (EAs)</strong>. Engineered for retail prop-firm evaluations, high-frequency execution, and absolute strategy privacy.
            </p>

            {/* Core Badges in Hero */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg font-mono text-[11px] text-slate-400">
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-2.5 flex flex-col justify-center shadow-md">
                <span className="text-emerald-400 font-extrabold block text-sm sm:text-base">NDA-BACKED</span>
                <span>100% IP Protection</span>
              </div>
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-2.5 flex flex-col justify-center shadow-md">
                <span className="text-emerald-400 font-extrabold block text-sm sm:text-base">3-YEAR</span>
                <span>Bug-Free Guarantee</span>
              </div>
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-2.5 flex flex-col justify-center shadow-md">
                <span className="text-emerald-400 font-extrabold block text-sm sm:text-base">FULL SOURCE</span>
                <span>Unencrypted .MQ5 File</span>
              </div>
            </div>

            {/* Direct WhatsApp Call to Actions with High-Converting Trust Elements */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <div className="flex flex-col gap-1.5">
                <a
                  href={heroWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-primary-cta"
                  className="flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-xl text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="h-5 w-5 fill-slate-950 animate-bounce" />
                  <span>Claim Free Strategy Consultation</span>
                </a>
                <span className="text-[10px] text-slate-500 font-mono text-center sm:text-left flex items-center justify-center sm:justify-start gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                  Avg. response: Under 10 mins • Standard NDA Applied
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => {
                    const el = document.getElementById('home-blueprint-estimator');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  id="hero-secondary-cta"
                  className="flex items-center justify-center gap-1.5 bg-slate-900 border border-slate-700 hover:border-slate-500 hover:bg-slate-800/60 text-slate-300 font-bold px-6 py-4 rounded-xl text-sm transition-all cursor-pointer h-full"
                >
                  <span>Design Strategy Brief</span>
                  <ArrowRight className="h-4 w-4 text-emerald-400" />
                </button>
                <span className="text-[10px] text-slate-500 font-mono text-center sm:text-left">
                  Estimate complexity & get specs
                </span>
              </div>
            </div>

            {/* Client feedback summary */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-700 max-w-md">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-400">
                Rated <strong className="text-slate-200">4.9/5 stars</strong> by 140+ forex, futures & prop-firm traders globally.
              </p>
            </div>

          </div>

          {/* Hero Right Code Visualizer */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Glass terminal card mockup */}
            <div className="bg-[#0b0f19] border border-[#1e293b] rounded-2xl p-5 shadow-2xl relative overflow-hidden font-mono text-[11px] text-slate-300 space-y-3 max-w-lg mx-auto">
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-[#1e293b] pb-3 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider ml-2">Expert_Advisor.mq5</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">MQL5</span>
              </div>
              
              {/* Fake Code structure */}
              <div className="space-y-1 select-all">
                <p className="text-slate-500">//+------------------------------------------------------------------+</p>
                <p className="text-slate-500">//|                                             Quantum_EA.mq5       |</p>
                <p className="text-slate-500">//+------------------------------------------------------------------+</p>
                <p className="text-indigo-400">#property <span className="text-slate-300">copyright "MQL5.DEVELOPER"</span></p>
                <p className="text-indigo-400">#property <span className="text-slate-300">strict</span></p>
                <p className="text-indigo-400">#include <span className="text-amber-400">&lt;Trade\Trade.mqh&gt;</span></p>
                
                <p className="pt-2 text-slate-500">//--- Inputs for optimization</p>
                <p className="text-emerald-400"><span className="text-indigo-400">input group</span> "--- Risk Controls ---"</p>
                <p className="text-emerald-400"><span className="text-indigo-400">input double</span> MaxDrawdownLimit = <span className="text-amber-400">5.0</span>; <span className="text-slate-500">// Max Daily DD (%)</span></p>
                <p className="text-emerald-400"><span className="text-indigo-400">input double</span> FixedRiskPercentage = <span className="text-amber-400">1.0</span>; <span className="text-slate-500">// Risk per trade (%)</span></p>

                <p className="pt-2 text-indigo-400">void <span className="text-amber-400">OnTick</span>()</p>
                <p className="text-slate-300">{'  {'}</p>
                <p className="text-slate-300">{'    '}<span className="text-indigo-400">if</span>(<span className="text-emerald-400">IsSpreadTooHigh</span>() || <span className="text-emerald-400">IsNewsEvent</span>()) <span className="text-indigo-400">return</span>;</p>
                <p className="text-slate-300">{'    '}<span className="text-emerald-400">EvaluateBreakoutGrid</span>();</p>
                <p className="text-slate-300">{'  }'}</p>
              </div>

              {/* Status footer */}
              <div className="pt-3 border-t border-[#1e293b] mt-4 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1"><Terminal className="h-3.5 w-3.5 text-slate-500" /> Compiled OK</span>
                <span className="text-slate-500">Lines: 1420 | Size: 18.2KB</span>
              </div>
            </div>
            
            {/* Absolute element overlays */}
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>

        </div>
      </section>

      {/* COMPATIBILITY LOGO BAR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 relative z-20" id="home-compatibility-banner">
        <div className="bg-slate-950/90 border border-slate-800 rounded-xl py-4.5 px-6 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Tested & 100% Compliant with
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
              {[
                { name: "FTMO Evaluation", rule: "Drawdown Guard" },
                { name: "FundedNext", rule: "News Filter Safe" },
                { name: "IC Markets", rule: "Raw Spreads / Low Latency" },
                { name: "Pepperstone", rule: "Microsecond Execution" },
                { name: "OANDA API", rule: "REST/WebSocket Sync" },
                { name: "CME Futures", rule: "NinjaScript Compliant" }
              ].map((brand, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-md hover:border-slate-700 transition-colors">
                  <span className="text-[11px] font-bold text-slate-200 font-sans">{brand.name}</span>
                  <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded">{brand.rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & TRUST BADGES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="home-trust-badges">
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700">
            
            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono tracking-tight text-emerald-400">
                <AnimatedCounter target={400} suffix="+" />
              </span>
              <span className="block text-xs uppercase tracking-widest text-slate-500 mt-2 font-mono font-bold">Projects Delivered</span>
            </div>
            
            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono tracking-tight text-emerald-400">
                <AnimatedCounter target={8} suffix="+" />
              </span>
              <span className="block text-xs uppercase tracking-widest text-slate-500 mt-2 font-mono font-bold">Years of Experience</span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono tracking-tight text-emerald-400">
                <AnimatedCounter target={99} suffix="%" />
              </span>
              <span className="block text-xs uppercase tracking-widest text-slate-500 mt-2 font-mono font-bold">Accuracy Rating</span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono tracking-tight text-emerald-400">
                <AnimatedCounter target={2} suffix=" Year" />
              </span>
              <span className="block text-xs uppercase tracking-widest text-slate-500 mt-2 font-mono font-bold">Dedicated Support</span>
            </div>

          </div>
        </div>
      </section>


      {/* NEW: CODICARYA-INSPIRED CROSS-PLATFORM COMPATIBILITY SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10" id="home-cross-platform">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Cross-Platform Engineering</span>
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Supported Platforms & Code Migration
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Inspired by elite algorithmic labs, we build natively across the industry's leading financial runtime environments. We specialize in flawlessly converting, bridging, and upgrading models between modern platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* MT5 */}
          <div className="bg-slate-900 border border-slate-700 hover:border-emerald-500/20 transition-all rounded-2xl p-6 px-6.5 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-bold">MQL5 / C++</span>
              <span className="text-xs font-mono text-slate-500">Tier-1 Priority</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors text-left">MetaTrader 5 (MT5)</h3>
              <p className="text-xs text-slate-400 leading-relaxed text-left">
                Our flagship execution environment. Native support for multi-currency backtesting, real broker ticks, ultra-low latency execution, and market depth (DOM) indicators.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">Expert Advisors</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">Custom Indicators</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">DLL Bridges</span>
            </div>
          </div>

          {/* TradingView */}
          <div className="bg-slate-900 border border-slate-700 hover:border-emerald-500/20 transition-all rounded-2xl p-6 px-6.5 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2 py-0.5 rounded font-bold">Pine Script v5</span>
              <span className="text-xs font-mono text-slate-500">Visualization</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-400 transition-colors text-left">TradingView Charting</h3>
              <p className="text-xs text-slate-400 leading-relaxed text-left">
                Advanced indicators, multi-timeframe overlays, and technical checklists. We program Pine Script strategies and establish automatic JSON webhook routing from TradingView to MT5 terminals.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">Pine Strategies</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">Webhook Bridges</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">Alert Systems</span>
            </div>
          </div>

          {/* MT4 */}
          <div className="bg-slate-900 border border-slate-700 hover:border-emerald-500/20 transition-all rounded-2xl p-6 px-6.5 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-bold">MQL4 / C++</span>
              <span className="text-xs font-mono text-slate-500">Legacy Systems</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors text-left">MetaTrader 4 (MT4)</h3>
              <p className="text-xs text-slate-400 leading-relaxed text-left">
                Legacy support for custom bots and indicators. We specialize in refactoring old MQL4 files, fixing outdated compiler warnings, and migrating legacy codebases flawlessly to MT5.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">Legacy Ports</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">EA Re-coding</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">MT4/MT5 Sync</span>
            </div>
          </div>

          {/* NinjaTrader */}
          <div className="bg-slate-900 border border-slate-700 hover:border-emerald-500/20 transition-all rounded-2xl p-6 px-6.5 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded font-bold">NinjaScript / C#</span>
              <span className="text-xs font-mono text-slate-500">Futures & Equities</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-red-400 transition-colors text-left">NinjaTrader 8</h3>
              <p className="text-xs text-slate-400 leading-relaxed text-left">
                Engineered for CME futures and institutional equities. We code custom automated strategies using standard NinjaScript (C#) integrated with market flow data and order queues.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">NinjaScript Bots</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">C# Indicators</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">Order Flow</span>
            </div>
          </div>

          {/* Python */}
          <div className="bg-slate-900 border border-slate-700 hover:border-emerald-500/20 transition-all rounded-2xl p-6 px-6.5 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2 py-0.5 rounded font-bold">Python / APIs</span>
              <span className="text-xs font-mono text-slate-500">Data & Quant</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-yellow-400 transition-colors text-left">Python Algorithmic Labs</h3>
              <p className="text-xs text-slate-400 leading-relaxed text-left">
                Connect your analytical math, machine learning classifiers, or neural signals to MT5 broker terminals via high-speed local Python sockets or the native MetaTrader5 library.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">Data Analytics</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">Machine Learning</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">Socket Bridges</span>
            </div>
          </div>

          {/* cTrader */}
          <div className="bg-slate-900 border border-slate-700 hover:border-emerald-500/20 transition-all rounded-2xl p-6 px-6.5 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded font-bold">cAlgo / C#</span>
              <span className="text-xs font-mono text-slate-500">Alternative FX</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-purple-400 transition-colors text-left">cTrader Solutions</h3>
              <p className="text-xs text-slate-400 leading-relaxed text-left">
                Custom cBots and indicator setups using cTrader's modern C# environment. Ideal for traders requiring execution logs, premium modern APIs, and clean FIX connectivity.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">cBots Development</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">Spotware APIs</span>
              <span className="text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded">FIX Protocol</span>
            </div>
          </div>
        </div>
        
        {/* Visual conversion flow box */}
        <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-left">
            <span className="text-emerald-400 font-mono text-xs font-semibold block uppercase">Algorithm Migration Service</span>
            <h4 className="text-xl font-bold text-slate-200">Need to port your strategy to a different platform?</h4>
            <p className="text-xs text-slate-400 max-w-xl">
              We translate rules, logic structures, and indicator formulas from one programming language to another (e.g., Pine Script to MQL5) with 100% mathematical parity. Both backtests are audited side-by-side.
            </p>
          </div>
          <button
            onClick={() => {
              onPageChange('services');
              setTimeout(() => {
                const el = document.getElementById(`service-detail-block-conversion-services`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
            className="shrink-0 flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 border border-slate-800 font-bold px-5 py-3 rounded-xl text-xs transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Explore Code Conversion</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* 3. TRADER SECURITY & RISK MITIGATION PILLARS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8" id="home-security-pillars">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Your Security is Our Priority</span>
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Overcoming the 3 Biggest Risks of Hiring an Algo Programmer
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The algorithmic market is flooded with low-tier freelance coders who deliver buggy systems, leak proprietary files, or disappear after payment. We set a new industry benchmark for trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: IP Protection */}
          <div className="bg-slate-900 border border-slate-700 p-6 sm:p-8 rounded-2xl space-y-5 text-left flex flex-col justify-between shadow-xl hover:border-slate-500 transition-all duration-350">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold block">Risk 01: Strategy Leaks</span>
                <h3 className="font-extrabold text-slate-100 text-lg">100% Guaranteed IP Protection</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We sign a legally binding Mutual Non-Disclosure Agreement (NDA) before you outline your entry indicators or entry logic. Your files are compiled on local sandboxed environments and never distributed, uploaded, or discussed.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Standard NDA Applied Instantly
            </div>
          </div>

          {/* Pillar 2: Live Execution Protection */}
          <div className="bg-slate-900 border border-slate-700 p-6 sm:p-8 rounded-2xl space-y-5 text-left flex flex-col justify-between shadow-xl hover:border-slate-500 transition-all duration-355">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Terminal className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold block">Risk 02: Broken Live Code</span>
                <h3 className="font-extrabold text-slate-100 text-lg">3-Year Bulletproof Guarantee</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Never worry about terminal crashes or order flow freezes during massive market volatility. Every EA we construct is stress-tested on 99.9% real-tick feeds and includes active slippage recovery and dynamic spread controls.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              36 Months Support & Bug Fixes
            </div>
          </div>

          {/* Pillar 3: Raw Code Access */}
          <div className="bg-slate-900 border border-slate-700 p-6 sm:p-8 rounded-2xl space-y-5 text-left flex flex-col justify-between shadow-xl hover:border-slate-500 transition-all duration-360">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Code className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold block">Risk 03: Lock-In Keys</span>
                <h3 className="font-extrabold text-slate-100 text-lg">Unencrypted Source Code</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                You receive the raw, complete, and perfectly structured Object-Oriented C++ (`.mq5`) or C# files. No licensing locks, no server expiration constraints, and no compiler blockers. You own 100% of the finished IP.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Full Ownership & Custom Modifications
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE BLUEPRINT BUILDER & ESTIMATOR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="home-blueprint-estimator">
        <StrategyEstimator />
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10" id="home-services">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-900 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">What We Do</span>
            <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
              Professional Algo Services
            </h2>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              We specialize exclusively in MetaTrader 5 (MT5). We program fully compliant, modular, and blazing-fast algorithmic solutions.
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                onPageChange('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              id="services-overview-btn"
              className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group"
            >
              <span>View all detailed services</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Services Grid (6 highlights shown on home page) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => {
                onPageChange('services');
                // Scroll to the specific service detail block
                setTimeout(() => {
                  const el = document.getElementById(`service-detail-block-${service.id}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
            />
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US (FINTECH PILLARS) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12" id="home-why-choose-us">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Our Philosophy</span>
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Why Successful Traders Partner with Us
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Algorithmic trading is a game of millimeters. Poorly written code crashes terminals, misses trades, or allows extreme slippage. Here is why our clients trust us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => {
            const Icon = WHY_ICON_MAP[item.iconName as keyof typeof WHY_ICON_MAP] || Award;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-700 p-6 rounded-xl space-y-4 hover:border-slate-500 transition-all duration-200"
              >
                <div className="h-10 w-10 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-100 text-base">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10" id="home-testimonials">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Client Success Stories</span>
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            Reviewed by Professional Traders
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((test) => (
            <div
              key={test.id}
              className="bg-slate-950 border border-slate-700 p-6.5 rounded-xl flex flex-col justify-between space-y-6 hover:border-emerald-500/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Stars and date */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-slate-500">{test.date}</span>
                </div>
                
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                <div className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-mono text-xs font-bold text-emerald-400">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-xs">{test.name}</h4>
                  <p className="text-[10px] text-slate-500 font-mono">{test.role} {test.company && `| ${test.company}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM DUAL BANNER CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" id="home-cta">
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden space-y-6">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.03] rounded-full blur-2xl"></div>
          
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold block">Let's Get Started</span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 max-w-2xl mx-auto">
            Ready to Automate Your Strategy & Protect Your Edge?
          </h2>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Get a 100% free structural review of your trading strategy requirements. We sign an NDA to keep your formulas completely secure.
          </p>

          <div className="pt-4 flex flex-col items-center gap-3">
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={getConsultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="home-bottom-cta-whatsapp"
                className="flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-xl text-sm transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 active:scale-95 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5 fill-slate-950" />
                <span>Discuss Strategy on WhatsApp</span>
              </a>
              
              <button
                onClick={() => {
                  onPageChange('how-it-works');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-300 font-bold px-6 py-4 rounded-xl text-sm transition-all cursor-pointer"
              >
                Our 4-Step Process
              </button>
            </div>
            
            <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Chat Response: Under 10 Mins • Standard Mutual NDA Applied
            </span>
          </div>

          <div className="flex justify-center items-center gap-6 text-[10px] font-mono text-slate-500 pt-4 border-t border-slate-800/80">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Same-day Architectural Layout
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> 100% Free Developer Interview
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Full Source File Handover
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
