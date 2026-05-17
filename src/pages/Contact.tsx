import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, ExternalLink } from 'lucide-react';
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

        {/* Map Integration */}
        <section className="mt-32">
          <div className="w-full h-[500px] bg-white rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white relative group">
            <iframe 
              title="Kanchipuram Training Center Map"
              className="w-full h-full grayscale-[0.2] contrast-[1.1]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15563.151187421162!2d79.68962534571168!3d12.834399715505055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c3c393798933%3A0xc3f83737ec3a1d95!2sKanchipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714560000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-96 glass p-6 rounded-2xl shadow-xl border border-white/40">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-brand-primary">Kanchipuram Training Center</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">55M, TNHB, Rajiv gandhi street, Pallavan Nagar, 631501</p>
                  <a 
                    href="https://maps.google.com/?q=Kanchipuram,+Tamil+Nadu,+India" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-orange uppercase tracking-wider mt-2 hover:underline"
                  >
                    Open in Google Maps
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
