import React from 'react';
import { ArrowUpRight, Clock3 } from 'lucide-react';

export default function NewsCard({ item, featured = false }) {
  return (
    <article className={`news-card ${featured ? 'news-card--featured' : ''} tone-${item.accent}`}>
      <div className="card-meta"><span className="pill">{item.tag}</span><span className="meta-time"><Clock3 size={13} /> {item.age}</span></div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <div className="card-footer"><span>{item.source}</span><button className="round-arrow" aria-label="Open story"><ArrowUpRight size={17} /></button></div>
    </article>
  );
}