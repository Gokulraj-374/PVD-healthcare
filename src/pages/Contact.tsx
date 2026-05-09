import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';
import LeadForm from '../components/LeadForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 84895 64699',
      desc: 'Mon-Sat: 9:00 AM - 6:00 PM',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'pvdhealthcare@gmail.com',
      desc: 'We reply within 24 hours',
      color: 'bg-violet-50 text-brand-violet'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Kanchipuram, Tamil Nadu',
      desc: '55M, TNHB, Rajiv gandhi street, Pallavan Nagar, 631501',
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <header className="space-y-6">
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-orange">Get In Touch</h2>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-primary leading-tight">
                Let's Start Your <br />
                <span className="text-brand-orange">Career Journey</span>
              </h1>
              <p className="text-lg text-gray-600">
                Have questions about certifications or syllabus? Our counselors are here to help you choose the right path for your life science degree.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-[2rem] border border-gray-100 bg-white hover:shadow-lg transition-all group">
                   <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                     <item.icon size={28} />
                   </div>
                   <div className="space-y-1">
                     <h4 className="font-bold text-lg text-brand-primary">{item.title}</h4>
                     <p className="text-gray-900 font-semibold">{item.value}</p>
                     <p className="text-sm text-gray-500">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>


          </div>

          {/* Right: Lead Form Card */}
          <div className="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-2xl border border-gray-50 relative">
             <div className="absolute top-0 right-12 w-24 h-2 bg-brand-orange/20 rounded-b-full" />
             <div className="space-y-10">
               <div className="space-y-2">
                 <h3 className="text-3xl font-display font-bold text-brand-primary">Counseling Form</h3>
                 <p className="text-gray-500">Fill in your details and we'll get back to you shortly.</p>
               </div>
               <LeadForm />
             </div>
          </div>
        </div>

        {/* Map Integration Placeholder */}
        <section className="mt-32">
          <div className="w-full h-[400px] bg-gray-100 rounded-[3rem] overflow-hidden shadow-inner relative group">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-gray-400 bg-gray-50 group-hover:bg-gray-100 transition-colors">
              <Globe size={48} className="animate-pulse" />
              <p className="font-display font-bold text-xl uppercase tracking-widest">Google Maps Integration</p>
              <p className="text-sm">Chennai Training Center Location</p>
              <button className="mt-4 bg-white px-6 py-2 rounded-full border border-gray-200 text-xs font-bold hover:shadow-md transition-all">
                Open in Google Maps
              </button>
            </div>
            {/* Real iframe mapping would go here */}
            {/* <iframe title="map" className="w-full h-full" src="..." /> */}
          </div>
        </section>
      </div>
    </div>
  );
}
