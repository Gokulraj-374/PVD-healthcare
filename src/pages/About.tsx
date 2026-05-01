import { motion } from 'motion/react';
import { Target, Eye, BookOpen, UserCheck, ShieldCheck, Award, Users } from 'lucide-react';

const coreValues = [
  {
    icon: ShieldCheck,
    title: '100% Pass Guarantee',
    desc: 'Unmatched curriculum and mock tests ensuring global certification success.'
  },
  {
    icon: Award,
    title: 'AAPC Certified Trainers',
    desc: 'Learn directly from industry masters with 10+ years of active coding experience.'
  },
  {
    icon: Target,
    title: 'Job Oriented Training',
    desc: 'Practical sessions mimicking the actual office environment of a medical coder.'
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-orange">About the Institute</h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-primary leading-tight">
              PVD Padhividass <br />
              <span className="text-brand-orange">Healthcare Training</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with the vision to bridge the gap between education and healthcare industry requirements, PVD Padhividass has emerged as a beacon of excellence in Medical Coding training. 
            </p>
            <div className="space-y-4 text-gray-600">
              <p>We don't just teach coding; we build careers. Our methodology focuses on deep conceptual understanding of human anatomy and precise application of coding guidelines (ICD, CPT, HCPCS).</p>
              <p>With a 100% track record of certification success, we are proud to have empowered thousands of life science graduates to find rewarding careers in the global RCM sector.</p>
            </div>
          </motion.div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-teal-500/5 rounded-[2.5rem] blur-2xl group-hover:bg-teal-500/10 transition-colors" />
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop"
              className="w-full h-[600px] object-cover rounded-[2rem] shadow-2xl relative"
              alt="Institute Interior"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-primary py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 blur-[100px] -z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-all cursor-default"
          >
            <Eye className="text-brand-accent mb-6" size={48} />
            <h3 className="text-3xl font-display font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the global benchmark for healthcare training excellence, creating a workforce that leads the world in accuracy, ethics, and innovation in medical coding and billing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-all cursor-default"
          >
            <Target className="text-brand-accent mb-6" size={48} />
            <h3 className="text-3xl font-display font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To provide industry-synced, affordable training to life science graduates, ensuring every student achieves global certification and premium job placements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-accent">Why Choose Us</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-brand-primary">Our Training Methodology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: BookOpen, title: 'Concept Mastery', color: 'bg-violet-50 text-brand-violet', text: 'Step-by-step approach to Anatomy, Medical Terminology, and Coding Guidelines.' },
              { icon: Users, title: 'Live Interaction', color: 'bg-blue-50 text-blue-600', text: 'Real-time doubt clearing sessions and individual attention for every student.' },
              { icon: UserCheck, title: 'Exam Readiness', color: 'bg-amber-50 text-brand-orange', text: 'Intensive mockup test series designed to replicate actual AAPC/AHIMA exams.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="text-center space-y-6"
              >
                <div className={`w-20 h-20 ${item.color} rounded-[2rem] flex items-center justify-center mx-auto shadow-sm`}>
                  <item.icon size={32} />
                </div>
                <h4 className="text-2xl font-display font-bold text-brand-primary">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Environment Gallery */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-orange">Our Facility</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-primary">Corporate-Standard <br /> Learning Environment</h3>
            </div>
            <p className="text-gray-500 max-w-md">Our classrooms are equipped with modern technology to simulate real-world medical coding scenarios and AAPC exam environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px] md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 rounded-[2.5rem] overflow-hidden relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Practical Training" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent flex items-end p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold text-xl">Interactive Group Sessions</p>
              </div>
            </motion.div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-[2.5rem] overflow-hidden relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Classroom" 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-[2.5rem] overflow-hidden relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Student Collaboration" 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
