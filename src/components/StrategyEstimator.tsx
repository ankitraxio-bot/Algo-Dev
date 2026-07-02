/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { getWhatsAppLink } from '../data';
import { 
  Cpu, 
  Terminal, 
  CheckCircle, 
  Copy, 
  MessageCircle, 
  Sliders, 
  ShieldAlert, 
  TrendingUp, 
  Clock, 
  Settings, 
  Award
} from 'lucide-react';

type Platform = 'MT5' | 'MT4' | 'TradingView_Bridge' | 'NinjaTrader8';
type StrategyType = 'Trend_Following' | 'Grid_Breakout' | 'Hedging_Scalping' | 'News_Arbitrage';
type TriggerSource = 'Indicators' | 'Price_Action' | 'Order_Flow' | 'External_API';
type RiskModel = 'Fixed_Lot' | 'Dynamic_Risk' | 'Drawdown_Shield' | 'Grid_Martingale';

interface ExtraOption {
  id: string;
  label: string;
  desc: string;
  complexity: number;
}

const EXTRA_OPTIONS: ExtraOption[] = [
  { id: 'news_filter', label: 'News Filter Block', desc: 'Auto-pauses trades during high-impact news', complexity: 1 },
  { id: 'multi_symbol', label: 'Multi-Symbol Monitor', desc: 'Scans multiple pairs simultaneously', complexity: 2 },
  { id: 'custom_dashboard', label: 'On-Screen Visual Panel', desc: 'Draws active metrics and buttons on chart', complexity: 1.5 },
  { id: 'discord_telegram', label: 'Webhook Alert Bridge', desc: 'Sends live trades to Discord/Telegram', complexity: 1 }
];

