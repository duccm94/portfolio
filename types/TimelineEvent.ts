/**
 * Represents a generic event in a timeline, such as work experience, education, or other significant life events.
 */
export interface TimelineEvent {
  /**
   * Unique identifier for the timeline event.
   * @example "1"
   */
  id: string;

  /**
   * The start date of the event, in YYYY-MM-DD or YYYY-MM format.
   * @example "2020-01-15"
   */
  startDate: string;

  /**
   * The end date of the event, in YYYY-MM-DD or YYYY-MM format.
   * Can be the same as startDate for single-point events (e.g., graduation), or "Present" for ongoing events.
   * @example "2022-12-31"
   */
  endDate: string;

  /**
   * The title of the event.
   * @example "Software Engineer"
   */
  title: string;

  /**
   * The organization associated with the event (e.g., company name, university name).
   * @example "DCM Inc."
   */
  organization: string;

  /**
   * The location where the event took place.
   * @example "San Francisco, CA"
   */
  location: string;

  /**
   * A brief summary or overview of the event.
   * @example "Led the development of a new e-commerce platform."
   */
  shortDescription: string;

  /**
   * A more detailed description of the event. Can be a single string or an array of strings for multiple paragraphs.
   * @example ["Developed and maintained scalable web applications using microservices architecture.", "Collaborated with cross-functional teams to deliver high-quality software products."]
   */
  detailedDescription: string | string[];

  /**
   * Optional: A list of skills or technologies associated with the event.
   * @example ["TypeScript", "Vue.js", "Node.js", "AWS"]
   */
  skills?: string[];
}
