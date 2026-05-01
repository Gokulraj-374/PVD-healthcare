import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Clock, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import { COURSES } from '../constants';
import { useLocation } from 'react-router-dom';

export default function Courses() {
  const { hash } = useLocation();
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setExpandedCourse(id);
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="pt-32 pb-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 space-y-6 max-w-3xl">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-orange">Career Paths</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-primary leading-tight">
            Specialized Training <br />
            <span className="text-brand-orange">For Future Experts</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Choose from our range of meticulously designed courses that align with global healthcare industry standards. All programs include the 100% pass guarantee policy.
          </p>
        </header>

        <div className="space-y-12">
          {COURSES.map((course) => (
            <div
              key={course.id}
              id={course.id}
              className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-teal-500/5 transition-all scroll-mt-24"
            >
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {/* Left Column: Info */}
                  <div className="lg:col-span-8 space-y-8">
                    <div className="flex flex-wrap items-center gap-4">
                       <span className="bg-brand-golden/10 text-brand-golden px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                         Professional Track
                       </span>
                       <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                         <Clock size={16} />
                         {course.duration}
                       </div>
                    </div>

                    <h3 className="text-3xl font-display font-bold text-brand-primary">{course.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{course.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-brand-violet">
                          <BookOpen size={20} />
                          <h4 className="font-bold text-brand-primary">Eligibility</h4>
                        </div>
                        <p className="text-gray-500 text-sm ml-7">{course.eligibility}</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-brand-violet">
                          <GraduationCap size={20} />
                          <h4 className="font-bold text-brand-primary">Certification</h4>
                        </div>
                        <p className="text-gray-500 text-sm ml-7">{course.certification}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                      className="flex items-center gap-2 text-brand-orange font-bold group pt-4"
                    >
                      {expandedCourse === course.id ? 'Hide Detailed Syllabus' : 'View Detailed Syllabus'}
                      {expandedCourse === course.id ? <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" /> : <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />}
                    </button>
                    
                    <AnimatePresence>
                      {expandedCourse === course.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-brand-light/50 rounded-2xl"
                        >
                          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.syllabus.map((topic, i) => (
                              <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-50">
                                <div className="w-6 h-6 bg-brand-violet text-white rounded-full flex items-center justify-center shrink-0">
                                  <CheckCircle2 size={14} />
                                </div>
                                <span className="text-sm font-medium text-gray-700">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right Column: CTA / Extras */}
                  <div className="lg:col-span-4 bg-gray-50 p-8 rounded-3xl space-y-6">
                    <div className="h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-2">
                       <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">What you get</p>
                       <ul className="space-y-3">
                         {['Job Placement Support', 'LMS Access', '20+ Mock Tests', 'Interactive Session'].map(f => (
                           <li key={f} className="flex items-center gap-3 text-sm font-semibold text-brand-primary">
                             <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                             {f}
                           </li>
                         ))}
                       </ul>
                    </div>

                    <div className="h-px bg-gray-200" />
                    
                    <div className="space-y-4">
                      <a
                        href={`/contact?course=${course.id}`}
                        className="block w-full text-center bg-orange-grad text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-orange/10 transition-all hover:scale-[1.02]"
                      >
                        Enroll Now
                      </a>
                      <button className="block w-full text-center bg-white text-brand-primary border border-gray-200 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
