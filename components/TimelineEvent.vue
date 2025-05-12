<template>
  <div v-if="event" :class="$style.detailsPanel">
    <h2 :class="$style.detailsTitle">{{ event.title }}</h2>
    <p :class="$style.detailsOrganization">{{ event.organization }}</p>
    <p v-if="event.location" :class="$style.detailsLocation">{{ event.location }}</p>
    <p :class="$style.detailsDate">
      {{ event.startDate }} - {{ event.endDate }}
    </p>
    <div :class="$style.detailsDescription">
      <template v-if="Array.isArray(event.detailedDescription)">
        <p v-for="(paragraph, index) in event.detailedDescription" :key="index">{{ paragraph }}</p>
      </template>
      <template v-else>
        <p>{{ event.detailedDescription }}</p>
      </template>
    </div>
    <div v-if="event.skills && event.skills.length > 0" :class="$style.detailsSkills">
      <strong>Skills:</strong> {{ event.skills.join(', ') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimelineEvent } from '~/types/TimelineEvent';

interface Props {
  event: TimelineEvent | null;
}

defineProps<Props>();
</script>

<style module>
.detailsPanel {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* Sticky positioning for larger screens is handled in the parent or here if needed */
}

.detailsTitle {
  font-size: 1.8em;
  font-weight: bold;
  color: #333;
  margin-top: 0;
  margin-bottom: 8px;
}

.detailsOrganization {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 4px;
}

.detailsLocation {
  font-size: 1em;
  color: #777;
  margin-bottom: 12px;
}

.detailsDate {
  font-size: 0.9em;
  color: #6c63ff;
  font-weight: bold;
  margin-bottom: 15px;
}

.detailsDescription {
  font-size: 1em;
  color: #444;
  line-height: 1.6;
  margin-bottom: 15px;
}

.detailsDescription p {
  margin-bottom: 10px;
}

.detailsSkills {
  font-size: 0.9em;
  color: #555;
}

.detailsSkills strong {
  color: #333;
}

/* Responsive: Stack on smaller screens if not handled by parent */
@media (max-width: 767px) {
  .detailsPanel {
    margin-top: 20px;
    position: static; /* Override sticky if it was applied here */
    max-height: none;
    overflow-y: visible;
  }
}
</style>
