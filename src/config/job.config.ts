// Job-related enums and constants
export const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'] as const;
export const EXPERIENCE_LEVELS = ['Entry', 'Intermediate', 'Senior', 'Expert'] as const;
export const JOB_STATUS = ['Draft', 'Active', 'Paused', 'Closed', 'Expired'] as const;
export const EMPLOYMENT_TYPES = ['Remote', 'Hybrid', 'On-site'] as const;
export const URGENCY_LEVELS = ['Low', 'Medium', 'High', 'Urgent'] as const;

// Types based on predefined options
export type JobType = typeof JOB_TYPES[number];
export type ExperienceLevel = typeof EXPERIENCE_LEVELS[number];
export type JobStatus = typeof JOB_STATUS[number];
export type EmploymentType = typeof EMPLOYMENT_TYPES[number];
export type UrgencyLevel = typeof URGENCY_LEVELS[number];