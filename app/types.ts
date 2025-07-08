
export interface Project {
  name: string;
  id: number;
  img: string;
  description: string;
  technologies: string[];
  link: {
    url: string;
    text: string;
  } | null;
  github: {
    url: string;
    text: string;
  } | null;
}

export interface Job {
  name: string;
  logo: string;
  jobTitle: string;
  date: string;
  description: string;
}
