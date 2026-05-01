import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Trash2, Phone, Mail, Clock, Download, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Admin() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const leadsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLeads(leadsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      try {
        await deleteDoc(doc(db, 'leads', id));
      } catch (err) {
        console.error("Error deleting lead:", err);
      }
    }
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
          l.createdAt?.toDate().toLocaleString()
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
          <button 
            onClick={exportLeads}
            className="bg-brand-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-primary/95 transition-all shadow-lg"
          >
            <Download size={20} />
            Export CSV
          </button>
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
                          {lead.createdAt?.toDate().toLocaleDateString()}
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
    </div>
  );
}
