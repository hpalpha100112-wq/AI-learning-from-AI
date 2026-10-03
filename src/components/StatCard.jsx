import React from 'react';

export default function StatCard({ value, label, tone = 'blue' }) {
  return <div className={`stat-card tone-${tone}`}><strong>{value}</strong><span>{label}</span></div>;
}