export default function StrategyEstimator() {
  const [platform, setPlatform] = useState<Platform>('MT5');
  const [strategyType, setStrategyType] = useState<StrategyType>('Trend_Following');
  const [triggerSource, setTriggerSource] = useState<TriggerSource>('Indicators');
  const [riskModel, setRiskModel] = useState<RiskModel>('Dynamic_Risk');
  const [selectedExtras, setSelectedExtras] = useState<string[]>(['news_filter']);
  const [copied, setCopied] = useState(false);

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Calculate Metrics based on choice
  const estimation = useMemo(() => {
    let complexityScore = 2.0;

    // Platform weights
    if (platform === 'TradingView_Bridge') complexityScore += 1.5;
    if (platform === 'NinjaTrader8') complexityScore += 1.0;
    
    // Strategy Type weights
    if (strategyType === 'Grid_Breakout') complexityScore += 1.0;
    if (strategyType === 'Hedging_Scalping') complexityScore += 1.5;
    if (strategyType === 'News_Arbitrage') complexityScore += 2.0;

    // Trigger Source weights
    if (triggerSource === 'Price_Action') complexityScore += 0.5;
    if (triggerSource === 'Order_Flow') complexityScore += 1.5;
    if (triggerSource === 'External_API') complexityScore += 2.5;

    // Risk Model weights
    if (riskModel === 'Drawdown_Shield') complexityScore += 1.0;
    if (riskModel === 'Grid_Martingale') complexityScore += 1.5;

    // Extras
    selectedExtras.forEach(extraId => {
      const extra = EXTRA_OPTIONS.find(x => x.id === extraId);
      if (extra) {
        complexityScore += extra.complexity;
      }
    });

    let tier = 'Standard Complexity';
    let days = '3 - 5 Business Days';
    let costEstimate = 'Standard';
    let indicatorColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';

    if (complexityScore > 7.5) {
      tier = 'Enterprise / Institutional';
      days = '8 - 12 Business Days';
      costEstimate = 'Custom Enterprise Quote';
      indicatorColor = 'text-purple-400 bg-purple-500/10 border-purple-500/20';
    } else if (complexityScore > 5.0) {
      tier = 'Advanced / Portfolio';
      days = '6 - 8 Business Days';
      costEstimate = 'Advanced Portfolio Tier';
      indicatorColor = 'text-sky-400 bg-sky-500/10 border-sky-500/20';
    } else if (complexityScore > 3.5) {
      tier = 'Intermediate Professional';
      days = '4 - 6 Business Days';
      costEstimate = 'Professional Tier';
      indicatorColor = 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
    }

    return {
      complexityScore: +complexityScore.toFixed(1),
      tier,
      days,
      costEstimate,
      indicatorColor
    };
  }, [platform, strategyType, triggerSource, riskModel, selectedExtras]);

  // Generate commented blueprint script
  const blueprintText = useMemo(() => {
    const extrasStr = selectedExtras.length > 0 
      ? selectedExtras.map(e => EXTRA_OPTIONS.find(x => x.id === e)?.label).join(', ')
      : 'None';

    return `//+------------------------------------------------------------------+
//| MQL5 STRATEGY BLUEPRINT SPECIFICATIONS                           |
//+------------------------------------------------------------------+
#define PLATFORM_TARGET    "${platform}"
#define STRATEGY_FAMILY    "${strategyType.replace('_', ' ')}"
#define TRIGGER_SOURCE     "${triggerSource.replace('_', ' ')}"
#define RISK_MODEL_TYPE    "${riskModel.replace('_', ' ')}"
#define OPTIONAL_BLOCKS    "${extrasStr}"

//--- Estimated Specifications
#define MODEL_COMPLEXITY   "${estimation.complexityScore} / 10.0"
#define ETA_ESTIMATION     "${estimation.days}"
#define QUALITY_GUARANTEE  "3-Year Warranty & Free Support"`;
  }, [platform, strategyType, triggerSource, riskModel, selectedExtras, estimation]);

  // Handle Clipboard Copy
  const handleCopy = () => {
    navigator.clipboard.writeText(blueprintText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // WhatsApp Trigger Message
  const whatsappMsg = `Hello MQL5 Developer! I have generated a Strategy Blueprint using your interactive estimator:

- Target Platform: ${platform}
- Strategy Family: ${strategyType.replace('_', ' ')}
- Trigger Source: ${triggerSource.replace('_', ' ')}
- Risk Model: ${riskModel.replace('_', ' ')}
- Extra Blocks: ${selectedExtras.map(e => EXTRA_OPTIONS.find(x => x.id === e)?.label).join(', ') || 'None'}
- Complexity Score: ${estimation.complexityScore}/10
- Estimated Dev Time: ${estimation.days}

Please let me know if we can start development!`;

  const whatsappUrl = getWhatsAppLink(whatsappMsg);

  return (
    <div className="bg-slate-950 border border-slate-700 rounded-3xl overflow-hidden shadow-xl font-sans" id="interactive-blueprint-estimator-section">
      
      {/* Section Header Banner */}
      <div className="bg-slate-900 p-6 md:p-8 border-b border-slate-700">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 text-left">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-extrabold flex items-center gap-1.5">
              <Sliders className="h-4 w-4" /> 
              Instant Blueprint Builder
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
              Interactive Strategy & Complexity Estimator
            </h3>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              Design your custom algorithm parameters below. Our quantitative system will immediately formulate a target complexity score, estimated delivery timeline, and generate an actionable WhatsApp blueprint.
            </p>
          </div>
 
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono font-semibold self-start md:self-center">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
            <span>Real-time Calculations</span>
          </div>
        </div>
      </div>
 
      {/* Main Grid Workspaces */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-700">
        
        {/* Left Interactive Options - Col Span 7 */}
        <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
          
          {/* PLATFORM SELECT */}
          <div className="space-y-2.5 text-left">
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
              1. Select Target Trading Platform
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'MT5', label: 'MetaTrader 5', tag: 'MQL5 / C++' },
                { id: 'MT4', label: 'MetaTrader 4', tag: 'MQL4 / C++' },
                { id: 'TradingView_Bridge', label: 'TradingView', tag: 'Webhook Bridge' },
                { id: 'NinjaTrader8', label: 'NinjaTrader 8', tag: 'NinjaScript C#' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPlatform(item.id as Platform)}
                  className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer active:scale-95 ${
                    platform === item.id 
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-sm' 
                      : 'bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-300'
                  }`}
                >
                  <span className="font-bold text-xs">{item.label}</span>
                  <span className="text-[9px] font-mono opacity-80 mt-1">{item.tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* STRATEGY LOGIC TYPE */}
          <div className="space-y-2.5 text-left">
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
              2. Core Strategy Family
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { id: 'Trend_Following', label: 'Trend Following / Breakouts', desc: 'Executes trades aligned with directional momentum filters' },
                { id: 'Grid_Breakout', label: 'Grid / Range Trading', desc: 'Places strategic buy/sell arrays across key structure boundaries' },
                { id: 'Hedging_Scalping', label: 'Advanced Scalping / Hedge', desc: 'Ultra-fast execution targeting micro pips with safe hedges' },
                { id: 'News_Arbitrage', label: 'News / Arbitrage Systems', desc: 'Executes high-frequency pricing discrepancy algorithms' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setStrategyType(item.id as StrategyType)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer active:scale-95 ${
                    strategyType === item.id 
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-sm' 
                      : 'bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-300'
                  }`}
                >
                  <span className="font-bold text-xs block">{item.label}</span>
                  <span className="text-[10px] text-slate-400 mt-1 block leading-normal">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* TRIGGER MECHANISMS */}
          <div className="space-y-2.5 text-left">
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
              3. Primary Trigger Source
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'Indicators', label: 'Indicators', tag: 'RSI, MACD, etc.' },
                { id: 'Price_Action', label: 'Price Action', tag: 'Candles, FVG' },
                { id: 'Order_Flow', label: 'Order Flow', tag: 'DOM, Footprint' },
                { id: 'External_API', label: 'Python / API', tag: 'Machine Learning' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTriggerSource(item.id as TriggerSource)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer active:scale-95 ${
                    triggerSource === item.id 
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-sm' 
                      : 'bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-300'
                  }`}
                >
                  <span className="font-bold text-xs">{item.label}</span>
                  <span className="text-[9px] font-mono opacity-80 mt-1">{item.tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RISK MANAGEMENT RULES */}
          <div className="space-y-2.5 text-left">
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
              4. Position Sizing & Risk Controls
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'Fixed_Lot', label: 'Fixed Lot Size', tag: 'Static (e.g. 0.1 Lot)' },
                { id: 'Dynamic_Risk', label: 'Risk % Per Trade', tag: 'Calculates via Stoploss' },
                { id: 'Drawdown_Shield', label: 'Daily DD Shield', tag: 'Prop Account Guard' },
                { id: 'Grid_Martingale', label: 'Grid Multiplier', tag: 'Scale In / Out' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setRiskModel(item.id as RiskModel)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer active:scale-95 ${
                    riskModel === item.id 
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-sm' 
                      : 'bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-300'
                  }`}
                >
                  <span className="font-bold text-xs">{item.label}</span>
                  <span className="text-[9px] font-mono opacity-80 mt-1">{item.tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* EXTRAS & OPTIONAL ENHANCEMENTS */}
          <div className="space-y-2.5 text-left">
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
              5. Add Optional Enhancements
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EXTRA_OPTIONS.map((item) => {
                const isSelected = selectedExtras.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleExtra(item.id)}
                    className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all duration-200 cursor-pointer active:scale-95 ${
                      isSelected 
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-sm' 
                        : 'bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    <div className="pt-0.5">
                      <div className={`h-4 w-4 rounded flex items-center justify-center border transition-all ${
                        isSelected ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'bg-transparent border-slate-700 text-transparent'
                      }`}>
                        <CheckCircle className="h-3 w-3 text-slate-950 stroke-3" />
                      </div>
                    </div>
                    <div>
                      <span className="font-bold text-xs block">{item.label}</span>
                      <span className="text-[10px] text-slate-400 leading-normal mt-0.5 block">{item.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Output Workspace - Col Span 5 */}
        <div className="lg:col-span-5 p-6 md:p-8 bg-slate-900/40 flex flex-col justify-between gap-6">
          
          {/* Live Metric Assessment Panel */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold text-left pb-1 border-b border-slate-700">
              Live Blueprint Diagnostics
            </h4>

            {/* Diagnostic Stats */}
            <div className="grid grid-cols-2 gap-3.5 text-left">
              
              <div className="bg-slate-950 border border-slate-700 p-3.5 rounded-2xl shadow-sm">
                <span className="text-[9px] font-mono text-slate-500 block">COMPLEXITY INDEX</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-mono font-black text-slate-100">{estimation.complexityScore}</span>
                  <span className="text-[11px] font-mono text-slate-500">/ 10.0</span>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-700 p-3.5 rounded-2xl shadow-sm">
                <span className="text-[9px] font-mono text-slate-500 block">ESTIMATED DEV TIME</span>
                <span className="text-xs font-mono font-bold text-slate-200 mt-2 block flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-emerald-400" />
                  {estimation.days.split(' ')[0]} {estimation.days.split(' ')[1]} {estimation.days.split(' ')[2]}
                </span>
              </div>

            </div>

            {/* Target Tier Indicator */}
            <div className="bg-slate-950 border border-slate-700 p-4 rounded-2xl text-left space-y-2 shadow-sm">
              <span className="text-[9px] font-mono text-slate-500 block uppercase">Project Engineering Tier</span>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono border px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${estimation.indicatorColor}`}>
                  {estimation.tier}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Includes strict mathematical parity testing on 99.9% real-tick feeds, extensive safety limit parameter controls, and source code ownership handover.
              </p>
            </div>
            
            {/* Live Generated Header Script block */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>GENERATED BLUEPRINT HEADER</span>
                <button 
                  onClick={handleCopy}
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                >
                  <Copy className="h-3 w-3" />
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="bg-slate-900 border border-slate-700 p-3.5 rounded-xl text-[10px] font-mono text-slate-300 text-left overflow-x-auto leading-normal whitespace-pre">
                {blueprintText}
              </pre>
            </div>

          </div>

          {/* Submittable WhatsApp CTA button */}
          <div className="space-y-3">
            <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700 flex gap-2.5 items-start text-left">
              <ShieldAlert className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-[10px] text-slate-400 leading-relaxed">
                <strong>IP & Strategy Protection Guarantee:</strong> Selecting specifications does not upload trade secrets. We execute NDAs before sharing actual formulas or rule files on WhatsApp.
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="submit-blueprint-whatsapp-btn"
              className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-4.5 rounded-xl text-xs transition-all duration-300 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/25 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="h-4.5 w-4.5 fill-slate-950" />
              <span>Submit Blueprint to Developer on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
