export default interface JSONResumeObject {
  skills?: JSONResume.Skill[];
  languages?: JSONResume.Language[];
}

export namespace JSONResume {
  export interface Skill {
    name: string;
    keywords?: string[];
  }

  export interface Language {
    language: string;
    fluency?: string;
  }
}
