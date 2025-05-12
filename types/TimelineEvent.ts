export interface TimelineEvent {
  id: string;
  startDate: string;
  endDate: string; // endDate can be same as startDate for single-point event
  title: string;
  organization: string;
  location: string;
  shortDescription: string;
  detailedDescription: string | string[]; // Can be a single string or array of paragraphs
  skills?: string[];
}
