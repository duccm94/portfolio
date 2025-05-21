/**
 * Represents the data structure for the hero section.
 */
export interface Hero {
  /**
   * The full name to display.
   * @example "Duc CM"
   */
  name: string;

  /**
   * The job title or professional headline.
   * @example "Senior Software Engineer"
   */
  title: string;

  /**
   * An array of strings for typing animation.
   * @example ['This is ^1000 first sentence.', 'This is second sentence.']
   */
  typing: string[];

  /**
   * A short biography or personal statement.
   * @example "Passionate and experienced software engineer..."
   */
  bio: string;

  /**
   * Path to the profile picture. Should be relative to the `public` directory.
   * @example "/profile.jpg"
   */
  avatarUrl: string;

  /**
   * Alt text for the profile picture.
   * @example "Duc CM - Profile Picture"
   */
  avatarAlt: string;

  /**
   * Optional: Current location.
   * @example "Tokyo, Japan"
   */
  location?: string;

  /**
   * Optional: Array of social media links.
   */
  socialLinks?: SocialLink[];
}

/**
 * Represents a social media link.
 */
export interface SocialLink {
  /**
   * The name of the social media platform or link type.
   * @example "GitHub"
   */
  name: string;

  /**
   * The URL for the social media profile or link.
   * @example "https://github.com/your-github"
   */
  url: string;

  /**
   * The icon name (e.g., from nuxt-icon, mdi:github).
   * @example "mdi:github"
   */
  icon: string;
}
