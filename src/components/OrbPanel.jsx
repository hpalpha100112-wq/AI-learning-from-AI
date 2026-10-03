import React from 'react';
import { ArrowRight, Orbit } from 'lucide-react';
import AIOrb from './AIOrb';

export default function OrbPanel() {
  return (
    <section className="orb-panel">
      <div className="orb-copy">
        <div className="eyebrow"><Orbit size={13} /> The knowledge core</div>
        <h1>AI changes every day.<br /><em>Your knowledge should too.</em></h1>
        <p>One calm place to catch up, learn the concept behind the headline, try the tool, and turn today's signal into a small build.</p>
        <div className="hero-actions">
          <a href="#today" className="btn btn-primary">Open today's pulse <ArrowRight size={16} /></a>
          <a href="/playbook" className="btn btn-secondary">See the playbook</a>
        </div>
        <div className="hero-proof"><span>↻</span> refreshed once every 24 hours <b>·</b> designed for action</div>
      </div>
      <div className="orb-stage">
        <div className="orb-label orb-label--top">LIVE / DAILY</div>
        <AIOrb />
        <div className="orb-data orb-data--left"><span>12</span><small>signals</small></div>
        <div className="orb-data orb-data--right"><span>08</span><small>tools</small></div>
        <div className="orb-data orb-data--bottom"><span>01</span><small>focus theme</small></div>
      </div>
    </section>
  );
}