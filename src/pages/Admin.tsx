import { useState, useEffect } from 'react';
import { subscribeToLeads, deleteLead } from '../lib/leads';
import { Trash2, Phone, Mail, Clock, Download, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Admin() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem('pvd_admin_auth') === 'true') {
      setIsAuthorized(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthorized) return;
    
    const unsubscribe = subscribeToLeads((leadsData) => {
      setLeads(leadsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isAuthorized]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin@pvd') {
      setIsAuthorized(true);
      sessionStorage.setItem('pvd_admin_auth', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('pvd_admin_auth');
    setIsAuthorized(false);
    setLeads([]);
  };

  if (!isAuthorized) {
    return (
      <div className="pt-32 pb-24 bg-gray-50 min-h-screen flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl space-y-8"
        >
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-display font-bold text-brand-primary">Admin Access</h1>
            <p className="text-gray-500 text-sm">Please enter the administrator password to view leads.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password"
              placeholder="Enter password"
              className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-orange outline-none transition-all text-center text-lg tracking-widest font-mono"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <button 
              type="submit"
              className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
            >
              Unlock Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const handleDelete = (id: string) => {
    setDeleteConfirmId(id);
  };

  const filteredLeads = leads.filter(lead => 
    lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.courseInterest?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportLeads = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + ["Name", "Email", "Phone", "Course", "Message", "Date"].join(",") + "\n"
      + leads.map(l => [
          l.name, 
          l.email, 
          l.phone, 
          l.courseInterest, 
          l.message?.replace(/,/g, ' '), 
          l.createdAt ? (l.createdAt.toDate ? l.createdAt.toDate().toLocaleString() : new Date(l.createdAt).toLocaleString()) : ''
        ].join(",")).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "pvd_leads.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl font-display font-bold text-brand-primary">Leads Dashboard</h1>
            <p className="text-gray-500">Manage student inquiries and course enrollments.</p>
          </div>
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <button 
              onClick={exportLeads}
              className="flex-grow md:flex-grow-0 bg-white text-brand-primary border border-gray-200 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all shadow-sm"
            >
              <Download size={20} />
              Export CSV
            </button>
            <button 
              onClick={handleLogout}
              className="flex-grow md:flex-grow-0 bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-100 transition-all"
            >
              Logout
            </button>
          </div>
        </header>

        <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text"
                placeholder="Search leads by name, email or course..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-orange outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Total Leads: <span className="text-brand-orange">{filteredLeads.length}</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50 text-left">
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-gray-400">Student Info</th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-gray-400">Course Interest</th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-gray-400">Date Received</th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <AnimatePresence mode="popLayout">
                  {loading ? (
                    <tr>
                      <td colSpan={4} className="px-8 py-20 text-center text-gray-400">
                        <div className="w-8 h-8 border-4 border-orange-100 border-t-brand-orange rounded-full animate-spin mx-auto mb-4" />
                        Loading leads...
                      </td>
                    </tr>
                  ) : filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-8 py-20 text-center text-gray-400 italic">
                        No leads found.
                      </td>
                    </tr>
                  ) : filteredLeads.map((lead) => (
                    <motion.tr
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={lead.id}
                      className="hover:bg-orange-50/30 transition-colors group"
                    >
                      <td className="px-8 py-6">
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-brand-primary">{lead.name}</span>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1"><Mail size={12} /> {lead.email}</span>
                            <span className="flex items-center gap-1"><Phone size={12} /> {lead.phone}</span>
                          </div>
                          {lead.message && (
                             <p className="mt-2 text-xs text-gray-400 bg-gray-50 p-2 rounded-lg border border-gray-100 line-clamp-2">
                               {lead.message}
                             </p>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-brand-orange text-[10px] font-bold uppercase tracking-widest rounded-full">
                          {lead.courseInterest}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock size={14} />
                          {lead.createdAt ? (lead.createdAt.toDate ? lead.createdAt.toDate().toLocaleDateString() : new Date(lead.createdAt).toLocaleDateString()) : ''}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <button 
                          onClick={() => handleDelete(lead.id)}
                          className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Custom Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirmId && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-8 rounded-3xl max-w-sm w-full shadow-2xl space-y-6 text-center border border-gray-100"
            >
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
                <Trash2 size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold text-brand-primary">Delete Lead Inquiry?</h3>
                <p className="text-gray-500 text-sm">Are you sure you want to permanently delete this lead? This action cannot be undone.</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setDeleteConfirmId(null)}
                  className="flex-grow bg-gray-50 text-gray-500 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    if (deleteConfirmId) {
                      await deleteLead(deleteConfirmId);
                      setDeleteConfirmId(null);
                    }
                  }}
                  className="flex-grow bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/10"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
