import React from 'react';
import { ArrowRight, Gamepad2, LockKeyhole, Sparkles, Trophy, Zap } from 'lucide-react';
import AIOrb from '../components/AIOrb';
import { Link } from 'react-router-dom';

export default function Lab() {
  return (
    <div className="lab-page">
      <section className="lab-hero"><div className="lab-copy"><div className="eyebrow"><Gamepad2 size={13} /> Game Lab · invitation</div><h1>Learn AI by<br /><em>playing with it.</em></h1><p>A game layer is coming to Pulse: short rounds, evolving scenarios, real AI concepts, and a leaderboard built around learning evidence — not endless points.</p><div className="hero-actions"><Link to="/game" className="btn btn-primary">Enter the game room <ArrowRight size={16} /></Link><span className="lab-note"><Zap size={14} /> Rules will plug in here next.</span></div></div><div className="lab-orb"><AIOrb /></div></section>
      <section className="game-preview"><div className="game-copy"><div className="eyebrow"><Sparkles size={13} /> Designed for the next layer</div><h2>Three things the game will teach.</h2><div className="feature-row"><span>01</span><div><strong>Think in systems</strong><p>Read the environment, tools and constraints before you act.</p></div></div><div className="feature-row"><span>02</span><div><strong>Test your assumptions</strong><p>Use small experiments instead of guessing what a model will do.</p></div></div><div className="feature-row"><span>03</span><div><strong>Ship the proof</strong><p>Leave each round with a result you could actually reuse.</p></div></div></div><div className="game-card"><div className="game-card-top"><span className="status-chip">SEASON 00 · WARM-UP</span><LockKeyhole size={17} /></div><div className="game-card-core"><Trophy size={26} /><span>01</span><strong>Signal Runner</strong><small>Core challenge shell</small></div><div className="game-card-foot"><span>Gameplay rules pending</span><span>XP · evidence · streaks</span></div></div></section>
    </div>
  );
}