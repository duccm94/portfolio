<template>
  <div :class="$style.certificationSection">
    <h2 :class="$style.sectionTitle">Certifications</h2>
    <ul :class="$style.certificationList">
      <li v-for="(cert, index) in certifications" :key="index" :class="$style.certificationItem">
        <div :class="$style.certHeader">
          <h3 :class="$style.certName">{{ cert.name }}</h3>
          <p :class="$style.certOrg">{{ cert.issuingOrganization }}</p>
        </div>
        <p :class="$style.certDate">Obtained: {{ cert.issueDate }}</p>
        <p v-if="cert.expirationDate" :class="$style.certExpiry">Expires: {{ cert.expirationDate }}</p>
        <p v-if="cert.description" :class="$style.certDescription">{{ cert.description }}</p>
        <div :class="$style.certLinks">
          <template v-if="Array.isArray(cert.credentialUrl)">
            <a v-for="(url, idx) in cert.credentialUrl" :key="idx" :href="url" target="_blank" rel="noopener noreferrer" :class="$style.certLink">
              View Credential {{ idx + 1 }}
            </a>
          </template>
          <a v-else-if="cert.credentialUrl" :href="cert.credentialUrl" target="_blank" rel="noopener noreferrer" :class="$style.certLink">
            View Credential
          </a>
          <span v-if="cert.credentialId" :class="$style.certId">ID: {{ cert.credentialId }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { certifications } from '@/data/certificationData';
</script>

<style module>
.certificationSection {
  margin-top: 40px;
  font-family: var(--font-sans);
}

.sectionTitle {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--color-text-primary);
  border-bottom: 2px solid var(--color-primary-500);
  padding-bottom: 10px;
}

.certificationList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.certificationItem {
  background-color: var(--color-background-secondary);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.certificationItem:hover {
  transform: translateY(-5px);
}

.certHeader {
  margin-bottom: 10px;
}

.certName {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-emphasis);
  margin: 0 0 5px 0;
}

.certOrg {
  font-size: 1rem;
  font-style: italic;
  color: var(--color-text-secondary);
  margin: 0;
}

.certDate,
.certExpiry {
  font-size: 0.9rem;
  color: var(--color-text-tertiary);
  margin: 5px 0;
}

.certDescription {
  font-size: 1rem;
  color: var(--color-text-primary);
  margin: 10px 0;
  line-height: 1.6;
}

.certLinks {
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.certLink {
  font-size: 0.9rem;
  color: var(--color-primary-500);
  text-decoration: none;
  font-weight: 500;
}

.certLink:hover {
  text-decoration: underline;
  color: var(--color-primary-600);
}

.certId {
  font-size: 0.8rem;
  color: var(--color-text-tertiary);
  background-color: var(--color-background-muted);
  padding: 3px 6px;
  border-radius: 4px;
}
</style>
