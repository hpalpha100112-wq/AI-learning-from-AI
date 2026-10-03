import React, { useMemo, useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { news } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import NewsCard from '../components/NewsCard';

export default function Pulse() {
  const [filter, setFilter] = useState('ALL');
  const tags = ['ALL', ...new Set(news.map(n => n.tag))];
  const items = useMemo(() => filter === 'ALL' ? news : news.filter(n => n.tag === filter), [filter]);
  return (
    <div className="page-grid">
      <div className="page-hero compact-hero"><div><div className="eyebrow"><Filter size={13} /> Daily intelligence</div><h1>AI Pulse</h1><p>The 24-hour briefing. Less noise, more signal — with a practical next action attached to each story.</p></div><div className="hero-date">Last cycle<br /><strong>Today · 06:00</strong></div></div>
      <div className="filter-row"><div className="filter-search"><Search size={15} /><span>Filter the pulse</span></div>{tags.map(tag => <button key={tag} onClick={() => setFilter(tag)} className={`filter-pill ${filter === tag ? 'active' : ''}`}>{tag}</button>)}</div>
      <div className="pulse-grid">{items.map(item => <NewsCard key={item.id} item={item} />)}</div>
    </div>
  );
}