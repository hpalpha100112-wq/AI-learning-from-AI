import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function TrackCard({ track }) {
  return (
    <article className={`track-card tone-${track.accent}`}>
      <div className="track-top"><span className="track-number">{track.level}</span><span className="track-meta">{track.meta}</span></div>
      <h3>{track.title}</h3>
      <p>{track.description}</p>
      <div className="track-progress"><div className="progress-bar"><span style={{ width: `${track.progress}%` }} /></div><span>{track.progress}%</span></div>
      <div className="track-bottom"><span>{track.lessons} lessons</span><button className="text-btn">Open <ArrowRight size={15} /></button></div>
    </article>
  );
}