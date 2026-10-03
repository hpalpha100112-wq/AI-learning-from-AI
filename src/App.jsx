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

class AppErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Pulse render error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="app-error">
          <h1>Pulse needs a refresh.</h1>
          <p>Something on this page failed to render.</p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Reload Pulse
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <AppErrorBoundary>
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
    </AppErrorBoundary>
  );
}