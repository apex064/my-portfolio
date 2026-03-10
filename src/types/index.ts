export interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  image?: string;
  createdAt: string;
}

export interface Skill {
  id: number;
  name: string;
  level?: string;
  category?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  avatar?: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}
