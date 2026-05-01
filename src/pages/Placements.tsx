import { motion } from 'motion/react';
import { Briefcase, FileSpreadsheet, UserCheck, MessageSquare, Zap, CheckCircle2 } from 'lucide-react';
import { PARTNERS } from '../constants';

const placementSteps = [
  {
    icon: FileSpreadsheet,
    title: 'Resume Building',
    desc: 'Expert guidance on creating industry-standard resumes that pass ATS filters.'
  },
  {
    icon: MessageSquare,
    title: 'Mock Interviews',
    desc: 'Simulated interview rounds with domain experts to build confidence and refine soft skills.'
  },
  {
    icon: UserCheck,
    title: 'Profile Marketing',
    desc: 'Dedicated placement team connects your profile with top RCM companies.'
  },
  {
    icon: Briefcase,
    title: 'Interview Support',
    desc: 'End-to-end support until you land the offer letter in your hand.'
  }
];

export default function Placements() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="mb-24 flex flex-col md:flex-row gap-12 items-end justify-between">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-orange">100% Placement Support</h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-primary leading-tight">
              Start Your Career <br />
              <span className="text-brand-orange">With Top MNCs</span>
            </h1>
            <p className="text-lg text-gray-600">
              Our commitment goes beyond training. We track every student's career journey and ensure they find the right opportunity in the thriving medical coding sector.
            </p>
          </div>
          <div className="bg-brand-light p-8 rounded-3xl border border-brand-orange/20 flex items-center gap-6 shadow-xl shadow-brand-orange/5">
            <div className="text-center">
              <p className="text-4xl font-display font-bold text-brand-primary">100%</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-orange">Assistance</p>
            </div>
            <div className="w-px h-12 bg-brand-orange/20" />
            <div className="text-center">
              <p className="text-4xl font-display font-bold text-brand-primary">500+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-orange">Hired</p>
            </div>
          </div>
        </section>

        {/* Support Steps */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-violet-50 text-brand-violet rounded-2xl flex items-center justify-center mb-6">
                  <step.icon size={28} />
                </div>
                <h4 className="text-xl font-display font-bold text-brand-primary mb-4">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hiring Partners */}
        <section className="mb-32 p-12 lg:p-24 bg-brand-primary rounded-[4rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-violet/20 blur-[100px]" />
          <div className="relative z-10 space-y-16">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold">Our Hiring Partners</h3>
              <p className="text-gray-400">Our alumni are successfully working in these top-tier organizations.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
              {PARTNERS.map(partner => (
                <div key={partner.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair">
                   <span className="font-display font-bold text-2xl text-gray-400">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-orange">Success Stories</h2>
            <h3 className="text-4xl font-display font-bold text-brand-primary">From Students to Professionals</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm group">
                <div className="h-48 overflow-hidden bg-gray-100 relative">
                   <img src={`https://images.unsplash.com/photo-1559839734-2b71cf197ec2?q=80&w=400&h=300&auto=format&fit=crop`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Success Story" />
                   <div className="absolute inset-0 bg-brand-primary/20" />
                   <div className="absolute bottom-4 left-6 bg-brand-accent text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                     Placed @ Omega
                   </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map(j => <Zap key={j} size={12} fill="currentColor" />)}
                  </div>
                  <h4 className="font-display font-bold text-lg text-brand-primary">"The training provided here is practical and exactly what I needed to pass my CPC exam."</h4>
                  <p className="text-xs text-gray-400">- Sneha K., CPC Professional</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
