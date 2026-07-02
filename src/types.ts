/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'services'
  | 'how-it-works'
  | 'about'
  | 'faq'
  | 'contact'
  | 'blog'
  | 'legal';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string; // Used to dynamically render Lucide icons
  benefits: string[];
  useCases: string[];
  details: string;
  targetKeyword: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  type: 'ea' | 'indicator' | 'utility';
  category: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  visualType: 'backtest_graph' | 'indicator_signals' | 'dashboard_terminal';
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  company?: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'development' | 'security' | 'delivery';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  category: string;
}
