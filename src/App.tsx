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
    const titleMap: Record<string, string> = {
      '/': 'Home | PVD Healthcare Training',
      '/about': 'About Us | PVD Healthcare',
      '/courses': 'Medical Coding Courses | CPC Certification',

      '/contact': 'Contact Us | Free Demo Session',
      '/admin': 'Admin Dashboard | PVD Healthcare'
    };
    
    document.title = titleMap[pathname] || 'PVD Healthcare';
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
