import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center group-hover:rotate-6 transition-transform">
                <img src="logo.png" alt="PVD Padhvidass Logo" className="w-16 h-16 object-contain brightness-90" />
              </div>
              <span className="font-display font-bold text-xl">PVD Padhvidass</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empowering healthcare professionals through world-class medical coding training and global certifications.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/courses" className="hover:text-white transition-colors">All Courses</Link></li>

              <li><Link to="/about" className="hover:text-white transition-colors">About Institute</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Popular Courses</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><span className="hover:text-white cursor-help">CPC Certification</span></li>
              <li><span className="hover:text-white cursor-help">Medical Billing</span></li>
              <li><span className="hover:text-white cursor-help">ICD-10 Training</span></li>
              <li><span className="hover:text-white cursor-help">CSS Preparation</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-accent shrink-0" size={20} />
                <span className="text-gray-400 text-sm">
                  55M, TNHB, Rajiv gandhi street, Pallavan Nagar,<br />Kanchipuram - 631501
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-accent shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+91 84895 64699</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-accent shrink-0" size={18} />
                <span className="text-gray-400 text-sm">pvdhealthcare@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PVD Padhvidass Healthcare. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
