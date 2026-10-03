import React from 'react';
import { ArrowRight, Flame, Layers3, Sparkles, Target, TimerReset, Zap } from 'lucide-react';
import { dailyStats, news, tools, learningTracks, playbookSteps } from '../data/content';
import { formatLongDate, formatShortDate } from '../lib/date';
import OrbPanel from '../components/OrbPanel';
import SectionHeader from '../components/SectionHeader';
import StatCard from '../components/StatCard';
import NewsCard from '../components/NewsCard';
import TrackCard from '../components/TrackCard';

export default function Home() {
  return (
    <div className="home-page">
      <div className="date-line"><span>{formatLongDate()}</span><span className="live-badge"><span className="live-dot" /> DAILY CYCLE 01</span></div>
      <OrbPanel />

      <section id="today" className="today-strip">
        {dailyStats.map(s => <StatCard key={s.label} {...s} />)}
      </section>

      <section className="content-section">
        <SectionHeader eyebrow="01 · AI Pulse" title="What deserves your attention today" description="A compact briefing built to answer the useful questions: what changed, why it matters, and what to do next." action={<a className="text-btn text-btn--large" href="/pulse">View full pulse <ArrowRight size={16} /></a>} />
        <div className="news-grid">{news.slice(0, 3).map((item, i) => <NewsCard key={item.id} item={item} featured={i === 0} />)}</div>
      </section>

      <section className="signal-section">
        <div className="signal-copy">
          <div className="eyebrow"><Target size={13} /> The daily loop</div>
          <h2>Don't just consume the update.<br /><em>Convert it into skill.</em></h2>
          <p>Every cycle closes the loop between information and action. The goal is not more tabs. It is a better next move.</p>
          <div className="signal-badges"><span><Zap size={14} /> Learn faster</span><span><Flame size={14} /> Practice daily</span><span><Layers3 size={14} /> Keep the evidence</span></div>
        </div>
        <div className="loop-card">
          {playbookSteps.map((step, i) => <div className="loop-row" key={step.title}><span className="loop-icon">{step.icon}</span><div><small>{step.time}</small><strong>{step.title}</strong><p>{step.text}</p></div><span className="loop-index">0{i + 1}</span></div>)}
        </div>
      </section>

      <section className="content-section">
        <SectionHeader eyebrow="02 · Learning map" title="Choose a lane. Then build." description="Structured like a course catalog, but organized around skill progression and real output." action={<a className="text-btn text-btn--large" href="/learn">Explore learning <ArrowRight size={16} /></a>} />
        <div className="tracks-grid">{learningTracks.slice(0, 3).map(track => <TrackCard key={track.id} track={track} />)}</div>
      </section>

      <section className="tool-preview">
        <div className="tool-preview-copy"><div className="eyebrow"><Sparkles size={13} /> Tool radar</div><h2>Know what exists.<br /><em>Know what to try.</em></h2><p>Tools are sorted by task, not hype: build, learn, create, automate, measure.</p><a className="btn btn-secondary" href="/tools">Open tool library <ArrowRight size={16} /></a></div>
        <div className="tool-mini-grid">{tools.slice(0, 4).map(tool => <div className={`tool-mini tone-${tool.color}`} key={tool.id}><span>{tool.category}</span><strong>{tool.name}</strong><small>{tool.use}</small><b>{tool.signal} →</b></div>)}</div>
      </section>

      <footer className="home-footer"><span>PULSE / AI LEARNING OS</span><span>Built for the pace of AI · {formatShortDate()}</span></footer>
    </div>
  );
}