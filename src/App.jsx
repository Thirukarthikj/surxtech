import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppChat from './components/WhatsAppChat';
import ServiceModal from './components/ServiceModal';
import ProjectModal from './components/ProjectModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

// Helper to auto-scroll to top on page route changes
function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [theme, setTheme] = useState('light');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleModalContactClick = () => {
    setSelectedService(null);
    setSelectedProject(null);
    navigate('/contact');
  };

  return (
    <div className="app-container">
      <ScrollToTopOnRoute />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSelectService={(svc) => setSelectedService(svc)}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectService={(svc) => setSelectedService(svc)}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
              />
            }
          />
          <Route path="/process" element={<ProcessPage />} />
          <Route
            path="/work"
            element={
              <WorkPage
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            }
          />
          <Route
            path="/contact"
            element={<ContactPage selectedService={selectedService} />}
          />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
      <WhatsAppChat phoneNumber="919342553805" />

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onContact={handleModalContactClick}
        />
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onContact={handleModalContactClick}
        />
      )}
    </div>
  );
}
