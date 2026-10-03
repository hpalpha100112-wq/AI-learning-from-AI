import React, { useState } from 'react';
import { ArrowRight, BrainCircuit, Check, RotateCcw, ShieldCheck, Timer } from 'lucide-react';
import { challenges } from '../data/content';

export default function Game() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const challenge = challenges[index];
  const done = picked !== null;
  return (
    <div className="game-room">
      <div className="game-topline"><div><div className="eyebrow"><BrainCircuit size={13} /> Signal Runner · room 01</div><h1>Scenario mode</h1></div><div className="game-top-stats"><span><Timer size={15} /> 07:42</span><span><ShieldCheck size={15} /> evidence mode</span></div></div>
      <section className="game-panel"><div className="scenario-badge">SCENARIO {String(index + 1).padStart(2, '0')} / {String(challenges.length).padStart(2, '0')}</div><h2>{challenge.prompt}</h2><p className="scenario-help">Choose the response that best reflects reliable AI thinking.</p><div className="choice-grid"><button className={picked === 'a' ? 'choice selected' : 'choice'} onClick={() => setPicked('a')}><span>A</span><div><strong>Optimize the output first.</strong><small>Make the prompt more persuasive and move on.</small></div></button><button className={picked === 'b' ? 'choice selected' : 'choice'} onClick={() => setPicked('b')}><span>B</span><div><strong>Define the test before scaling the workflow.</strong><small>Make success measurable, then iterate.</small></div></button><button className={picked === 'c' ? 'choice selected' : 'choice'} onClick={() => setPicked('c')}><span>C</span><div><strong>Add more complexity immediately.</strong><small>More steps means more intelligence.</small></div></button></div>{done && <div className="answer-reveal"><div className="answer-icon"><Check size={17} /></div><div><strong>Evidence unlocked</strong><p>{challenge.answer}</p></div></div>}<div className="game-actions">{done ? <button className="btn btn-primary" onClick={() => { setIndex((index + 1) % challenges.length); setPicked(null); }}>Next scenario <ArrowRight size={15} /></button> : <span className="locked-copy">Pick a response to continue</span>}<button className="text-btn" onClick={() => setPicked(null)}><RotateCcw size={14} /> Reset</button></div></section>
    </div>
  );
}