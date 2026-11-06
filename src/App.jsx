import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppChat from './components/WhatsAppChat';
import ServiceModal from './components/ServiceModal';
import ProjectModal from './components/ProjectModal';

// Existing Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

// New High-Intent Landing Pages
import BusinessSolutionsPage from './pages/BusinessSolutionsPage';
import BusinessDetailPage from './pages/BusinessDetailPage';
import StudentProjectsPage from './pages/StudentProjectsPage';
import StudentDetailPage from './pages/StudentDetailPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

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
          {/* Core Pages */}
          <Route path="/" element={<HomePage />} />
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
            path="/portfolio"
            element={
              <WorkPage
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            }
          />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route
            path="/contact"
            element={<ContactPage selectedService={selectedService} />}
          />

          {/* Business Solutions Landing Pages */}
          <Route path="/business-solutions" element={<BusinessSolutionsPage />} />
          <Route path="/web-development" element={<BusinessDetailPage defaultSlug="web-development" />} />
          <Route path="/ecommerce-development" element={<BusinessDetailPage defaultSlug="ecommerce-development" />} />
          <Route path="/mobile-app-development" element={<BusinessDetailPage defaultSlug="mobile-app-development" />} />
          <Route path="/custom-software-development" element={<BusinessDetailPage defaultSlug="custom-software-development" />} />
          <Route path="/ai-solutions" element={<BusinessDetailPage defaultSlug="ai-solutions" />} />
          <Route path="/ui-ux-design" element={<BusinessDetailPage defaultSlug="ui-ux-design" />} />
          <Route path="/seo-services" element={<BusinessDetailPage defaultSlug="seo-services" />} />
          <Route path="/website-maintenance" element={<BusinessDetailPage defaultSlug="website-maintenance" />} />

          {/* Student Project Solutions Landing Pages */}
          <Route path="/student-projects" element={<StudentProjectsPage />} />
          <Route path="/mca-projects" element={<StudentDetailPage defaultSlug="mca-projects" />} />
          <Route path="/bca-projects" element={<StudentDetailPage defaultSlug="bca-projects" />} />
          <Route path="/engineering-projects" element={<StudentDetailPage defaultSlug="engineering-projects" />} />
          <Route path="/python-projects" element={<StudentDetailPage defaultSlug="python-projects" />} />
          <Route path="/mern-stack-projects" element={<StudentDetailPage defaultSlug="mern-stack-projects" />} />
          <Route path="/ai-ml-projects" element={<StudentDetailPage defaultSlug="ai-ml-projects" />} />
          <Route path="/react-projects" element={<StudentDetailPage defaultSlug="react-projects" />} />

          {/* Blog & Thought Leadership */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />

          {/* Legal Compliance */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<HomePage />} />
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
