import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pulse from './pages/Pulse';
import Learn from './pages/Learn';
import Tools from './pages/Tools';
import Playbook from './pages/Playbook';
import Lab from './pages/Lab';
import Game from './pages/Game';
import Progress from './pages/Progress';
import Sources from './pages/Sources';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pulse" element={<Pulse />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/playbook" element={<Playbook />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/game" element={<Game />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}