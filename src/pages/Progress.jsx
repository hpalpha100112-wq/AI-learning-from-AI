import React from 'react';
import { Award, CheckCircle2, Flame, Lock, Sparkles, Target } from 'lucide-react';

const badges = [
  { title: 'Daily Starter', text: 'Complete 7 daily cycles', icon: Flame, active: true },
  { title: 'Tool Tinkerer', text: 'Test 10 tools', icon: Sparkles, active: true },
  { title: 'Evidence Builder', text: 'Save 25 artifacts', icon: Target, active: false },
  { title: 'Agent Explorer', text: 'Finish the Agents track', icon: Award, active: false },
];

export default function Progress() {
  return (
    <div className="page-grid">
      <div className="page-hero"><div><div className="eyebrow"><Target size={13} /> Your learning loop</div><h1>Progress that points forward.</h1><p>Track streaks, tracks and evidence. The point is to see what you can do next, not just what you have consumed.</p></div><div className="level-card"><span>LEVEL</span><strong>07</strong><small>1,240 XP · 280 to next</small></div></div>
      <div className="progress-kpis"><div><span>Current streak</span><strong>11 days</strong><small>+1 today</small></div><div><span>Learning time</span><strong>4h 18m</strong><small>this month</small></div><div><span>Artifacts</span><strong>17</strong><small>saved proofs</small></div><div><span>Tracks</span><strong>2.4 / 6</strong><small>average progress</small></div></div>
      <section className="progress-section"><div className="section-head"><div><div className="eyebrow">Milestones</div><h2>Badges in motion</h2></div></div><div className="badges-grid">{badges.map(({ title, text, icon: Icon, active }) => <div className={`badge-card ${active ? 'active' : 'locked'}`} key={title}><div className="badge-icon"><Icon size={20} /></div><strong>{title}</strong><span>{text}</span>{active ? <CheckCircle2 size={16} /> : <Lock size={15} />}</div>)}</div></section>
    </div>
  );
}