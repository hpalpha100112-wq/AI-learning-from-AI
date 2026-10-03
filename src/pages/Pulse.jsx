import React, { useMemo, useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { news } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import NewsCard from '../components/NewsCard';

export default function Pulse() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState('ALL');
  const query = searchParams.get('q') ?? '';

  const tags = ['ALL', ...new Set(news.map(n => n.tag))];
  const items = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return news.filter(item => {
      const matchesFilter = filter === 'ALL' || item.tag === filter;
      const matchesQuery =
        !normalized ||
        [item.title, item.summary, item.tag, item.source]
          .join(' ')
          .toLowerCase()
          .includes(normalized);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const updateQuery = (value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set('q', value);
    else next.delete('q');
    setSearchParams(next);
  };

  return (
    <div className="page-grid">
      <div className="page-hero compact-hero">
        <div>
          <div className="eyebrow"><Filter size={13} /> Daily intelligence</div>
          <h1>AI Pulse</h1>
          <p>The 24-hour briefing. Less noise, more signal — with a practical next action attached to each story.</p>
        </div>
        <div className="hero-date">Last cycle<br /><strong>Today · 06:00</strong></div>
      </div>

      <div className="filter-row">
        <label className="filter-search">
          <Search size={15} />
          <input
            aria-label="Filter the pulse"
            value={query}
            onChange={event => updateQuery(event.target.value)}
            placeholder="Filter the pulse"
          />
        </label>
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`filter-pill ${filter === tag ? 'active' : ''}`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="pulse-grid">
        {items.map(item => <NewsCard key={item.id} item={item} />)}
      </div>

      {items.length === 0 && (
        <div className="empty-state">
          <strong>No pulse matches found.</strong>
          <button className="text-btn" onClick={() => { setFilter('ALL'); updateQuery(''); }}>
            Clear filters
          </button>
        </div>
      )}

      <SectionHeader
        eyebrow="Signal count"
        title={`${items.length} stories surfaced`}
        description="Search and category filters update the briefing without leaving the page."
      />
    </div>
  );
}