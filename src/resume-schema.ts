export default interface ResumeObject {
  skills?: ResumeEntry[] | null;
  languages?: ResumeEntry[] | null;
}

export interface ResumeEntry {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  keywords?: React.ReactNode;
  description?: React.ReactNode;
  highlights?: React.ReactNode;
}
