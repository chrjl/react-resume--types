export default interface JSONResumeObject {
  skills?: JSONResumeEntry.Skill[];
  languages?: JSONResumeEntry.Language[];
  education?: JSONResumeEntry.Education[];
  certificates?: JSONResumeEntry.Certificate[];
  projects?: JSONResumeEntry.Project[];
  work?: JSONResumeEntry.Work[];
  experience?: JSONResumeEntry.Work[];
}

export interface JSONResumeMeta {
  _display?: boolean;
}

export namespace JSONResumeEntry {
  export interface Skill extends JSONResumeMeta {
    name: string;
    level?: string;
    keywords?: string[];
  }

  export interface Language extends JSONResumeMeta {
    language: string;
    fluency?: string;
  }

  export interface Education extends JSONResumeMeta {
    institution: string;
    url?: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
    score?: string;
    courses?: string[];
  }

  export interface Certificate extends JSONResumeMeta {
    name: string;
    date?: string;
    issuer?: string;
    url?: string;
  }

  export interface Project extends JSONResumeMeta {
    name: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    highlights?: string[];
    url?: string | string[];
    keywords?: string[];
  }

  export interface Work extends JSONResumeMeta {
    name: string;
    department?: string;
    location?: string;
    position?: string;
    url?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    highlights?: string[];
  }
}
