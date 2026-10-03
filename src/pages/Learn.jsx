import React from 'react';
import { BookOpen, CircleCheck, Clock3, Route, Sparkles } from 'lucide-react';
import { learningTracks } from '../data/content';
import SectionHeader from '../components/SectionHeader';
import TrackCard from '../components/TrackCard';

export default function Learn() {
  return (
    <div className="page-grid">
      <div className="page-hero"><div><div className="eyebrow"><Route size={13} /> Learning architecture</div><h1>Build your AI fluency.</h1><p>Follow a track, practice a little every day, and keep the proof of what you can actually make.</p></div><div className="hero-orbit"><Sparkles size={18} /><span>6 tracks<br /><b>90 lessons</b></span></div></div>
      <div className="learning-summary"><div><BookOpen size={17} /><span>Current focus</span><strong>AI Foundations</strong></div><div><Clock3 size={17} /><span>Today</span><strong>24 min</strong></div><div><CircleCheck size={17} /><span>Streak</span><strong>11 days</strong></div></div>
      <SectionHeader eyebrow="Curriculum" title="A learning map that expands with the ecosystem" description="Inspired by modular course libraries: one clear path, optional branches, no prerequisite maze." />
      <div className="tracks-grid tracks-grid--full">{learningTracks.map(track => <TrackCard key={track.id} track={track} />)}</div>
    </div>
  );
}