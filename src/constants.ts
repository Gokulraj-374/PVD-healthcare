import { type Course, type Testimonial, type Partner } from './types';

export const COURSES: Course[] = [
  {
    id: 'basic-medical-coding',
    title: 'Basic Medical Coding Training',
    description: 'Perfect for beginners looking to enter the healthcare industry. Covers anatomy, physiology, and basic coding systems.',
    duration: '2 Months',
    eligibility: 'Life Science Graduate / Any Degree',
    certification: 'PVD Padhvidass Course Completion Certificate',
    syllabus: [
      'Anatomy and Physiology',
      'Medical Terminology',
      'ICD-10-CM Basic Conventions',
      'CPT Basic Guidelines',
      'HCPCS Level II'
    ],
    image: 'basic-medical-coding.png'
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
    image: 'advanced-medical-coding.png'
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
    image: 'cpc-certification.png'
  },
  {
    id: 'ccs-certification',
    title: 'CCS Certification Training',
    description: 'Master Certified Coding Specialist (CCS) requirements and coding accuracy.',
    duration: '3 Months',
    eligibility: 'Life Science Degree or CPC Holders',
    certification: 'Certified Coding Specialist Certification',
    syllabus: [
      'Medical Record Documentation Standards',
      'IP DRG Coding',
      'ICD-10-PCS (Procedure Coding System)',
      'Revenue Cycle Management',
      'Data Analytics in Healthcare'
    ],
    image: 'ccs-certification.png'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Dharshini',
    role: 'CPC Certified Coder at Omega Healthcare',
    text: 'PVD Padhvidass changed my career. The 100% pass guarantee is real—I passed CPC on my first attempt!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Rahul Kumar',
    role: 'Medical Coding Auditor',
    text: 'The trainers are industry experts. The practical training helped me land a job in a top MNC.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Anjali S.',
    role: 'Medical Billers',
    text: 'Highly recommend for anyone wanting to start in medical coding. Excellent atmosphere and support.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
  }
];


