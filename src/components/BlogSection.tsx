/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS, getWhatsAppLink } from '../data';
import { BookOpen, Calendar, User, Clock, ArrowLeft, MessageCircle, ChevronRight, Search } from 'lucide-react';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(BLOG_POSTS.map(post => post.category))];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const title = post.title || '';
    const excerpt = post.excerpt || '';
    const tags = post.tags || [];
    const query = (searchQuery || '').toLowerCase();

    const matchesSearch = title.toLowerCase().includes(query) || 
                          excerpt.toLowerCase().includes(query) ||
                          tags.some(tag => tag && tag.toLowerCase().includes(query));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getBlogWhatsAppLink = (postTitle: string) => {
    const msg = `Hello! I read your article "${postTitle}" on your website and would like to discuss implementing or optimizing a trading system based on these concepts.`;
    return getWhatsAppLink(msg);
  };

  if (selectedPost) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 font-sans" id="blog-reader-view">
        {/* Back button */}
        <button
          onClick={handleBack}
          id="blog-back-btn"
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 mb-6 transition-colors group cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Articles</span>
        </button>

        {/* Post Metadata */}
        <div className="space-y-4 mb-8">
          <span className="inline-block text-xs font-mono bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
            {selectedPost.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 font-sans">
            {selectedPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400 border-b border-slate-900 pb-5 font-mono">
            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-emerald-500" /> {selectedPost.date}</span>
            <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-emerald-500" /> By {selectedPost.author}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-emerald-500" /> {selectedPost.readTime}</span>
          </div>
        </div>

        {/* Post Content */}
        <article className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6 text-base">
          {selectedPost.content.split('\n\n').map((paragraph, index) => {
            const text = paragraph.trim();
            if (text.startsWith('###')) {
              // Header 3
              return (
                <h3 key={index} className="text-xl font-bold text-slate-100 font-mono mt-8 mb-4 border-l-2 border-emerald-400 pl-3">
                  {text.replace('###', '').trim()}
                </h3>
              );
            }
            if (text.startsWith('1.') || text.startsWith('2.') || text.startsWith('3.') || text.startsWith('4.')) {
              // Ordered list items (split into individual list elements)
              return (
                <div key={index} className="pl-4 border-l border-slate-800 my-4 py-1 space-y-1 bg-slate-900/30 rounded-r-lg px-4">
                  <p className="font-semibold text-slate-200">{text}</p>
                </div>
              );
            }
            if (text.startsWith('**')) {
              // Bold callout/action block
              return (
                <div key={index} className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-slate-200 text-sm leading-relaxed max-w-xl">
                    {text.replace(/\*\*/g, '')}
                  </p>
                  <a
                    href={getBlogWhatsAppLink(selectedPost.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs whitespace-nowrap transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/25 active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4 fill-slate-950" />
                    <span>Get a Quote</span>
                  </a>
                </div>
              );
            }
            // Standard paragraph
            return <p key={index}>{text}</p>;
          })}
        </article>

        {/* Footer of article */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-wrap gap-2">
          {selectedPost.tags.map((tag, tIdx) => (
            <span key={tIdx} className="text-xs font-mono bg-slate-900 text-slate-400 px-3 py-1 rounded border border-slate-800">
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA Banner bottom */}
        <div className="mt-12 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 text-center space-y-4">
          <BookOpen className="h-8 w-8 text-emerald-400 mx-auto" />
          <h3 className="text-xl font-bold text-slate-100">Have a Strategy Based on These Principles?</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Our expert developers can program any order block, walk-forward variable, or security encryption engine natively in MQL5. Sign an NDA and get started today.
          </p>
          <div className="pt-2">
            <a
              href={getBlogWhatsAppLink(selectedPost.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-xl shadow-emerald-500/10 cursor-pointer hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5 fill-slate-950" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="space-y-10 font-sans" id="blog-list-view">
      {/* Intro Heading */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
          Educational Algorithmic Resources
        </h2>
        <p className="text-base text-slate-400 leading-relaxed">
          Stay ahead of the markets with our technical articles on MQL5 scripting, Expert Advisor optimizations, and advanced trade-protection utilities.
        </p>
      </div>

      {/* Filter and Search controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900/40 p-4 rounded-xl border border-slate-900/80 max-w-5xl mx-auto">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles or tags..."
            id="blog-search-input"
            className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-emerald-500/80 text-slate-200 text-xs pl-10 pr-4 py-2.5 rounded-lg outline-none transition-colors placeholder:text-slate-500"
          />
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-start sm:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-500/10 border border-emerald-400 text-emerald-400'
                  : 'bg-slate-950 border border-slate-850 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12 bg-slate-900/20 rounded-xl border border-dashed border-slate-900 max-w-5xl mx-auto">
          <p className="text-sm text-slate-500 italic">No articles found matching your criteria. Try adjusting your search query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => handlePostClick(post)}
              id={`blog-post-card-${post.id}`}
              className="bg-slate-950 border border-slate-900 hover:border-emerald-500/30 rounded-xl p-5.5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/[0.02] cursor-pointer group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono bg-emerald-500/5 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/10">
                    {post.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-900 mt-5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3 text-emerald-500" /> {post.date}</span>
                <span className="flex items-center gap-0.5 text-emerald-400 font-semibold group-hover:underline">
                  Read Article <ChevronRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform inline" />
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
