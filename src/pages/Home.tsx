import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Users, Star, Quote, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, PARTNERS, COURSES } from '../constants';
import LeadForm from '../components/LeadForm';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-brand-light/50 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#fed7aa_0%,transparent_50%)] opacity-40" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#ffedd5_0%,transparent_50%)] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-brand-orange/20 shadow-sm">
                <ShieldCheck className="text-brand-orange" size={20} />
                <span className="text-sm font-semibold text-brand-primary">AAPC Authorized Training Partner</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-brand-primary leading-[1.1]">
                Become a Certified <br />
                <span className="text-brand-orange">Medical Coder</span> with <br />
                100% Pass Guarantee
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Join India's premier healthcare training institute. Master Medical Coding, CPC Certification, and Medical Billing with industry experts and 100% placement support.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-orange-grad text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-brand-orange/20 hover:scale-105 transition-all flex items-center gap-2"
                >
                  Enroll Now
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/courses"
                  className="bg-white text-brand-primary border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all"
                >
                  Book Free Demo
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Student" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-brand-primary">10,000+</p>
                  <p className="text-gray-500">Students Certified</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="flex flex-col">
                  <div className="flex gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-semibold">4.9/5 Student Rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-accent/10 rounded-[2rem] blur-3xl -z-10 translate-y-8" />
              <div className="bg-white p-4 rounded-[2rem] shadow-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop"
                  alt="Medical Coding Class"
                  className="rounded-[1.5rem] w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-10 -left-10 bg-orange-grad p-6 rounded-3xl shadow-xl space-y-2 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white leading-none">100%</p>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-white/80">Placement Rate</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-10 -right-10 bg-pink-grad p-6 rounded-3xl shadow-xl space-y-2 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white leading-none">500+</p>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-white/80">Hiring Partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-accent">Our Specializations</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-brand-primary">Globally Recognized Programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COURSES.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl border border-gray-100 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-orange-500/5 transition-all bg-white relative overflow-hidden"
              >
                <div className="h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={18} className="text-brand-orange" />
                </div>
                <h3 className="text-xl font-display font-bold text-brand-primary mb-4 pr-6">{course.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">{course.duration}</span>
                  <Link to={`/courses#${course.id}`} className="text-sm font-bold text-brand-primary group-hover:text-brand-orange transition-colors flex items-center gap-1">
                    Details
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-accent">Student Success</h2>
              <p className="text-4xl md:text-5xl font-display font-bold text-brand-primary leading-tight">Hear it from our successful students</p>
              <div className="space-y-6">
                {TESTIMONIALS.map((testimonial, idx) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-[2rem] shadow-xl relative"
                  >
                    <Quote className="absolute top-6 right-8 text-brand-accent/20" size={40} />
                    <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <img src={testimonial.image} className="w-12 h-12 rounded-full object-cover" alt="" />
                      <div>
                        <h4 className="font-bold text-brand-primary">{testimonial.name}</h4>
                        <p className="text-xs text-brand-accent font-semibold">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                )).slice(0, 2)}
              </div>
            </div>

            <div className="bg-white p-4 rounded-[3rem] shadow-2xl relative">
              <div className="absolute inset-0 bg-teal-500/5 blur-3xl -z-10" />
              <div className="p-8 lg:p-12 space-y-10">
                <div className="text-center space-y-2">
                  <h3 className="text-3xl font-display font-bold text-brand-primary">Claim Your Success</h3>
                  <p className="text-gray-500">Fill the form to get a detailed brochure and free demo invitation.</p>
                </div>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] mb-12 text-xs">Our Students Work At</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {PARTNERS.map(partner => (
               <div key={partner.id} className="flex flex-col items-center gap-2">
                 <div className="w-[120px] h-[40px] bg-gray-100 rounded-lg flex items-center justify-center font-display font-bold text-gray-400">
                   {partner.name}
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
