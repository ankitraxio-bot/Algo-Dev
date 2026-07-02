/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Cpu, MessageCircle, ChevronRight } from 'lucide-react';
import { getWhatsAppLink } from '../data';

interface HeaderProps {
  currentPage: PageId;
  onPageChange: (page: PageId) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'faq', label: 'FAQ' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ] as const;

  const handleNavClick = (pageId: PageId) => {
    onPageChange(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = "Hello! I am visiting your website and would like to get a free quote/consultation for my MT5 algorithm idea.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group transition-all"
          id="header-logo-btn"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all">
            <Cpu className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <span className="block font-mono text-sm font-bold tracking-wider text-emerald-400">MQL5.DEVELOPER</span>
            <span className="block text-xs font-semibold tracking-tight text-slate-400">ALGORITHMIC TRADING LABS</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-${item.id}`}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/5'
                    : 'text-slate-300 hover:text-emerald-300 hover:bg-slate-900/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-whatsapp"
            className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4.5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 fill-slate-950" />
            <span>Get Free Quote</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-900 hover:text-slate-100 transition-colors"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-slate-950 border-b border-slate-900 ${
          isOpen ? 'max-h-[500px] border-b opacity-100' : 'max-h-0 border-b-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-2 pt-2 pb-6 sm:px-3">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`mobile-nav-${item.id}`}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/5 font-semibold'
                    : 'text-slate-300 hover:text-emerald-300 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {isActive && <ChevronRight className="h-4 w-4 text-emerald-400" />}
                </div>
              </button>
            );
          })}
          
          <div className="pt-4 px-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-header-cta-whatsapp"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold w-full py-3.5 rounded-lg text-sm transition-all shadow-md shadow-emerald-500/10"
            >
              <MessageCircle className="h-5 w-5 fill-slate-950" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
