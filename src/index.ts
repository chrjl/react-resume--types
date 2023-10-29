import React from 'react';

export interface ResumeEntry {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  keywords?: React.ReactNode;
  description?: React.ReactNode;
  highlights?: React.ReactNode;
}
