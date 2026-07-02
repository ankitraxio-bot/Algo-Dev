/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../data';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // Pulse animation every 3 seconds to draw attention
    const interval = setInterval(() => {
      setPulse(p => !p);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const message = "Hello! I am interested in your MT5/MQL5 Algorithmic Trading Development services. I would like to get a quote for a custom trading system.";
  const link = getWhatsAppLink(message);

  return (
    <div className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-[9999] flex flex-col items-center gap-1.5 font-sans">
      {/* "Chat Now" badge above the WhatsApp button */}
      <div className="bg-[#075e54] text-white text-[9px] sm:text-[10px] font-mono font-black tracking-wider px-2.5 py-1 rounded-md shadow-lg flex items-center gap-1 border border-[#128c7e]/30">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>CHAT NOW</span>
      </div>

      {/* Main WhatsApp Circular Button Wrapper */}
      <div className="group relative">
        {/* Pulsing Backlight Ring */}
        <span className="absolute inset-0 rounded-full bg-[#075e54]/30 blur-md animate-ping opacity-75"></span>
        
        {/* Sleek Tooltip - visible on hover of button wrapper (desktop only) */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-950/95 border border-[#075e54]/20 text-slate-200 text-xs py-2 px-4 rounded-xl shadow-2xl flex items-center gap-2 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 font-medium font-mono border-l-2 border-l-[#128c7e] pointer-events-none whitespace-nowrap hidden md:flex">
          <span className="w-2 h-2 rounded-full bg-[#128c7e] animate-pulse"></span>
          <span>Developer Online: Click to chat instantly</span>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 bg-[#075e54] hover:bg-[#054c44] text-white rounded-full shadow-2xl shadow-[#075e54]/30 hover:shadow-[#075e54]/50 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 fill-white stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
}
