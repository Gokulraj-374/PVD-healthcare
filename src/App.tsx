import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Placements from './pages/Placements';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

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
      '/': 'Home | PVD Padhividass Healthcare Training',
      '/about': 'About Us | PVD Padhividass Healthcare',
      '/courses': 'Medical Coding Courses | CPC Certification',
      '/placements': 'Placement Support | Careers in Medical Coding',
      '/contact': 'Contact Us | Free Demo Session',
      '/admin': 'Admin Dashboard | PVD Padhividass'
    };
    
    document.title = titleMap[pathname] || 'PVD Padhividass Healthcare';
  }, [pathname]);
  
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageHead />
      <div className="min-h-screen flex flex-col selection:bg-teal-100 selection:text-teal-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
