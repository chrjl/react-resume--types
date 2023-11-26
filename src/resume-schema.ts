export default interface ResumeObject {
  skills?: ResumeEntry[] | null;
  languages?: ResumeEntry[] | null;
  education?: ResumeEntry[] | null;
  certificates?: ResumeEntry[] | null;
  projects?: ResumeEntry[] | null;
}

export interface ResumeEntry {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  note?: React.ReactNode;
  description?: React.ReactNode;
  highlights?: React.ReactNode;
}
