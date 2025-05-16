<template>
  <SectionWrapper
    id="certifications"
    background-class="bg-slate-100"
  >
    <h2 class="text-3xl font-semibold mb-5">Certifications</h2>
    <ul>
      <li
        v-for="(cert, index) in certifications" :key="index"
        class="bg-white rounded-lg p-4 mb-3 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
      >
        <div>
          <h3 class="text-lg font-medium">{{ cert.name }}</h3>
          <div class="flex items-center gap-2 text-gray-500">
            <p>Issued by</p>
            <Icon v-if="cert.organizationIcon" :name="cert.organizationIcon" class="text-lg" />
            <p class="font-medium">{{ cert.issuingOrganization }}</p>
          </div>
        </div>
        <p class="text-gray-500">
          Issued {{ cert.issueDate }}
          <span v-if="cert.expirationDate"> - Expires {{ cert.expirationDate }}</span>
        </p>
        <p v-if="cert.description" class="text-gray-500">{{ cert.description }}</p>
        <div v-if="cert.credentialUrl || cert.credentialId" class="mt-2 flex items-center gap-4">
          <a
            v-if="cert.credentialUrl"
            :href="cert.credentialUrl" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-1 bg-indigo-500 hover:bg-indigo-600 text-white py-1 px-2 rounded-md"
          >
            View Credential
            <Icon name="mdi:open-in-new" />
          </a>
          <span v-if="cert.credentialId" class="text-gray-500 bg-gray-100 py-1 px-2 rounded-md">ID: {{ cert.credentialId }}</span>
        </div>
      </li>
    </ul>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { certifications } from '@/data/certificationData';
</script>
