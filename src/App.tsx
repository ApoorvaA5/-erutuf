import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import StatsSection from './components/Stats/StatsSection';
import FeaturesSection from './components/Features/FeaturesSection';
import InnovatorPage from './pages/InnovatorPage';
import InvestorPage from './pages/InvestorPage';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <StatsSection />
              <FeaturesSection />
            </>
          } />
          <Route path="/innovate" element={<InnovatorPage />} />
          <Route path="/partner" element={<InvestorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;