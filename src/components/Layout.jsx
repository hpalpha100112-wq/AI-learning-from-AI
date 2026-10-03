import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bell, BookOpen, Brain, Compass, Gamepad2, Home, Layers3, Menu, Newspaper, Search, Sparkles, Trophy, Wrench, X } from 'lucide-react';
import { formatCountdown, nextRefresh } from '../lib/date';

const nav = [
  { to: '/', label: 'Command Center', icon: Home },
  { to: '/pulse', label: 'AI Pulse', icon: Newspaper },
  { to: '/learn', label: 'Learn', icon: BookOpen },
  { to: '/tools', label: 'Tools', icon: Wrench },
  { to: '/playbook', label: 'Daily Playbook', icon: Compass },
];

const secondary = [
  { to: '/lab', label: 'Game Lab', icon: Gamepad2 },
  { to: '/progress', label: 'My Progress', icon: Trophy },
  { to: '/sources', label: 'Research DNA', icon: Layers3 },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [ms, setMs] = useState(nextRefresh() - Date.now());

  useEffect(() => {
    const timer = setInterval(() => setMs(nextRefresh() - Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const pageTitle = useMemo(() => {
    if (location.pathname === '/') return 'Command Center';
    return location.pathname.replace('/', '').replaceAll('-', ' ').replace(/\b\w/g, c => c.toUpperCase());
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <div className="sidebar-top">
          <Link to="/" className="brand" aria-label="Pulse home">
            <span className="brand-mark"><Sparkles size={15} /></span>
            <span>
              <strong>PULSE</strong>
              <small>AI LEARNING OS</small>
            </span>
          </Link>
          <button className="icon-btn mobile-close" onClick={() => setOpen(false)} aria-label="Close menu"><X size={18} /></button>
        </div>

        <div className="sidebar-label">Navigate</div>
        <nav className="nav-group">
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <Icon size={17} strokeWidth={1.8} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-label sidebar-label--spaced">Your space</div>
        <nav className="nav-group">
          {secondary.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <Icon size={17} strokeWidth={1.8} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="refresh-card">
            <div className="tiny-row"><span>Next intelligence refresh</span><span className="live-dot" /></div>
            <div className="refresh-count">{formatCountdown(ms)}</div>
            <div className="refresh-caption">Every 24h · local time</div>
          </div>
          <div className="profile-chip">
            <div className="avatar">R</div>
            <div><strong>Explorer</strong><span>Level 07 · 1,240 XP</span></div>
          </div>
        </div>
      </aside>

      <main className="main-shell">
        <header className="topbar">
          <button className="icon-btn mobile-menu" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
          <div className="crumb"><span>Pulse</span><span className="crumb-sep">/</span><strong>{pageTitle}</strong></div>
          <div className="topbar-actions">
            <label className="search-box">
              <Search size={16} />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search the knowledge core" />
              {query && <Link to={`/pulse?q=${encodeURIComponent(query)}`} className="search-submit">↵</Link>}
            </label>
            <button className="icon-btn notification" aria-label="Notifications"><Bell size={18} /><span /></button>
            <div className="mini-avatar">R</div>
          </div>
        </header>
        <div className="page-wrap">{children}</div>
      </main>
    </div>
  );
}