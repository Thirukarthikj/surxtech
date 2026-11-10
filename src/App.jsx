import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppChat from './components/WhatsAppChat';
import ServiceModal from './components/ServiceModal';
import ProjectModal from './components/ProjectModal';

// Homepage eager-loaded for instant first paint
import HomePage from './pages/HomePage';

// Secondary pages lazy-loaded to optimize bundle size and TBT
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const BusinessSolutionsPage = lazy(() => import('./pages/BusinessSolutionsPage'));
const BusinessDetailPage = lazy(() => import('./pages/BusinessDetailPage'));
const StudentProjectsPage = lazy(() => import('./pages/StudentProjectsPage'));
const StudentDetailPage = lazy(() => import('./pages/StudentDetailPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'));

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
        <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />}>
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
      </Suspense>
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
