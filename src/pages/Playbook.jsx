import React from 'react';
import { ArrowRight, CheckCircle2, Clock3, Compass, Download, Flame, Play, Sparkles } from 'lucide-react';
import { playbookSteps } from '../data/content';

export default function Playbook() {
  return (
    <div className="page-grid">
      <div className="playbook-hero"><div><div className="eyebrow"><Compass size={13} /> Daily operating system</div><h1>Today's AI playbook</h1><p>A focused sequence for turning one day of AI movement into one piece of learning evidence.</p><div className="playbook-actions"><button className="btn btn-primary"><Play size={15} /> Start 50-minute run</button><button className="btn btn-secondary"><Download size={15} /> Save playbook</button></div></div><div className="focus-card"><span>FOCUS</span><strong>Agent reliability</strong><small>One concept · one tool · one proof</small></div></div>
      <div className="playbook-timeline">{playbookSteps.map((step, i) => <div className="pb-step" key={step.title}><div className="pb-marker"><span>0{i + 1}</span></div><div className="pb-body"><div className="pb-meta"><span><Clock3 size={13} /> {step.time}</span><span>Micro-build</span></div><h2>{step.title}</h2><p>{step.text}</p><button className="text-btn">Open step <ArrowRight size={15} /></button></div><div className="pb-status"><CheckCircle2 size={17} /><span>Ready</span></div></div>)}</div>
      <div className="playbook-nudge"><div className="nudge-icon"><Flame size={19} /></div><div><strong>Consistency is the multiplier.</strong><p>Save one artifact from today's run. Tomorrow's playbook will start from what you proved today.</p></div><Sparkles size={18} /></div>
    </div>
  );
}