/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Import Views
import HomeView from './views/HomeView';
import ServicesView from './views/ServicesView';
import HowItWorksView from './views/HowItWorksView';
import FAQView from './views/FAQView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import BlogSection from './components/BlogSection';
import LegalView from './views/LegalView';

// Import motion for elegant animations
import { motion } from 'motion/react';

// SEO Title & Description Map
const SEO_METADATA: Record<PageId, { title: string; desc: string }> = {
  home: {
    title: "MT5 EA Developer & MQL5 Programmer | Custom Algo Development Labs",
    desc: "Professional MetaTrader 5 Expert Advisor (EA) development, custom indicator scripting, and manual strategy automation services. Hire a certified MQL5 coder today."
  },
  services: {
    title: "MQL5 Programming Services | MT5 EA & Custom Technical Indicators",
    desc: "Explore our 8 core MetaTrader 5 services: automated Expert Advisors, custom Volume Profile indicators, strategy conversion, backtesting optimization, and obfuscation."
  },
  'how-it-works': {
    title: "Our Development Process | MT5 EA Programming Roadmap & Timeline",
    desc: "Our transparent 4-step workflow: submit your strategy, get a fixed-price quote, core development and simulation backtesting, delivery and support."
  },
  faq: {
    title: "MQL5 Coder Support & FAQ | MetaTrader 5 Developer Price & NDA FAQ",
    desc: "Common questions regarding Expert Advisor cost, turnaround times, 100% code ownership (.mq5 source files), NDA, and our 3-Year Bug-Free Guarantee."
  },
  about: {
    title: "About Our MQL5 Trading Labs | Algorithmic Engineering Experts",
    desc: "Meet our quant development lab. 8+ years of experience coding custom MetaTrader 5 scripts, EAs, indicators, and risk utilities for serious traders."
  },
  blog: {
    title: "Algorithmic Trading Blog | MQL5 & MT5 Optimization Resources",
    desc: "Technical insights and tutorials about Walk-Forward optimization, code protection licensing, and why serious traders are migrating from MT4 to MT5."
  },
  contact: {
    title: "Contact MT5 EA Developer | Hire MQL5 Programmer on WhatsApp",
    desc: "Get a 100% free consultation for your trading strategy. Contact our developer instantly on WhatsApp for a fast, transparent fixed-price quote."
  },
  legal: {
    title: "Terms, IP Ownership & Trading Disclaimers | MQL5 Coder Policies",
    desc: "Formal policies detailing 100% client intellectual property ownership, strict NDA agreements, and our standard high-risk trading regulatory warning."
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      const validPages: PageId[] = [
        'home', 'services', 'how-it-works', 'about', 'faq', 'contact', 'blog', 'legal'
      ];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    // Run on mount
    handleHashChange();

    // Listen to changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash & document head for SEO on page state change
  useEffect(() => {
    // Update hash representation
    if (window.location.hash !== `#/${currentPage}`) {
      window.location.hash = `#/${currentPage}`;
    }

    // Dynamic SEO Title and Meta Description update
    const metadata = SEO_METADATA[currentPage] || SEO_METADATA.home;
    document.title = metadata.title;
    
    // Update or create meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metadata.desc);
  }, [currentPage]);

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
  };

  // Render the active view
  const renderView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onPageChange={handlePageChange} />;
      case 'services':
        return <ServicesView />;
      case 'how-it-works':
        return <HowItWorksView />;
      case 'faq':
        return <FAQView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      case 'blog':
        return <BlogSection />;
      case 'legal':
        return <LegalView />;
      default:
        return <HomeView onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-emerald-500/30 selection:text-emerald-100 antialiased">
      {/* Dynamic Header */}
      <Header currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Main Page Layout Wrapper */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="w-full"
        >
          {renderView()}
        </motion.div>
      </main>

      {/* Sticky WhatsApp Floating Trigger */}
      <FloatingWhatsApp />

      {/* General Footer with Disclaimers & IP Transfer details */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}
