export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  eligibility: string;
  certification: string;
  syllabus: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role: string;
  image?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  message?: string;
  createdAt: any;
}
