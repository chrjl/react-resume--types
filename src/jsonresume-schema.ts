export default interface JSONResumeObject {
  skills?: JSONResume.Skill[];
  languages?: JSONResume.Language[];
  education?: JSONResume.Education[];
  certificates?: JSONResume.Certificate[];
  projects?: JSONResume.Project[];
}

export namespace JSONResume {
  export interface Skill {
    name: string;
    level?: string;
    keywords?: string[];
  }

  export interface Language {
    language: string;
    fluency?: string;
  }

  export interface Education {
    institution: string;
    url?: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
    score?: string;
    courses?: string[];
  }

  export interface Certificate {
    name: string;
    date?: string;
    issuer?: string;
    url?: string;
  }

  export interface Project {
    name: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    highlights?: string[];
    url?: string | string[];
    keywords?: string[];
  }
}
