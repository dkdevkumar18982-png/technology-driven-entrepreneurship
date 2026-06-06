import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Dashboard from './pages/Dashboard';
import AIAnalysis from './pages/AIAnalysis';
import IoTDashboard from './pages/IoTDashboard';
import BlockchainExplorer from './pages/BlockchainExplorer';
import CaseStudies from './pages/CaseStudies';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ai-analysis" element={<AIAnalysis />} />
          <Route path="/iot-dashboard" element={<IoTDashboard />} />
          <Route path="/blockchain" element={<BlockchainExplorer />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
