import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Route-level code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageHead() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const metadataMap: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Home | PVD Healthcare Training',
        description: 'Master Medical Coding, CPC Certification, and Medical Billing with PVD Healthcare. AAPC Authorized Training Partner providing 100% placement and pass guarantee in India.'
      },
      '/about': {
        title: 'About Us | PVD Healthcare',
        description: 'Learn about PVD Healthcare, an AAPC Authorized Partner dedicated to providing top-tier medical coding training and career placement.'
      },
      '/courses': {
        title: 'Medical Coding Courses | CPC Certification',
        description: 'Explore our comprehensive medical coding courses. Get CPC certified with expert instructors, live projects, and guaranteed placement support.'
      },
      '/contact': {
        title: 'Contact Us | Free Demo Session',
        description: 'Get in touch with PVD Healthcare today. Book a free demo session and start your journey towards a successful medical coding career.'
      },
      '/admin': {
        title: 'Admin Dashboard | PVD Healthcare',
        description: 'PVD Healthcare administrative dashboard.'
      }
    };
    
    const meta = metadataMap[pathname] || metadataMap['/'];
    document.title = meta.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }
  }, [pathname]);
  
  return null;
}

function RouteLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-orange-100 border-t-brand-orange rounded-full animate-spin" />
      <p className="text-gray-400 text-sm font-semibold tracking-wide uppercase">Loading page...</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageHead />
      <div className="min-h-screen flex flex-col selection:bg-teal-100 selection:text-teal-900">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<RouteLoading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
