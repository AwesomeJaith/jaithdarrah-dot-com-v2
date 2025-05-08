export interface Project {
  title: string;
  startDate?: Date;
  endDate?: Date;
  link?: string;
  description: string;
  techStack?: string[];
}

export interface WorkExperience {
  company: string;
  jobTitle: string;
  startDate?: Date;
  endDate?: Date;
  link?: string;
  description: string;
  techStack?: string[];
}
