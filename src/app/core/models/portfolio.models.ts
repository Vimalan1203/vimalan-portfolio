export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  duration: string;
  highlights: string[];
  category: 'government' | 'enterprise' | 'personal';
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  id: string;
  category: string;
  name: string;
  proficiency: number; // 0-100
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AuthUser {
  username: string;
  token: string;
}
