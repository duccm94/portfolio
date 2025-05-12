/**
 * Represents an item in the technology stack.
 */
export interface TechStackItem {
  /**
   * The name of the technology, tool, or platform.
   * @example "TypeScript"
   */
  name: string;

  /**
   * The category the technology belongs to.
   * @example "Frontend"
   */
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'DevOps' | 'Testing' | 'Mobile' | 'Other';

  /**
   * Optional: Path to an SVG icon or a class name for an icon font for visual representation.
   * @example "devicon-typescript-plain"
   */
  icon?: string;

  /**
   * Optional: Proficiency level or years of experience.
   * @example "Advanced" or "3 years"
   */
  // proficiency?: string; // Uncomment and use if needed
}
