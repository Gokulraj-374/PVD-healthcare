import { type Course, type Testimonial, type Partner } from './types';

export const COURSES: Course[] = [
  {
    id: 'basic-medical-coding',
    title: 'Basic Medical Coding Training',
    description: 'Perfect for beginners looking to enter the healthcare industry. Covers anatomy, physiology, and basic coding systems.',
    duration: '2 Months',
    eligibility: 'Life Science Graduate / Any Degree',
    certification: 'PVD Padhividass Course Completion Certificate',
    syllabus: [
      'Anatomy and Physiology',
      'Medical Terminology',
      'ICD-10-CM Basic Conventions',
      'CPT Basic Guidelines',
      'HCPCS Level II'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'advanced-medical-coding',
    title: 'Advanced Medical Coding Training',
    description: 'Deep dive into complex scenarios, auditing, and specialized coding for various specialties.',
    duration: '3 Months',
    eligibility: 'Life Science Graduate / Experience in Basic Coding',
    certification: 'Advanced Medical Coding Specialist Certificate',
    syllabus: [
      'Complex ICD-10-CM Coding',
      'Specialty Coding (Cardiology, Ortho, Surgery)',
      'Auditing Principles',
      'Compliance and HIPAA',
      'DRG Assignment'
    ],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cpc-certification',
    title: 'CPC (Certified Professional Coder) Training',
    description: 'Rigorous preparation for the AAPC CPC exam with 100% pass guarantee.',
    duration: '4 Months',
    eligibility: 'Any Life Science Degree',
    certification: 'AAPC CPC Global Certification',
    syllabus: [
      'All 10,000+ Series CPT Codes',
      'Evaluation and Management (E/M)',
      'ICD-10-CM Guideline Mastery',
      'Practice Exams (20+ Full Mock Tests)',
      'Exam Strategy Workshops'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'css-certification',
    title: 'CSS Certification Training',
    description: 'Master Clinical Systems Specialist (CSS) requirements and coding accuracy.',
    duration: '3 Months',
    eligibility: 'Life Science Degree or CPC Holders',
    certification: 'Clinical Systems Specialist Certification',
    syllabus: [
      'Medical Record Documentation Standards',
      'IP DRG Coding',
      'ICD-10-PCS (Procedure Coding System)',
      'Revenue Cycle Management',
      'Data Analytics in Healthcare'
    ],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e90526ef49?q=80&w=600&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Dharshini',
    role: 'CPC Certified Coder at Omega Healthcare',
    text: 'PVD Padhividass changed my career. The 100% pass guarantee is real—I passed CPC on my first attempt!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Rahul Kumar',
    role: 'Medical Coding Auditor',
    text: 'The trainers are industry experts. The practical placement training helped me land a job in a top MNC.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Anjali S.',
    role: 'Medical Billers',
    text: 'Highly recommend for anyone wanting to start in medical coding. Excellent atmosphere and support.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop'
  }
];

export const PARTNERS: Partner[] = [
  { id: 'p1', name: 'Omega Healthcare', logo: 'https://placeholder.com/150x80?text=Omega' },
  { id: 'p2', name: 'Vee Technologies', logo: 'https://placeholder.com/150x80?text=VeeTech' },
  { id: 'p3', name: 'Access Healthcare', logo: 'https://placeholder.com/150x80?text=Access' },
  { id: 'p4', name: 'Visionary RCM', logo: 'https://placeholder.com/150x80?text=Visionary' },
];
