import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { submitLead } from '../lib/leads';
import { COURSES } from '../constants';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const result = await submitLead(formData);
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', courseInterest: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 p-8 rounded-3xl text-center space-y-4 border border-brand-green/20"
      >
        <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto text-white">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-display font-bold text-brand-primary">Thank You!</h3>
        <p className="text-gray-600">Your inquiry has been received. Our counselor will contact you within 24 hours to schedule your free demo.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-brand-green font-semibold hover:underline"
        >
          Submit another inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
          <input
            required
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 outline-none transition-all bg-white"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
          <input
            required
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/10 outline-none transition-all bg-white"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
          <input
            required
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/10 outline-none transition-all bg-white"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Course Interest</label>
          <select
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/10 outline-none transition-all bg-white appearance-none"
            value={formData.courseInterest}
            onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
          >
            <option value="">Select a course</option>
            {COURSES.map(c => (
              <option key={c.id} value={c.title}>{c.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 ml-1">Message (Optional)</label>
        <textarea
          rows={4}
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/10 outline-none transition-all bg-white"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-orange-grad text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-brand-orange/20 active:scale-[0.98] disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Submit
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
