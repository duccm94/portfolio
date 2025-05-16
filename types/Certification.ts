/**
 * Represents a certification.
 */
export interface Certification {
  /**
   * The name of the certification.
   * @example "AWS Certified Solutions Architect - Associate"
   */
  name: string;

  /**
   * The organization that issued the certification.
   * @example "Amazon Web Services"
   */
  issuingOrganization: string;

  /**
   * Optional: The icon for the issuing organization.
   * Uses nuxt-icon format (e.g., 'mdi:aws').
   * @example "mdi:aws"
   */
  organizationIcon?: string;

  /**
   * The date when the certification was issued, in YYYY-MM-DD or YYYY-MM format.
   * @example "2023-03-15"
   */
  issueDate: string;

  /**
   * Optional: The date when the certification expires, in YYYY-MM-DD or YYYY-MM format.
   * @example "2025-03-15"
   */
  expirationDate?: string;

  /**
   * Optional: The ID of the credential.
   * @example "ABCDEFGHIJKL"
   */
  credentialId?: string;

  /**
   * Optional: A URL to the credential verification page or certificate.
   * @example "https://www.credly.com/badges/..."
   */
  credentialUrl?: string;

  /**
   * Optional: A brief description or key skills covered by the certification.
   * @example "Validates ability to design and deploy well-architected solutions on AWS."
   */
  description?: string;
}
